import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from '../../utils/common/localisation';
import {useNavigation} from '@react-navigation/native';

const CreateScreenModel = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [currentIngredients, setCurrentIngredients] = useState([]);

  const recipe = useSelector((state) => state.recipe.recipe);
  const loading = useSelector((state) => state.recipe.loading);
  const processing = useSelector((state) => state.recipe.processingIngredient);

  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const [recipeId, setRecipeId] = useState('');
  const [recipeName, setRecipeName] = useState();
  const [recipeSteps, setRecipeSteps] = useState('');
  const [recipePic, setRecipePic] = useState('');
  const [servings, setServings] = useState('1');

  const [currentIngredient, setCurrentIngredient] = useState();

  useEffect(() => {
    if (recipe !== undefined) {
      setRecipeId(recipe.id);
      setRecipeName(recipe.title);
      setRecipeSteps(recipe.steps);
      setRecipePic(recipe.imagePath);
      setServings(recipe.servings);
      setCurrentIngredients(recipe.ingredients);
    }
  }, [recipe.id]);

  useEffect(() => {
    if (recipe !== undefined) {
      setCurrentIngredients(recipe.ingredients);
    }
  }, [recipe]);

  return {
    recipe,
    recipeId,
    recipeName,
    currentIngredients,
    currentIngredient,
    recipeSteps,
    recipePic,
    servings,
    loading,
    processing,
    modalVisible,
    editModalVisible,

    setRecipeName,
    setCurrentIngredients,
    setCurrentIngredient,
    setRecipeSteps,
    setRecipePic,
    setServings,
    setModalVisible,
    setEditModalVisible,

    navigation,
    dispatch,
    t,
  };
};

export default CreateScreenModel;
