import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductModal from '@mobile/components/ProductModal';
import { listStock } from '@mobile/store/Stock/action';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import { useDispatch } from 'react-redux';
import styles from './styles';

const Home = () => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      (async () => {
        await Camera.requestCameraPermissionsAsync();
      })();
    } catch (error) {}
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.mainContent}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={80}
            color="white"
            style={{ alignSelf: 'center', marginTop: '15%' }}
          />
        </View>
        <ProductModal
          product={{
            name: 'Picolé Sergel',
            batch: '1',
            expiringDate: '11/01/1997',
            manufacturingDate: '11/01/1997',
            id: '0',
            origin: 'Americana SP',
            amount: 20,
          }}
          visible={visible}
          setVisible={(value) => {
            console.log("a")
            dispatch(listStock());
          }}
        />
      </View>
      <Camera type={type} style={styles.cameraWrapper} onBarCodeScanned={() => setVisible(true)}>
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
