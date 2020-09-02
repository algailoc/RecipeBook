import React from 'react';
import RecipeScreenView from './recipeScreenView';
import RecipeScreenModel from './recipeScreenModel';
import {recipeScreenStyles} from './recipeScreenStyles';
import {RecipeLoader} from '../../components/recipeLoader';
import Icon from 'react-native-vector-icons/Feather';
import {useFocusEffect} from '@react-navigation/native';

const RecipeScreen = () => {
  useFocusEffect(() => {
    model.navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          onPress={() => model.navigation.navigate('Home')}
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

  if (model.title !== '') {
    return <RecipeScreenView model={model} styles={styles} />;
  } else {
    return <RecipeLoader styles={styles} />;
  }
};

export default RecipeScreen;
