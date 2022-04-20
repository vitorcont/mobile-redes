import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
        toValue: pressed ? 10 : 100,
        duration: 700,
        useNativeDriver: false,
      }).start();
    };
    fadeIn();
  }, [pressed]);

  return (
    <Animated.View style={{ width: value, height: 400 }}>
      <TouchableOpacity onPress={() => setPressed(!pressed)} style={{ backgroundColor: '#00FF77' }}>
        <Text>{label}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Button;
