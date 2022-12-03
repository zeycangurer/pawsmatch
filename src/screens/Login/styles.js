/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: palette.lightblue,
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  button: {
    width: 100,
    borderColor: palette.purple,
  },
  input_container: {
    width: '100%',
    marginTop: 15,
  },
  input_area: {
    width: '90%',
    alignSelf: 'center',
    color: palette.blue,
    marginBottom: 10,
  },
});
