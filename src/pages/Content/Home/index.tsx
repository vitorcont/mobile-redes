import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const Home = () => {
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      // await Camera.requestCameraPermissionsAsync();
      await BarCodeScanner.requestPermissionsAsync();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>

      </View>
      {/* <Camera
        type={type}
        style={styles.cameraWrapper}
        onBarCodeScanned={(code) => console.log(code)}
      /> */}
      <BarCodeScanner
        style={styles.cameraWrapper}
      />
    </View>
  );
};

export default Home;
