import React from 'react';
import {CreateScreenView} from './createScreenView';
import {CreateScreenStyles} from './createScreenStyles';
import CreateScreenModel from './createScreenModel';
import CreateScreenController from './createScreenController';
import {useFocusEffect} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';
import {RecipeLoader} from "../../components/RecipeLoader";

const CreateScreen = () => {
  // useFocusEffect(() => {
  //   model.navigation.setOptions({
  //     headerLeft: () => (
  //       <HeaderBackButton
  //         tintColor="#fff"
  //         onPress={controller.backButtonHandler}
  //       />
  //     ),
  //   });
  // });

  const styles = CreateScreenStyles;
  const model = CreateScreenModel();
  const controller = CreateScreenController(model);

  {
    if (model.recipeName !== undefined) {
      return (
        <CreateScreenView
          controller={controller}
          model={model}
          styles={styles}
        />
      );
    } else {
      return <RecipeLoader />;
    }
  }
};

export default CreateScreen;
