import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';
import {EditScreenView} from './editScreenView';
import EditScreenModel from './editScreenModel';
import EditScreenController from './editScreenController';
import {EditScreenStyles} from './editScreenStyles';
import {BackHandler} from 'react-native';

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

  React.useEffect(() => {
    const backAction = () => {
      controller.backButtonHandler();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const model = EditScreenModel();
  const controller = EditScreenController(model);
  const styles = EditScreenStyles;

  return (
    <EditScreenView model={model} controller={controller} styles={styles} />
  );
};

export default EditScreen;
