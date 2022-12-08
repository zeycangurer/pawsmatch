import {palette} from '../../theme/palette';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 16,
    paddingLeft: '5%',
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: palette.lightblue
  },

  titleWrapper: {
    flexDirection: 'row',
  },
  titleAndTextWrapper: {
    marginLeft: 16,
    width: '100%',
  },
  titleText: {
    fontWeight: 'bold',
    color: palette.grey,
    fontSize: 16,
    flex: 1,
  },
  titleTime: {
    width: '30%',
    alignItems: 'center',
    color: palette.darkgrey,
  },
  msgText: {
    fontSize: 14,
    color: palette.grey,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
