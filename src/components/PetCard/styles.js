import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export default StyleSheet.create({
  container: {
    backgroundColor: palette.lightgrey,
    borderRadius: 20,
    padding: 16,
    margin: 8,
    flexDirection: 'row',
  },
  innerContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageContaier: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  name: {
    color: palette.darkgrey,
    fontWeight: 'bold',
    fontSize: 20,
  },
  type: {
    color: palette.darkgrey,
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: palette.darkgrey,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
