import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.lightblue,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: palette.blue,
    justifyContent: 'center',
    backgroundColor: palette.nilegreen,
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
    color: palette.blue,
  },
});
