import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export default StyleSheet.create({
  container: {
    width: 200,
    height: 40,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 15,
    borderColor: palette.purple,
    backgroundColor: palette.purple,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
