import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useFocusEffect} from '@react-navigation/native';
import HomeScreenView from './homeScreenView';
import HomeScreenModels from './homeSreenModel';
import HomeScreenController from './homeSreenControllers';
import {homeScreenStyles} from './homeSreenStyles';

const HomeScreen = () => {
  useFocusEffect(() => {
    model.navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          onPress={controller.goToNewRecipe}
          name="md-add-circle"
          color="#fff"
          size={30}
          backgroundColor="#C8271D"
        />
      ),
    });
  });

  const model = HomeScreenModels();
  const controller = HomeScreenController(model);
  const styles = homeScreenStyles;

  return (
    <HomeScreenView model={model} controller={controller} styles={styles} />
  );
};

export default HomeScreen;
