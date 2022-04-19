import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Home = () => {
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermissionsAsync();
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.mainContent}>
            <MaterialCommunityIcons
              name="barcode-scan"
              size={80}
              color="white"
              style={{ alignSelf: 'center', bottom: 0 }}
            />
          </View>
        </View>
        <Camera
          type={type}
          style={styles.cameraWrapper}
          onBarCodeScanned={(code) => console.log(code)}>
          <BarcodeMask
            width={'85%'}
            height={'20%'}
            showAnimatedLine={true}
            outerMaskOpacity={0.6}
          />
        </Camera>
      </View>
    </SafeAreaView>
  );
};

export default Home;
