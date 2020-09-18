import {createRecipe} from '../../store/actions/recipeActionCreator';

const HomeScreenController = (model) => {

  const goToNewRecipe = () => {
    model.navigation.navigate('New recipe');
    model.dispatch(createRecipe());
  };

  const goToCreateScreen = () => {
    model.navigation.navigate('New recipe');
  };

  const goToRecipeScreen = (id, title) => {
    model.navigation.navigate('Recipe', {id, title});
  };

  return {goToRecipeScreen, goToCreateScreen, goToNewRecipe};
};

export default HomeScreenController;
