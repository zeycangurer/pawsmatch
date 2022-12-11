/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { palette } from '../../theme/palette';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: palette.lightblue,
    //justifyContent: 'space-between',
  },
  button_container: {
    alignItems: 'center',
    margin: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    borderColor: palette.purple,
    marginTop:5,
  },
  radioContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    width: '80%',
    marginTop: 8, 
    padding: 5,
  },
  radioGroup: {
    flexDirection: 'row',
    marginTop: 8,
    width: '95%',
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
  },
  radioLabel: {
    fontSize: 16,
    color: palette.blue,
    fontWeight: '1000',
  },
  radioTitle: {
    fontSize: 17,
    color: palette.orange,
   fontWeight: 'bold',
  },
  imageContainer: {
    //justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 1,
  },
});
