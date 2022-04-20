import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductModal from '@mobile/components/ProductModal';

const Home = () => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermissionsAsync();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.mainContent}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={80}
            color="white"
            style={{ alignSelf: 'center', marginTop: '30%' }}
          />
        </View>
        <ProductModal
          product={{
            batch: '1',
            expiringDate: '11/01/1997',
            manufacturingDate: '11/01/1997',
            id: '0',
            origin: 'Americana SP',
          }}
          visible={visible}
          setVisible={setVisible}
        />
      </View>
      <Camera
        type={type}
        style={styles.cameraWrapper}
        onBarCodeScanned={(code) => console.log(code)}>
        <BarcodeMask
          width={'85%'}
          height={'40%'}
          showAnimatedLine={true}
          lineAnimationDuration={1250}
          animatedLineHeight={'0.75%'}
          outerMaskOpacity={0.6}
        />
      </Camera>
    </View>
  );
};

export default Home;
