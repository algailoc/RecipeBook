import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';
import {EditScreenView} from './editScreenView';
import EditScreenModel from './editScreenModel';
import EditScreenController from './editScreenController';
import {EditScreenStyles} from './editScreenStyles';

const EditScreen = () => {
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

  const model = EditScreenModel();
  const controller = EditScreenController(model);
  const styles = EditScreenStyles;

  return (
    <EditScreenView model={model} controller={controller} styles={styles} />
  );
};

export default EditScreen;
