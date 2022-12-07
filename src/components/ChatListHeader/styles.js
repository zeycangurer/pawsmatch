import {StyleSheet} from 'react-native';
import { palette } from '../../theme/palette';

export default StyleSheet.create({
  container: {
    backgroundColor: palette.blue,
    height: 50,
    width: '100%',
  },
  topWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
  },
  titleText: {
    color: palette.lightgrey,
    fontWeight: '700',
    fontSize: 25,
    marginTop: 5,
  },
  titleWrapper: {
    flex: 1,
    left: 16,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    right: 16,
  },
  searchIcon: {
    left: -16,
  },
});
