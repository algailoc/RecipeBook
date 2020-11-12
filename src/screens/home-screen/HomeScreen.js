import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import HomeScreenView from './homeScreenView';
import HomeScreenModels from './homeSreenModel';
import HomeScreenController from './homeSreenControllers';
import {homeScreenStyles} from './homeSreenStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  useFocusEffect(() => {
    model.navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          name="sort"
          size={35}
          style={styles.hamburgerMenu}
          onPress={() => {
            model.setSortingIsOpen(!model.sortingIsOpen);
          }}
        />
      ),
      headerLeft: () => (
        <Icon.Button
          name="settings"
          size={30}
          color="#fff"
          style={styles.hamburgerMenu}
          onPress={() => model.setSettingsIsOpen(!model.settingsIsOpen)}
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
