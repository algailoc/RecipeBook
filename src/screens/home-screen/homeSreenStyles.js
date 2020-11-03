import {StyleSheet} from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  arrowImage: {
    width: 200,
    height: 200,
    marginLeft: '25%',
  },
  hamburgerMenu: {
    backgroundColor: '#C8271D',
  },
  imageBkg: {
    width: '100%',
  },
  newRecipeButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  optionsWrapper: {
    backgroundColor: '#fff',
  },
  popUpWrapper: {
    alignSelf: 'center',
    marginTop: '14%',
    marginLeft: '50%',
  },
  recipeImage: {
    height: '100%',
    resizeMode: 'contain',
  },
  recipeItem: {
    height: 150,
    marginBottom: 4,
  },
  recipeList: {
    height: '100%',
  },
  recipeListText: {
    color: '#7A0B0B',
    fontSize: 30,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Neucha-Regular',
  },
  recipeListTextWrapper: {
    marginTop: '50%',
    // marginLeft: '5%',
    // justifyContent: 'flex-end',
    alignSelf: 'center',
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#7A0B0B',
    width: '70%',
    height: 140,
  },
  recipeTitle: {
    textShadowColor: 'black',
    fontSize: 20,
    textShadowRadius: 5,
    color: 'white',
    textAlign: 'center',
  },
  titleBackground: {
    backgroundColor: 'rgba(248, 52, 39, 0.8)',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
