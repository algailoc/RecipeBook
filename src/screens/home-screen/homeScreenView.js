import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Linking,
  Text,
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
    settingsIsOpen,
    setSettingsIsOpen,
    modalIsOpen,
    setModalIsOpen,
    sortingIsOpen,
    setSortingIsOpen,
  } = model;
  const {goToRecipeScreen, goToNewRecipe, sortRecipes} = controller;

  const ListEmptyComponent = () => {
    return (
      <View style={styles.recipeListTextWrapper}>
        <Text style={styles.recipeListText}>{model.t('empty_list')}</Text>
      </View>
    );
  };

  const PopUpMenu = () => {
    return (
      <Menu
        opened={settingsIsOpen}
        onBackdropPress={() => setSettingsIsOpen(false)}>
        <MenuTrigger text="" />
        <MenuOptions
          optionsContainerStyle={styles.popUpWrapper}
          style={styles.optionsWrapper}>
          <MenuOption
            onSelect={() => {
              setModalIsOpen(!modalIsOpen);
              setSettingsIsOpen(false);
            }}>
            <Text style={styles.optionText}>{model.t('language')}</Text>
          </MenuOption>
          <MenuOption
            style={styles.optionBorder}
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

  const SortingPopupMenu = () => {
    return (
      <Menu
        opened={sortingIsOpen}
        onBackdropPress={() => setSortingIsOpen(false)}>
        <MenuTrigger text="" />
        <MenuOptions
          optionsContainerStyle={styles.sortingPopupWrapper}
          style={styles.optionsWrapper}>
          <MenuOption
            onSelect={() => {
              setSortingIsOpen(false);
              sortRecipes('new');
            }}>
            <Text style={styles.optionText}>{model.t('sort_by_new')}</Text>
          </MenuOption>
          <MenuOption
            style={styles.optionBorder}
            onSelect={() => {
              setSortingIsOpen(false);
              sortRecipes('old');
            }}>
            <Text style={styles.optionText}>{model.t('sort_by_old')}</Text>
          </MenuOption>
          <MenuOption
            style={styles.optionBorder}
            onSelect={() => {
              setSortingIsOpen(false);
              sortRecipes('name');
            }}>
            <Text style={styles.optionText}>{model.t('sort_by_name')}</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  };

  return (
    <View>
      <ImageBackground
        source={require('../../assets/img/background-1.jpg')}
        style={styles.imageBkg}>
        <FlatList
          style={styles.recipeList}
          ListEmptyComponent={ListEmptyComponent}
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
          keyExtractor={(item) => item.id.toString()}
        />
      </ImageBackground>
      <View style={styles.newRecipeButton}>
        <Icon.Button
          style={{underlayColor: '#fff'}}
          onPress={goToNewRecipe}
          name="pluscircle"
          color="#C8271D"
          size={70}
          borderRadius={100}
          iconStyle={{marginRight: -10, margin: -10}}
          backgroundColor="#fff"
        />
      </View>
      <PopUpMenu />
      <SortingPopupMenu />
      <LanguageSettingsModal model={model} controller={controller} />
      <DeleteConfirmationComponent
        model={model}
        id={currentId}
        title={currentTitle}
      />
    </View>
  );
};

export default HomeScreenView;
