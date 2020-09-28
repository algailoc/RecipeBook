import {removeRecipe} from '../../store/actions/recipeActionCreator';
import {Alert} from 'react-native';

const RecipeScreenController = (model) => {
  const {setServings, ingredients, t} = model;

  const deleteRecipe = () => {
    model.setIsOpened(false);
    Alert.alert(
      '',
      t('alert_delete') + '?',
      [
        {text: t('alert_cancel'), style: 'negative'},
        {text: ''},
        {
          text: t('alert_confirm'),
          onPress: () => {
            model.navigation.goBack();
            model.dispatch(removeRecipe(model.id));
          },
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const editButtonHandler = () => {
    model.setIsOpened(!model.isOpened);
  };

  const goToEdit = () => {
    model.setIsOpened(false);
    const id = model.id;
    model.navigation.navigate('Edit recipe', {id});
  };

  const servingsChanged = (value) => {
    let prevValue = model.servings;
    setServings(value);
    ingredients.map((item) => {
      let n = (item.amount / prevValue) * value;
      n === 0 ? (item.amount = '') : (item.amount = Math.round(n * 100) / 100);
    });
  };
  return {deleteRecipe, editButtonHandler, goToEdit, servingsChanged};
};

export default RecipeScreenController;
