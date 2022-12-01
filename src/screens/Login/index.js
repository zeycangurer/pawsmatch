import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text>LoginPage</Text>
      <View>
        <Input inputname="e-mail" secure={false} type="email-address" />
        <Input inputname="password" secure={true} type="default" />
        <Button name="Login" />
      </View>
    </View>
  );
};

export {LoginPage};
