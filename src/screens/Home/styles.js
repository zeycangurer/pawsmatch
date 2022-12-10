import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    backgroundColor: palette.lightblue,
  },
  cardMale: {
    flex: 1,
    borderRadius: 4,
    justifyContent: 'center',
    backgroundColor: palette.nilegreen,
    marginBottom: 8,
  },
  cardFemale: {
    flex: 1,
    borderRadius: 4,
    justifyContent: 'center',
    backgroundColor: palette.purple,
    marginBottom: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
    color: palette.blue,
  },
});
