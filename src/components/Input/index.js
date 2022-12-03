/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-paper'
import { palette } from '../../theme/palette';

const Input = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{props.inputname}</Text>
      <TextInput
        label={props.labelName}
        style={styles.inputArea}
        secureTextEntry={props.secure}
        keyboardType={props.type}
        mode='outlined'
        outlineColor={palette.blue}
        textColor={palette.blue}
        activeOutlineColor={palette.blue}
      />
    </View>
  );
};

export default Input;
