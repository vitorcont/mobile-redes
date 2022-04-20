import React from 'react';
import { View, Modal, TouchableWithoutFeedback, TouchableOpacity, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Button from '../Button';
import { theme } from '@mobile/theme';
import CrateIcon from '../../assets/crate-icon.png';
interface IModalProps {
  visible?: boolean;
  children?: React.ReactChildren;
  setVisible: (visible: boolean) => void;
  onSubmit?: () => void;
  product?: models.Product;
}

const ProductModal = ({ children, setVisible, visible, onSubmit, product }: IModalProps) => {
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
      onRequestClose={() => setVisible(false)}>
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <View
          style={{
            backgroundColor: '#FFF',
            alignSelf: 'center',
            borderRadius: 10,
            padding: 10,
            width: '85%',
            height: '67.5%',
            marginTop: '40%',
          }}>
          <View>
            <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => setVisible(false)}>
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
                  Novo Pacote
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
                <Button label="Enviar" />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ProductModal;
