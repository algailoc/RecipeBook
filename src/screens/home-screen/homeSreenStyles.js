import {StyleSheet} from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  imageBkg: {
    width: '100%',
  },
  recipeList: {
    height: '100%',
  },
  recipeImage: {
    height: '100%',
    resizeMode: 'contain',
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
  recipeItem: {
    height: 200,
    marginBottom: 5,
  },
});
