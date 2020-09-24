import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SideDrawerComponent = ({controller, model}) => {
  const {t} = model;

  return (
    <View style={styles.drawerWrapper}>
      <Icon.Button
        onPress={controller.goToSettingsScreen}
        name="language-sharp"
        color="#fff"
        size={24}
        style={styles.settingsButton}>
        <Text style={styles.menuOptionText}>{t('language')}</Text>
      </Icon.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerWrapper: {
    backgroundColor: '#E0483F',
    height: '100%',
    borderColor: '#A32018',
  },
  menuOptionText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  settingsButton: {
    paddingTop: 13,
    paddingLeft: 6,
    backgroundColor: '#E0483F',
  },
});
