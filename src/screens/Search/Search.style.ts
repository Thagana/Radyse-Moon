import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  search: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 50,
    marginTop: 3,
    marginHorizontal: 5,
    color: '#fff',
    padding: 5,
  },
  textInput: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 50,
    marginTop: 3,
    color: '#fff',
  },
  safeAreaView: {
    flex: 1,
    marginTop: 27,
  },
  searchBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
