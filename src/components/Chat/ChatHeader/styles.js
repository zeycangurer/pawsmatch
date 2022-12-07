import {StyleSheet} from 'react-native';
import {palette} from '../../../theme/palette';

export default StyleSheet.create({
  container: {
    backgroundColor: palette.blue,
    width: '100%',
  },
  topWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
  },
  titleText: {
    color: palette.lightgrey,
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 8,
  },
  titleWrapper: {
    flex: 1,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    right: 16,
  },
  videoIcon: {
    left: -48,
  },
  callIcon: {
    left: -24,
  },
  backIcon: {
    marginRight: 4,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: palette.purple,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
