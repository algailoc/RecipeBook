import {StyleSheet} from 'react-native';

export const recipeScreenStyles = StyleSheet.create({
  title: {
    fontSize: 26,
  },
  items: {
    flexDirection: 'row',
    margin: 3,
    justifyContent: 'space-between',
    borderBottomColor: '#F35227',
    borderBottomWidth: 2,
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
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  popUpWrapper: {
    flex: 1,
    alignSelf: 'flex-end',
    marginTop: '14%',
    marginLeft: '60%',
  },
  optionsWrapper: {
    backgroundColor: '#fff',
  },
  optionText: {
    fontSize: 20,
  },
  itemText: {
    paddingHorizontal: 5,
    fontSize: 18,
  },
});
