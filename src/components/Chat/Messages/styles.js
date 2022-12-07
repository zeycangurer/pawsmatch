import {StyleSheet} from 'react-native';
import { palette } from '../../../theme/palette';

export default StyleSheet.create({
  container: {
    height: '70%',
    paddingLeft: 8,
    paddingRight: 8,
  },
  dialog: {
    paddingLeft: 16,
    maxWidth: '60%',
    backgroundColor: palette.lightgrey,
    borderColor: palette.yellow,
    borderWidth: 1,
    borderRadius: 14,
    marginTop: 8,
  },
  text: {
    padding: 6,
    fontWeight: '400',
    color: palette.grey,
    fontSize: 16,
  },
  time: {
    position: 'absolute',
    right: 6,
    bottom: 4,
    fontSize: 12,
    color: palette.grey,
  },
  image: {
    flex: 1,
  },
});
