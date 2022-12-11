import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import {signUp, setAccount} from '../../redux/actions';
import styles from './styles';
import {TextInput, Button, HelperText} from 'react-native-paper';
import {palette} from '../../theme/palette';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const SigninPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const [repeatPassword, setRepeatPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
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
        <HelperText
          style={styles.error}
          type="error"
          visible={app.email === ''}>
          E-mail is required
        </HelperText>
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
        <HelperText
          style={styles.error}
          type="error"
          visible={app.password === ''}>
          Password is required
        </HelperText>
        <TextInput
          mode="outlined"
          style={styles.input_area}
          outlineColor={palette.blue}
          textColor={palette.blue}
          activeOutlineColor={palette.blue}
          label="Repeat Password"
          secureTextEntry={true}
          value={repeatPassword}
          onChangeText={d => setRepeatPassword(d)}
        />
        <HelperText
          style={styles.error}
          type="error"
          visible={app.password !== repeatPassword}>
          Passwords do not match
        </HelperText>
        <View style={styles.button_container}>
          <Button
            disabled={
              app.password !== repeatPassword ||
              app.password === '' ||
              app.email === ''
            }
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
