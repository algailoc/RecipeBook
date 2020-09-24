import {StyleSheet} from 'react-native';

export const homeScreenStyles = StyleSheet.create({
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
  recipeImage: {
    height: '100%',
    resizeMode: 'contain',
  },
  recipeItem: {
    height: 150,
    marginBottom: 5,
  },
  recipeList: {
    height: '100%',
  },
  recipeTitle: {
    textShadowColor: 'black',
    fontSize: 20,
    textShadowRadius: 2,
    color: 'white',
  },
  titleBackground: {
    backgroundColor: 'rgba(248, 52, 39, 0.8)',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
