import {createRecipe} from '../../store/actions/recipeActionCreator';

const HomeScreenController = (model) => {
  const createRecipe = () => {
    // model.dispatch(createRecipe()); //RangeError: Maximum call stack size exceeded.
  };

  const goToCreateScreen = () => {
    model.navigation.navigate('New recipe');
  };

  const goToRecipeScreen = (id, title) => {
    model.navigation.navigate('Recipe', {id, title});
  };

  return {goToRecipeScreen, goToCreateScreen, createRecipe};
};

export default HomeScreenController;
