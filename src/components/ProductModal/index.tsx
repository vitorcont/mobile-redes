import { AntDesign } from '@expo/vector-icons';
import { theme } from '@mobile/theme';
import React from 'react';
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CrateIcon from '../../assets/crate-icon.png';
import Button from '../Button';
interface IModalProps {
  visible?: boolean;
  children?: React.ReactChildren;
  setVisible: (visible: boolean) => void;
  onSubmit: (visible: boolean) => void;
  product?: models.Product;
  text?: string;
  setText?: (text: string) => void;
}

const ProductModal = ({
  children,
  setVisible,
  visible,
  onSubmit,
  product,
  setText,
  text,
}: IModalProps) => {
  const productData = [
    {
      title: 'ID:',
      value: product?.id,
    },
    {
      title: 'Lote:',
      value: product?.batch,
    },
    {
      title: 'Fabricação:',
      value: product?.manufacturingDate,
    },
    {
      title: 'Validade:',
      value: product?.expiringDate,
    },
    {
      title: 'Origem:',
      value: product?.origin,
    },
  ];

  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={() => onSubmit(false)}>
      <TouchableWithoutFeedback>
        <View
          style={{
            backgroundColor: '#FFF',
            alignSelf: 'center',
            borderRadius: 10,
            padding: 10,
            width: '85%',
            height: '72.5%',
            marginTop: '40%',
          }}>
          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ alignSelf: 'flex-start' }}
              onPress={() => setVisible(false)}>
              <AntDesign name="closecircle" size={24} color="#707070" />
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={CrateIcon}
                style={{ width: 150, height: 150 }}
                resizeMode={'contain'}
              />
            </View>
            <View
              style={{
                width: '100%',
                height: '90%',
                marginTop: '5%',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  backgroundColor: '#FAFAFA',
                  borderRadius: 16,
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: theme.fonts.Bold,
                    alignSelf: 'center',
                    color: '#707070',
                  }}>
                  {product?.name}
                </Text>
                <View
                  style={{
                    width: '90%',
                    height: 1,
                    backgroundColor: '#E0E0E0',
                    alignSelf: 'center',
                    marginVertical: '5%',
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '5%',
                    marginBottom: '5%',
                  }}>
                  <Text
                    style={{
                      marginLeft: '5%',
                      flexWrap: 'wrap',
                      maxWidth: '30%',
                      fontFamily: theme.fonts.Bold,
                      color: '#707070',
                    }}>
                    Quantidade:
                  </Text>
                  <View>
                    <TextInput
                      style={{
                        marginRight: '20%',
                        fontFamily: theme.fonts.Regular,
                        color: '#707070',
                        fontSize: 20,
                      }}
                      placeholder="1"
                      placeholderTextColor={'#707070'}></TextInput>
                  </View>
                </View>

                {productData.map((item) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: '5%',
                    }}>
                    <Text
                      style={{
                        marginLeft: '5%',
                        flexWrap: 'wrap',
                        maxWidth: '30%',
                        fontFamily: theme.fonts.Regular,
                        color: '#707070',
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        marginRight: '20%',
                        fontFamily: theme.fonts.Regular,
                        color: '#707070',
                      }}>
                      {item.value}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={{ alignItems: 'center', marginTop: '5%' }}>
                <Button label="Enviar" onPress={() => onSubmit(false)} />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ProductModal;
