import {addRecipe} from '../../store/actions/recipeActionCreator';
import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const CreateScreenController = (model) => {
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
        id: Date.now().toString(),
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
    }).then(
      (image) => {
        console.log({uri: image.path});
        setRecipePic({uri: image.path});
      },
      (error) => {
        console.log(error);
      },
    );
  };

  const addRecipeButtonHandler = (title, steps, ingredients) => {
    if (model.recipeName !== '') {
      const id = Date.now().toString();
      // if (!recipePic) {
      //   setRecipePic(require('../../assets/img/default_bg.jpg'));
      // }
      dispatch(addRecipe(id, title, steps, ingredients, recipePic));
      navigation.navigate('Home');
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
      (t('alert_go_back_title') + '?'), //need to keep prettier from removing braces
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
    addRecipeButtonHandler,
    backButtonHandler,
    editPictureHandler,
  };
};

export default CreateScreenController;
