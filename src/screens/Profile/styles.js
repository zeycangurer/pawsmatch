import {palette} from '../../theme/palette';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.lightblue,
    paddingTop: 36,
  },
  petsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.orange,
    marginTop: 50,
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
