import {StyleSheet} from 'react-native';

export const CreateScreenStyles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  createRecipeButton: {
    backgroundColor: '#499A5E',
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
    borderRadius: 15,
    marginVertical: 5,
  },
  createRecipeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  items: {
    flexDirection: 'row',
    margin: 3,
    marginHorizontal: 6,
    justifyContent: 'space-between',
    borderBottomColor: '#F35227',
    borderBottomWidth: 2,
  },
  itemText: {
    fontSize: 18,
    marginHorizontal: 2,
  },
  measurementWrapper: {
    flexDirection: 'row',
  },
  recipeName: {
    textAlign: 'center',
    fontSize: 18,
    borderWidth: 3,
    borderColor: 'rgba(223, 92, 18, 0.5)',
    margin: 5,
    fontFamily: 'Merriweather-Regular',
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
  servings: {
    justifyContent: 'flex-end',
    height: 40,
    flexDirection: 'row',
  },
  stepsInput: {
    textAlignVertical: 'top',
    fontSize: 18,
    borderWidth: 3,
    borderColor: 'rgba(223, 92, 18, 0.5)',
    margin: 5,
    padding: 10,
    fontFamily: 'Merriweather-Regular',
  },
  tip: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#747474',
  },
  touchableWrapper: {
    backgroundColor: '#DF5C12',
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
    borderRadius: 15,
    marginVertical: 10,
  },
});
