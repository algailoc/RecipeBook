import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  LogBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AddIngredientDialog} from '../../components/AddIngredientDialog';
import {ServingsDropDown} from '../../components/ServingsDropDown';
import {AlertModal} from '../../components/AlertModal';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

export const EditScreenView = ({model, controller, styles}) => {
  const {
    servings,
    setServings,
    currentIngredients,
    setRecipeSteps,
    setRecipeName,
    recipeName,
    recipeSteps,
    t,
  } = model;
  const {
    removeIngredientTouchable,
    editRecipeButtonHandler,
    editPictureHandler,
    removeRecipeHandler,
  } = controller;

  return (
    <View>
      <ScrollView style={{height: '90%'}}>
        <TextInput
          value={recipeName}
          onChangeText={(text) => setRecipeName(text)}
          placeholder={t('recipe_name')}
          maxLength={50}
          style={styles.recipeName}
        />
        <Text style={styles.section}>{t('ingredients_list')}</Text>
        <FlatList
          data={currentIngredients}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.items}
                onLongPress={() => removeIngredientTouchable(item.id)}>
                <Text style={styles.itemText}>{item.name}</Text>
                <View style={styles.measurementWrapper}>
                  <Text style={styles.itemText}>{item.amount}</Text>
                  <Text style={styles.itemText}>{item.unit}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <Text style={styles.tip}>{t('ingredients_removal_help')}</Text>
        <ServingsDropDown servings={servings} setServings={setServings} />
        <AddIngredientDialog model={model} controller={controller} />
        <Text style={styles.section}>{t('recipe_description')}</Text>
        <TextInput
          placeholder={t('recipe_input')}
          style={styles.stepsInput}
          multiline={true}
          value={recipeSteps}
          onChangeText={(text) => setRecipeSteps(text)}
        />
        <TouchableOpacity
          style={styles.touchableWrapper}
          onPress={editPictureHandler}>
          <Text style={styles.buttonText}>{t('image_button')}</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{height: '10%'}}>
        <Icon.Button
          name="checkcircle"
          size={30}
          style={styles.createRecipeButton}
          backgroundColor="#fff"
          onPress={editRecipeButtonHandler}>
          <Text style={styles.createRecipeButtonText}>{t('add_complete')}</Text>
        </Icon.Button>
      </View>
      <AlertModal
        model={model}
        removeOptional={removeRecipeHandler}
        textProp={
          t('alert_go_back_title') + '? \n' + t('alert_go_back_message')
        }
      />
    </View>
  );
};
