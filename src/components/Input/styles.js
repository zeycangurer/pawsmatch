import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
  },
  labelText: {
    marginLeft: 20,
    fontSize: 12,
    color: palette.blue,
    marginBottom: -10,
  },
  inputArea: {
    borderBottomColor: palette.blue,
    borderBottomWidth: 2,
    width: '90%',
    alignSelf: 'center',
  },
});
