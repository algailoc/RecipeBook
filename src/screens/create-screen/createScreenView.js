import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  LogBox,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {ServingsDropDown} from '../../components/ServingsDropDown';
import {AlertModal} from '../../components/AlertModal';
import {EditIngredientModal} from '../../components/EditIngredientModal';
import {AddIngredientModal} from '../../components/AddIngredientModal';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

export const CreateScreenView = ({styles, model, controller}) => {
  const {
    ingredients,
    servings,
    setRecipeSteps,
    setRecipeName,
    setServings,
    recipeName,
    recipeSteps,
    itemHeight,
    setItemHeight,
    processing,
    t,
  } = model;
  const {
    addRecipeButtonHandler,
    editIngredientTouchable,
    editPictureHandler,
    removeRecipeHandler,
  } = controller;

  const itemsLoaded = () => {
    return (
      <FlatList
        data={ingredients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onLayout={(event) => {
                let {height} = event.nativeEvent.layout;
                setItemHeight(height);
              }}
              style={styles.items}
              onPress={() => editIngredientTouchable(item.id)}>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={styles.measurementWrapper}>
                <Text style={styles.itemText}>{item.amount}</Text>
                <Text style={styles.itemText}>{item.unit}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const itemsLoading = () => {
    return (
      <View
        style={{
          height: itemHeight * ingredients.length,
          justifyContent: 'center',
        }}>
        <ActivityIndicator color="#F35227" size="large" />
      </View>
    );
  };

  const IngredientsView = processing ? itemsLoading : itemsLoaded;

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
        <IngredientsView />
        <Text style={styles.tip}>{t('ingredients_removal_help')}</Text>
        <ServingsDropDown servings={servings} setServings={setServings} />
        <AddIngredientModal model={model} controller={controller} />
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
          backgroundColor="rgba(255, 255, 255, 0)"
          underlayColor="rgba(255, 255, 255, 0)"
          onPress={addRecipeButtonHandler}>
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
      <EditIngredientModal model={model} controller={controller} />
    </View>
  );
};
