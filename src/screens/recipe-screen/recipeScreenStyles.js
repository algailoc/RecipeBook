import {StyleSheet} from 'react-native';

export const recipeScreenStyles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    margin: 3,
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
  },
  optionText: {
    fontSize: 20,
  },
  optionsWrapper: {
    backgroundColor: '#fff',
  },
  popUpWrapper: {
    flex: 1,
    alignSelf: 'flex-end',
    marginTop: '14%',
    marginLeft: '60%',
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  steps: {
    fontSize: 18,
    fontFamily: 'Merriweather-Regular',
    margin: 5,
    minHeight: 108,
  },
  title: {
    fontSize: 26,
  },
});
