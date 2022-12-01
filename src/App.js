import React from 'react';
import {View, Text} from 'react-native';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  return (
    <View>
      <Input inputname="e-mail" secure={false} type="email-address" />
      <Input inputname="password" secure={true} type="default" />
      <Button name="Login" />
    </View>
  );
};

export default App;
