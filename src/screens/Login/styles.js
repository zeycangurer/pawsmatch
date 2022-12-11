/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: palette.lightblue,
    justifyContent: 'center',
  },
  button_container: {
    margin: 16,
    alignItems: 'center',
  },
  button: {
    width: 200,
    borderColor: palette.purple,
    marginBottom: 10,
  },
  input_container: {
    width: '100%',
    marginTop: 15,
  },
  input_area: {
    width: '90%',
    alignSelf: 'center',
    color: palette.blue,
    backgroundColor: palette.lightblue,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  error: {
    fontSize: 12,
    marginLeft: '5%',
    fontWeight: 'bold',
  },
});
