import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Text, Animated, Image } from 'react-native';
import { theme } from '@mobile/theme';
import CheckIcon from '../../assets/check-icon.png';

interface IButtonProps {
  loading?: boolean;
  onPress?: () => void;
  label?: string;
}

const Button = ({ loading, onPress, label }: IButtonProps) => {
  const value = useRef(new Animated.Value(100)).current;
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(value, {
        toValue: pressed ? 60 : 150,
        duration: 700,
        useNativeDriver: false,
      }).start();
    };

    fadeIn();
  }, [pressed]);

  return (
    <Animated.View
      style={{
        width: value,
        height: 60,
        borderRadius: pressed ? 120 : 16,
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => setPressed(!pressed)}
        activeOpacity={0.7}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: pressed ? 120 : 16,
          backgroundColor: '#00FF77',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {pressed ? (
          <Image source={CheckIcon} style={{ width: 30, height: 30 }} />
        ) : (
          <Text
            style={{
              fontFamily: theme.fonts.Bold,
              fontSize: 24,
              color: 'white',
            }}>
            {label}
          </Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Button;
