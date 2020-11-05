import {StyleSheet} from 'react-native';

export const recipeScreenStyles = StyleSheet.create({
  items: {
    margin: 3,
    marginHorizontal: 6,
    justifyContent: 'space-between',
    borderBottomColor: '#F35227',
    borderBottomWidth: 2,
  },
  itemText: {
    marginHorizontal: 2,
    fontSize: 18,
  },
  measurementWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  optionText: {
    fontSize: 16,
  },
  optionsWrapper: {
    backgroundColor: '#fff',
  },
  popUpWrapper: {
    flex: 1,
    alignSelf: 'flex-end',
    marginTop: '14%',
    marginLeft: '50%',
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    width: '50%',
    textAlign: 'center',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#839E9F',
    marginBottom: 10,
  },
  steps: {
    fontSize: 18,
    fontFamily: 'Merriweather-Regular',
    margin: 10,
    minHeight: 108,
  },
});
