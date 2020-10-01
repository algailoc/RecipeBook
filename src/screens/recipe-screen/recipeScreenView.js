import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {ServingsDropDown} from '../../components/ServingsDropDown';
import {AlertModal} from '../../components/AlertModal';

const RecipeScreenView = ({model, styles, controller}) => {
  const {ingredients, steps, servings, isOpened, setIsOpened, t} = model;
  const {
    deleteRecipe,
    goToEdit,
    servingsChanged,
    removeRecipeHandler,
  } = controller;

  const PopUpMenu = () => {
    return (
      <Menu opened={isOpened} onBackdropPress={() => setIsOpened(false)}>
        <MenuTrigger text="" />
        <MenuOptions
          optionsContainerStyle={styles.popUpWrapper}
          style={styles.optionsWrapper}>
          <MenuOption onSelect={() => goToEdit()}>
            <Text style={styles.optionText}>{t('options_edit')}</Text>
          </MenuOption>
          <MenuOption onSelect={() => deleteRecipe()}>
            <Text style={styles.optionText}>{t('options_remove')}</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  };

  return (
    <View>
      <PopUpMenu />
      <ScrollView>
        <Text style={styles.section}>{t('ingredients_list')}</Text>
        <View>
          {ingredients.map((item) => {
            return (
              <View key={item.id} style={styles.items}>
                <Text style={styles.itemText}>{item.name}</Text>
                <View style={styles.measurementWrapper}>
                  <Text style={styles.itemText}>{item.amount}</Text>
                  <Text style={styles.itemText}>{item.unit}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <ServingsDropDown servings={servings} setServings={servingsChanged} />
        <Text style={styles.section}>{t('recipe_description')}</Text>
        <Text style={styles.steps}>{steps}</Text>
      </ScrollView>
      <AlertModal
        model={model}
        removeOptional={removeRecipeHandler}
        textProp={t('alert_delete') + '?'}
      />
    </View>
  );
};

export default RecipeScreenView;
