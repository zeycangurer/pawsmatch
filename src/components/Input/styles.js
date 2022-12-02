import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
  },
  labelName: {
    marginLeft: 20,
    fontSize: 12,
    color: palette.blue,
    
  },
  inputArea: {
    width: '90%',
    alignSelf: 'center',
  },
});
