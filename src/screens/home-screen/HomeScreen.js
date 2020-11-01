import React from 'react';
import {Linking, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import HomeScreenView from './homeScreenView';
import HomeScreenModels from './homeSreenModel';
import HomeScreenController from './homeSreenControllers';
import {homeScreenStyles} from './homeSreenStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const HomeScreen = () => {
  useFocusEffect(() => {
    model.navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          name="information-circle-outline"
          size={35}
          style={styles.hamburgerMenu}
          onPress={() => model.setSettingsIsOpen(!model.settingsIsOpen)}
        />
      ),
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

  const PopUpMenu = () => {
    return (
      <Menu
        opened={model.settingsIsOpen}
        onBackdropPress={() => model.setSettingsIsOpen(false)}>
        <MenuTrigger text="" />
        <MenuOptions
          optionsContainerStyle={styles.popUpWrapper}
          style={styles.optionsWrapper}>
          <MenuOption
            onSelect={() =>
              Linking.openURL(
                'https://github.com/algailoc/RecipeBook/blob/master/Privacy%20Policy.md',
              )
            }>
            <Text style={styles.optionText}>{model.t('privacy_policy')}</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  };

  return (
    <HomeScreenView model={model} controller={controller} styles={styles} />
  );
};

export default HomeScreen;
