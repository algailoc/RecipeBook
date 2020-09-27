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
        {/*<Text style={styles.textStyle}>App language</Text>*/}
        <MenuOption
          onSelect={() => controller.setSystemLanguage('en')}
          style={{
            ...styles.menuOption,
            borderBottomWidth: 4,
            borderBottomColor: '#AEBCC3',
          }}>
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
    width: 380,
    alignItems: 'center',
    marginTop: 5,
  },
  modalView: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
  },
});
