import React from 'react';
import {Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import HomeScreenView from './homeScreenView';
import HomeScreenModels from './homeSreenModel';
import HomeScreenController from './homeSreenControllers';
import {homeScreenStyles} from './homeSreenStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  useFocusEffect(() => {
    model.navigation.setOptions({
      headerRight: () => <Button title="" color="#C8271D" />,
      headerLeft: () => (
        <Icon.Button
          name="language-sharp"
          size={30}
          color="#fff"
          style={styles.hamburgerMenu}
          onPress={() => model.setModalIsOpen(!model.modalIsOpen)}
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
