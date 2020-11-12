import {createRecipe, getRecipe} from '../../store/actions/recipeActionCreator';
import {setSystemLanguageAction} from '../../store/actions/systemActionCreator';

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
    if (sortType === 'old' && model.currentSortType !== 'old') {
      model.recipeList.reverse();
      model.setCurrentSortType('old');
    }
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
