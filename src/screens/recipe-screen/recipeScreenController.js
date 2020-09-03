import {removeRecipe} from '../../store/actions/recipeActionCreator';

const RecipeScreenController = (model) => {
  const editButtonHandler = () => {
    model.setIsOpened(!model.isOpened);
    console.log(model.isOpened);
  };

  const editRecipe = () => {
    model.navigation.goBack();
    setTimeout(() => {
      model.dispatch(removeRecipe(model.id)); //TODO delete timeout when figure out how to delete w/o it
    }, 1000);
  };
  return {editRecipe, editButtonHandler};
};

export default RecipeScreenController;
