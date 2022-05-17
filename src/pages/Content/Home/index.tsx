import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductModal from '@mobile/components/ProductModal';
import { useReduxState } from '@mobile/hooks/useReduxState';
import { listStock, updateStock } from '@mobile/store/Stock/action';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import { useDispatch } from 'react-redux';
import styles from './styles';

const Home = () => {
  const { stock } = useReduxState();
  const { products } = stock;
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [visible, setVisible] = useState(false);
  const [product, setProduct] = useState<models.Product | null>(null);
  const dispatch = useDispatch();

  const onReadQRCode = (value: string) => {
    const object = JSON.parse(value);
    setProduct(object);
    setVisible(true);
  }

  const onSumbit = () => {
    console.log("AQUIII", products)
    const foundProduct = products.find((item) => item.id === (product?.id ?? '0'));
    const amount = (product?.amount ?? 0) + (foundProduct?.amount ?? 0);
    dispatch(updateStock(product?.id ?? '', amount));
    setVisible(false);
  }

  useEffect(() => {
    dispatch(listStock());
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
        {visible ? (
          <ProductModal
            product={product ?? {
              name: 'Picolé Sergel',
              batch: '1',
              expiringDate: '11/01/1997',
              manufacturingDate: '11/01/1997',
              id: '0',
              origin: 'Americana SP',
              amount: 20,
            }}
            visible={visible}
            setVisible={setVisible}
            onSubmit={onSumbit}
          />
        ) : null}
      </View>
      <Camera type={type} style={styles.cameraWrapper} onBarCodeScanned={(result) => onReadQRCode(result.data)}>
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
