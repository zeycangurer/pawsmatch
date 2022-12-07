/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { palette } from '../../theme/palette';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: palette.lightblue,
    justifyContent: 'center',
  },
  button_container: {
    alignItems: 'center',
    margin: 16,
  },
  button: {
    width: 200,
    borderColor: palette.purple,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 16,
    color: palette.blue,
    fontWeight: '1000',
  },
});
