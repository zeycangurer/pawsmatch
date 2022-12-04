/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
//import Button from '../../components/Button';
import Input from '../../components/Input';

import { TextInput, Button } from 'react-native-paper';
import { palette } from '../../theme/palette';
import { useNavigation } from '@react-navigation/native';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>LoginPage</Text>
      <View>
        <Input
          labelName='E-mail'
          secure={false}
          type='email-address'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          labelName='Password'
          secure={true}
          type='default'
          mode='outlined'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View
          style={{justifyContent:'space-between', flexDirection:'row'}}
        >
          <Button compact onPress={() => navigation.navigate('signin')}>
            Sign Up
          </Button>
          <Button mode="contained">
            Sign In
          </Button>
        </View>
      </View>
    </View>
  );
};

export { LoginPage };
