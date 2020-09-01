import React from 'react';
import RecipeScreenView from './recipeScreenView';
import RecipeScreenModel from './recipeScreenModel';
import {recipeScreenStyles} from './recipeScreenStyles';
import {RecipeLoader} from '../../components/recipeLoader';

const RecipeScreen = () => {
  const model = RecipeScreenModel();
  const styles = recipeScreenStyles;

  if (model.title !== '') {
    return <RecipeScreenView model={model} styles={styles} />;
  } else {
    return <RecipeLoader styles={styles} />;
  }
};

export default RecipeScreen;
