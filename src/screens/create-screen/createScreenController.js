import {
  addIngredient,
  addRecipe,
} from '../../store/actions/recipeActionCreator';
import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const CreateScreenController = (model) => {
  const {
    recipeId,
    currentIngredients,
    recipePic,
    recipeName,
    recipeSteps,
    servings,
    setCurrentIngredients,
    setRecipePic,
    dispatch,
    navigation,
    t,
  } = model;

  const addIngredientButton = (name, amount, unit) => {
    setCurrentIngredients((prevState) => [
      ...prevState,
      {
        id: Date.now().toString(),
        name,
        amount,
        unit,
      },
    ]);
    dispatch(addIngredient(recipeId, name, amount, unit));
  };

  const addRecipeButtonHandler = () => {
    if (model.recipeName !== '') {
      navigation.navigate('Home');
      dispatch(
        addRecipe(
          recipeId,
          recipeName,
          recipeSteps,
          currentIngredients,
          recipePic,
          servings,
        ),
      );
    } else {
      Alert.alert('', t('alert_name_empty'), [{text: ''}, {text: ''}], {
        cancelable: true,
      });
    }
  };

  const backButtonHandler = () => {
    Alert.alert(
      t('alert_go_back_title') + '?',
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

  const editPictureHandler = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 200,
      cropping: true,
    }).then(
      (image) => {
        setRecipePic(image.path);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  const removeIngredientTouchable = (id) => {
    setCurrentIngredients(currentIngredients.filter((item) => id !== item.id));
  };

  return {
    addIngredientButton,
    addRecipeButtonHandler,
    backButtonHandler,
    editPictureHandler,
    removeIngredientTouchable,
  };
};

export default CreateScreenController;
