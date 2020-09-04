import {editRecipe} from '../../store/actions/recipeActionCreator';
import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const EditScreenController = (model) => {
  const {
    currentIngredients,
    setCurrentIngredients,
    dispatch,
    navigation,
    t,
    recipePic,
    setRecipePic,
  } = model;

  const addIngredientButton = (name, amount) => {
    setCurrentIngredients((prevState) => [
      ...prevState,
      {
        id: (prevState.length + 1).toString(),
        name,
        amount,
      },
    ]);
  };

  const editPictureHandler = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 200,
      cropping: true,
    }).then((image) => {
      console.log({uri: image.path});
      setRecipePic({uri: image.path});
    });
  };

  const editRecipeButtonHandler = (title, steps, ingredients) => {
    if (model.recipeName !== '') {
      navigation.navigate('Home');
      setTimeout(() => {
        dispatch(editRecipe(model.id, title, steps, ingredients, recipePic)); //TODO remove timeout
      }, 1000);
      // dispatch(editRecipe(model.id, title, steps, ingredients));
    } else {
      Alert.alert('', t('alert_name_empty'), [{text: ''}, {text: ''}], {
        cancelable: true,
      });
    }
  };

  const removeIngredientTouchable = (id) => {
    setCurrentIngredients(currentIngredients.filter((item) => id !== item.id));
  };

  const backButtonHandler = () => {
    Alert.alert(
      (t('alert_go_back_title') + '?'),
      t('alert_go_back_message'),
      [
        {text: t('alert_cancel'), style: 'negative'},
        {text: ''},
        {text: t('alert_confirm'), onPress: () => navigation.goBack()},
      ],
      {
        cancelable: true,
      },
    );
  };

  return {
    addIngredientButton,
    removeIngredientTouchable,
    editRecipeButtonHandler,
    backButtonHandler,
    editPictureHandler,
  };
};

export default EditScreenController;
