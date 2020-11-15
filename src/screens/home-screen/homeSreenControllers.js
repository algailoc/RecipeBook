import {createRecipe, getRecipe} from '../../store/actions/recipeActionCreator';
import {setSystemLanguageAction} from '../../store/actions/systemActionCreator';
import {
  changeSortDirection,
  loadRecipesList,
} from '../../store/actions/recipesListActionCreator';

const HomeScreenController = (model) => {
  const goToNewRecipe = () => {
    model.navigation.navigate('New recipe');
    model.dispatch(createRecipe());
  };

  const goToCreateScreen = () => {
    model.navigation.navigate('New recipe');
  };

  const goToRecipeScreen = (id, title) => {
    model.navigation.navigate('Recipe', {title});
    model.dispatch(getRecipe(id));
  };

  const goToSettingsScreen = () => {
    model.setDrawerIsOpen(false);
    model.setModalIsOpen(true);
  };

  const setSystemLanguage = (lang) => {
    model.setModalIsOpen(false);
    model.dispatch(setSystemLanguageAction({languageCode: lang}));
  };

  const sortRecipes = (sortType) => {
    model.dispatch(changeSortDirection(sortType));
    model.dispatch(loadRecipesList());
  };

  return {
    goToRecipeScreen,
    goToCreateScreen,
    goToNewRecipe,
    goToSettingsScreen,
    setSystemLanguage,
    sortRecipes,
  };
};

export default HomeScreenController;
