import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: wp(2)},
    shadowOpacity: wp(0.3),
    shadowRadius: wp(3),
    elevation: wp(2),
    borderRadius: wp(2),
    marginHorizontal: wp(3),
    marginVertical: hp(2),
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(2),
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: hp(2),
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: wp(2),
  },
  icon: {
    marginHorizontal: wp(2),
  },
  cardDescription: {
    color: '#000',
  },
  cardSource: {
    color: '#000',
    fontSize: wp(3),
  },
});

export default styles;
