import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const Input = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{props.inputname}</Text>
      <TextInput
        style={styles.inputArea}
        secureTextEntry={props.secure}
        keyboardType={props.type}
      />
    </View>
  );
};

export default Input;
