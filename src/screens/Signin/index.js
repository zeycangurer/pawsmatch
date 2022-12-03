import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TextInput, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {palette} from '../../theme/palette';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>LoginPage</Text>
      <View style={styles.input_container}>
        <TextInput
          mode="outlined"
          style={styles.input_area}
          outlineColor={palette.blue}
          textColor={palette.blue}
          activeOutlineColor={palette.blue}
          label="E-mail"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          mode="outlined"
          style={styles.input_area}
          outlineColor={palette.blue}
          textColor={palette.blue}
          activeOutlineColor={palette.blue}
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          mode="outlined"
          style={styles.input_area}
          outlineColor={palette.blue}
          textColor={palette.blue}
          activeOutlineColor={palette.blue}
          label="Repeat Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.button_container}>
          <Button mode="contained" style={styles.button}>
            Sign In
          </Button>
          <Button
            style={styles.button}
            compact
            mode="outlined"
            onPress={() => navigation.navigate('login')}>
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
};

export {SigninPage};
