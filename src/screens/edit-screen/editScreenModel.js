import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from '../../utils/common/localisation';
import {useNavigation} from '@react-navigation/native';

const EditScreenModel = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipe.recipe);
  const ingredients = useSelector((state) => state.recipe.ingredients);
  const processing = useSelector((state) => state.recipe.processingIngredient);

  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const [recipeId, setRecipeId] = useState(recipe.id);
  const [recipeName, setRecipeName] = useState(recipe.title);
  const [recipeSteps, setRecipeSteps] = useState(recipe.steps);
  const [recipePic, setRecipePic] = useState(recipe.imagePath);
  const [servings, setServings] = useState(recipe.servings);

  const [currentIngredient, setCurrentIngredient] = useState();

  const [itemHeight, setItemHeight] = useState(50);

  return {
    recipeId,
    recipeName,
    currentIngredient,
    recipeSteps,
    recipePic,
    servings,
    ingredients,
    modalVisible,
    editModalVisible,
    itemHeight,

    setRecipeName,
    setCurrentIngredient,
    setRecipeSteps,
    setRecipePic,
    setServings,
    setModalVisible,
    setEditModalVisible,
    setItemHeight,

      processing,
    recipe,
    navigation,
    dispatch,
    t,
  };
};

export default EditScreenModel;
