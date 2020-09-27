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
    // model.navigation.navigate('Recipe', {id, title});
    model.navigation.navigate('Recipe', {title});
    model.dispatch(getRecipe(id));
  };

  const goToSettingsScreen = () => {
    model.setDrawerIsOpen(false);
    model.setModalIsOpen(true);
  };

  const setSystemLanguage = (lang) => {
    model.dispatch(setSystemLanguageAction({languageCode: lang}));
  };

  return {
    goToRecipeScreen,
    goToCreateScreen,
    goToNewRecipe,
    goToSettingsScreen,
    setSystemLanguage,
  };
};

export default HomeScreenController;
