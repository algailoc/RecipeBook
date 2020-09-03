import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';

const RecipeScreenView = ({model, styles, controller}) => {
  const {ingredients, steps, isOpened, setIsOpened, t} = model;
  const {editRecipe} = controller;

  const {NotAnimatedContextMenu} = renderers;

  const PopUpMenu = () => {
    return (
      <Menu
        opened={isOpened}
        onBackdropPress={() => setIsOpened(false)}
        renderer={NotAnimatedContextMenu}>
        <MenuTrigger style={styles.triggerWrapper} text="" />
        <MenuOptions style={styles.optionsWrapper}>
          <MenuOption onSelect={() => alert('Save')}>
            <Text style={styles.optionText}>{t('options_edit')}</Text>
          </MenuOption>
          <MenuOption onSelect={() => editRecipe()}>
            <Text style={styles.optionText}>{t('options_remove')}</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  };

  return (
    <ScrollView>
      <PopUpMenu />
      <Text style={styles.section}>{t('ingredients_list')}</Text>
      <View>
        {ingredients.map((item) => {
          return (
            <View key={item.id} style={styles.items}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemAmount}>{item.amount}</Text>
            </View>
          );
        })}
      </View>
      <Text style={styles.section}>{t('recipe_description')}</Text>
      <Text style={styles.steps}>{steps}</Text>
    </ScrollView>
  );
};

export default RecipeScreenView;
