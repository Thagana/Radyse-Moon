import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RALEWAY_BLACK, RALEWAY_BOLD} from '../../../common/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    borderRadius: wp(1),
    marginHorizontal: wp(3),
    marginVertical: hp(0.5),
    justifyContent: 'space-between',
    height: hp(26),
    width: wp(75),
  },
  image: {
    width: wp(75),
    height: hp(26),
    borderRadius: wp(2),
  },
  content: {
    bottom: wp(25),
  },
  titleText: {
    fontFamily: RALEWAY_BOLD,
    color: '#fff',
    fontSize: wp(3.5),
    fontWeight: 'bold',
    marginLeft: wp(2),
  },
  pipe: {
    marginHorizontal: wp(1),
    color: '#fff',
  },
  sourceText: {
    fontFamily: RALEWAY_BLACK,
    color: '#007AFF',
  },
  publishedAtText: {
    fontFamily: RALEWAY_BLACK,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(2),
  },
});

export default styles;
