import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {signUp, setAccount} from '../../redux/actions';
import styles from './styles';
import {TextInput, Button} from 'react-native-paper';
import {palette} from '../../theme/palette';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const SigninPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const [repeatPassword, setRepeatPassword] = useState('');

  // const checkRepeatPasswords = () => {
  //   app.password !== repeatPassword
  //     ?
  //     : 'Şifreler eşleşti';
  // };

  return (
    <View style={styles.container}>
      <Text>SingupPage</Text>
      <View style={styles.input_container}>
        <TextInput
          mode="outlined"
          style={styles.input_area}
          outlineColor={palette.blue}
          textColor={palette.blue}
          activeOutlineColor={palette.blue}
          label="E-mail"
          value={app.email}
          onChangeText={d => dispatch(setAccount('email', d))}
        />
        <TextInput
          mode="outlined"
          style={styles.input_area}
          outlineColor={palette.blue}
          textColor={palette.blue}
          activeOutlineColor={palette.blue}
          label="Password"
          secureTextEntry={true}
          value={app.password}
          onChangeText={d => dispatch(setAccount('password', d))}
        />
        <TextInput
          mode="outlined"
          style={styles.input_area}
          outlineColor={palette.blue}
          textColor={palette.blue}
          activeOutlineColor={palette.blue}
          label="Repeat Password"
          secureTextEntry={true}
          value={app.password}
          onChangeText={d => dispatch(setAccount('password', d))}
        />
        <View style={styles.button_container}>
          <Button
            style={styles.button}
            compact
            mode="contained"
            onPress={() => dispatch(signUp())}>
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
});

export {SigninPage};
