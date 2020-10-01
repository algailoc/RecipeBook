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

  const [modalVisible, setModalVisible] = useState(false);

  const [recipeId, setRecipeId] = useState('');
  const [recipeName, setRecipeName] = useState();
  const [recipeSteps, setRecipeSteps] = useState('');
  const [recipePic, setRecipePic] = useState('');
  const [servings, setServings] = useState('1');

  useEffect(() => {
    if (recipe !== undefined) {
      setRecipeId(recipe.id);
      setRecipeName(recipe.title);
      setRecipeSteps(recipe.steps);
      setRecipePic(recipe.imagePath);
      setServings(recipe.servings);
    }
  }, [recipe]);

  return {
    recipe,
    recipeId,
    recipeName,
    currentIngredients,
    recipeSteps,
    recipePic,
    servings,
    loading,
    modalVisible,

    setRecipeName,
    setCurrentIngredients,
    setRecipeSteps,
    setRecipePic,
    setServings,
    setModalVisible,

    navigation,
    dispatch,
    t,
  };
};

export default CreateScreenModel;
