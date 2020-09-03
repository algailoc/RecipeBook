import React from 'react';
import {CreateScreenView} from './createScreenView';
import {CreateScreenStyles} from './createScreenStyles';
import CreateScreenModel from './createScreenModel';
import CreateScreenController from './createScreenController';
import {useFocusEffect} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';

const CreateScreen = () => {
  useFocusEffect(() => {
    model.navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          tintColor="#fff"
          onPress={controller.backButtonHandler}
        />
      ),
    });
  });

  const styles = CreateScreenStyles;
  const model = CreateScreenModel();
  const controller = CreateScreenController(model);

  return (
    <CreateScreenView styles={styles} model={model} controller={controller} />
  );
};

export default CreateScreen;
