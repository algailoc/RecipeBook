import React, {useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Button,
  Image,
} from 'react-native';
import {RecipeItem} from '../../components/recipeItem';
import ImagePicker from 'react-native-image-crop-picker';

const HomeScreenView = ({model, controller, styles}) => {
  const {recipeList} = model;
  const {goToRecipeScreen} = controller;

  const [img, setImg] = useState();

  const presser = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 200,
      cropping: true,
    }).then((image) => {
      setImg(image);
    });
  };

  return (
    <View>
      <ImageBackground
        source={require('../../assets/img/background-1.jpg')}
        style={styles.imageBkg}>
        {/*<Button*/}
          {/*title="Image"*/}
          {/*onPress={() => {*/}
            {/*presser();*/}
          {/*}}*/}
        {/*/>*/}
        <FlatList
          style={styles.recipeList}
          data={recipeList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => goToRecipeScreen(item.id, item.title)}>
              <RecipeItem
                style={styles.recipeItem}
                title={item.title}
                image={item.img}
                styles={styles}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreenView;
