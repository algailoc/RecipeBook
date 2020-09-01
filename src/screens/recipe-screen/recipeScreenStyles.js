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
  itemAmount: {},
  steps: {
    fontSize: 18,
    fontFamily: 'Merriweather-Regular',
    margin: 5,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});
