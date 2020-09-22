import {removeRecipe} from '../../store/actions/recipeActionCreator';
import {Alert} from 'react-native';
import {useState} from 'react';

const RecipeScreenController = (model) => {
  const {setServings, ingredients, setIngredients, recipe, t} = model;

  const deleteRecipe = () => {
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
            setTimeout(() => {
              model.dispatch(removeRecipe(model.id)); //TODO remove timeout when figure out how to delete w/o it
            }, 1000);
            // model.dispatch(removeRecipe(model.id));
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
    // setIngredients((recipeList.find((item) => item.id === model.id)).ingredients);
    setServings(value);
    ingredients.map((item) => {
      //changes the global state
      item.amount += value;
    });
    console.log(recipe.ingredients);
  };
  return {deleteRecipe, editButtonHandler, goToEdit, servingsChanged};
};

export default RecipeScreenController;
