import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
