import {StyleSheet} from 'react-native';
import { palette } from '../../../theme/palette';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 4,
    position: 'absolute',
    bottom: 3,
  },
  inputBox: {
    backgroundColor: palette.lightgrey,
    width: '85%',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 35,
    color:palette.grey,
  },
  iconWrapper: {
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2%',
    backgroundColor: palette.purple,
    borderRadius: 30,
  },
  input: {
    width: '85%',
    color: palette.grey,
  },
  smileIcon: {
    marginRight: 18,
    left: 8,
    color: palette.grey,
  },
});
