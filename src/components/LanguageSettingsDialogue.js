import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';

export const LanguageSettingsModal = ({controller, model}) => {
  const {SlideInMenu} = renderers;

  return (
    <Menu
      renderer={SlideInMenu}
      opened={model.modalIsOpen}
      onBackdropPress={() => model.setModalIsOpen(false)}>
      <MenuTrigger />
      <MenuOptions optionsContainerStyle={styles.modalView}>
        <Text style={styles.textStyle}>{model.t('language_choice')}</Text>
        <MenuOption
          onSelect={() => controller.setSystemLanguage('en')}
          style={styles.menuOption}>
          <Text style={styles.textStyle}>English</Text>
        </MenuOption>
        <MenuOption
          style={styles.menuOption}
          onSelect={() => controller.setSystemLanguage('ru')}>
          <Text style={styles.textStyle}>Русский</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  menuOption: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
    borderWidth: 3,
    borderColor: 'rgba(190, 196, 200, 0.7)',
    borderRadius: 20,
    backgroundColor: '#E1E6E9',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBEFF2',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 13,
    borderWidth: 5,
    borderBottomWidth: 0,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
  },
});
