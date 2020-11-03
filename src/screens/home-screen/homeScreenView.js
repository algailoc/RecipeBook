import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Linking,
  Text,
  Image,
} from 'react-native';
import {RecipeItem} from '../../components/RecipeItem';
import Icon from 'react-native-vector-icons/AntDesign';
import {LanguageSettingsModal} from '../../components/LanguageSettingsDialogue';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {DeleteConfirmationComponent} from '../../components/DeleteConfirmationComponent';

const HomeScreenView = ({model, controller, styles}) => {
  const {
    recipeList,
    setDeleteModalVisible,
    currentId,
    setCurrentId,
    currentTitle,
    setCurrentTitle,
  } = model;
  const {goToRecipeScreen} = controller;

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

  const RecipeListComponent = () => {
    if (recipeList[0] !== undefined) {
      return (
        <FlatList
          style={styles.recipeList}
          data={recipeList}
          renderItem={({item}) => (
            <TouchableOpacity
              delayLongPress={250}
              onPress={() => goToRecipeScreen(item.id, item.title)}
              onLongPress={() => {
                setCurrentId(item.id);
                setCurrentTitle(item.title);
                setDeleteModalVisible(true);
              }}>
              <RecipeItem
                style={styles.recipeItem}
                title={item.title}
                image={item.imagePath}
                styles={styles}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    } else {
      return (
        <View style={styles.recipeList}>
          <View style={styles.recipeListTextWrapper}>
            <Text style={styles.recipeListText}>{model.t('empty_list')}</Text>
          </View>
          {/*<Image*/}
            {/*style={styles.arrowImage}*/}
            {/*source={require('../../assets/img/arrow.png')}*/}
          {/*/>*/}
        </View>
      );
    }
  };

  return (
    <View>
      <ImageBackground
        source={require('../../assets/img/background-1.jpg')}
        style={styles.imageBkg}>
        <RecipeListComponent />
      </ImageBackground>
      <View style={styles.newRecipeButton}>
        <Icon.Button
          style={{underlayColor: '#fff'}}
          onPress={controller.goToNewRecipe}
          name="pluscircle"
          color="#C8271D"
          size={70}
          borderRadius={100}
          iconStyle={{marginRight: -10, margin: -10}}
          backgroundColor="#fff"
        />
      </View>
      <LanguageSettingsModal model={model} controller={controller} />
      <DeleteConfirmationComponent
        model={model}
        id={currentId}
        title={currentTitle}
      />
      <PopUpMenu />
    </View>
  );
};

export default HomeScreenView;
