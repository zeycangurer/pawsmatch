/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { palette } from '../../theme/palette';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: palette.lightblue,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.purple,
    marginBottom: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '40%',
    borderColor: palette.purple,
    marginTop:5,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
  },
  radioGroup: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-evenly',

  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    fontSize: 16,
    color: palette.blue,
    fontWeight: '1000',
  },
  radioTitle: {
    color: palette.purple,
   fontWeight: 'bold',
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
