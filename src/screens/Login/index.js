/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { palette } from '../../theme/palette';
import { TextInput, Button } from 'react-native-paper'

import { useNavigation } from '@react-navigation/native';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>LoginPage</Text>
      <View style={styles.input_container}>
        <TextInput
          mode='outlined'
          style={styles.input_area}
          outlineColor={palette.blue}
          textColor={palette.blue}
          activeOutlineColor={palette.blue}
          label='E-mail'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          mode='outlined'
          style={styles.input_area}
          label='Password'
          outlineColor={palette.blue}
          textColor={palette.blue}
          activeOutlineColor={palette.blue}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.button_container}
        >
          <Button compact mode='outlined' style={styles.button} onPress={() => navigation.navigate('signin')}>
            Sign In
          </Button>
          <Button
            style={styles.button}
            mode='contained'>Sign Up</Button>
        </View>
      </View>
    </View>
  );
};

export { LoginPage };
