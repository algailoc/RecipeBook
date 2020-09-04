import {removeRecipe} from '../../store/actions/recipeActionCreator';
import {Alert} from 'react-native';

const RecipeScreenController = (model) => {
  const {t} = model;

  const editButtonHandler = () => {
    model.setIsOpened(!model.isOpened);
    console.log(model.isOpened);
  };

  const deleteRecipe = () => {
    Alert.alert(
      '',
      (t('alert_delete') + '?'),
      [
        {text: t('alert_cancel'), style: 'negative'},
        {text: ''},
        {
          text: t('alert_confirm'),
          onPress: () => {
            model.navigation.goBack();
            setTimeout(() => {
              model.dispatch(removeRecipe(model.id)); //TODO remove timeout when figure out how to delete w/o it
            }, 1000);
          },
        },
      ],
      {
        cancelable: true,
      },
    );

    // model.navigation.goBack();
    // setTimeout(() => {
    //   model.dispatch(removeRecipe(model.id)); //TODO remove timeout when figure out how to delete w/o it
    // }, 1000);
  };

  const goToEdit = () => {
    model.setIsOpened(false);
    const id = model.id;
    model.navigation.navigate('Edit recipe', {id});
  };
  return {deleteRecipe, editButtonHandler, goToEdit};
};

export default RecipeScreenController;
