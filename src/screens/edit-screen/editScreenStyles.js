import {StyleSheet} from 'react-native';

export const EditScreenStyles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    margin: 3,
    justifyContent: 'space-between',
    borderBottomColor: '#F35227',
    borderBottomWidth: 2,
  },
  itemText: {
    fontSize: 18,
  },
  helper: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#747474',
  },
  createRecipeButton: {
    backgroundColor: '#DF5C12',
    height: 45,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15%',
    borderRadius: 10,
    marginVertical: 10,
  },
  createRecipeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  recipeName: {
    textAlign: 'center',
    fontSize: 18,
    borderWidth: 3,
    borderColor: '#E9E2DE',
    margin: 5,
  },
  stepsInput: {
    textAlignVertical: 'top',
    fontSize: 18,
    borderWidth: 3,
    borderColor: '#E9E2DE',
    margin: 5,
    fontFamily: 'Merriweather-Regular',
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  touchableWrapper: {
    backgroundColor: '#73C1A7',
    height: 45,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
