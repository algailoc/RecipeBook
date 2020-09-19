import React from 'react';
import RecipeScreenView from './recipeScreenView';
import RecipeScreenModel from './recipeScreenModel';
import {recipeScreenStyles} from './recipeScreenStyles';
import {RecipeLoader} from '../../components/RecipeLoader';
import Icon from 'react-native-vector-icons/Feather';
import {useFocusEffect} from '@react-navigation/native';
import RecipeScreenController from './recipeScreenController';

const RecipeScreen = () => {
  useFocusEffect(() => {
    model.navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          onPress={() => controller.editButtonHandler()}
          name="edit"
          color="#fff"
          size={25}
          backgroundColor="#C8271D"
        />
      ),
    });
  });

  const model = RecipeScreenModel();
  const styles = recipeScreenStyles;
  const controller = RecipeScreenController(model);

  if (model.title !== undefined) {
    return (
      <RecipeScreenView controller={controller} model={model} styles={styles} />
    );
  } else {
    return <RecipeLoader />;
  }
};

export default RecipeScreen;
