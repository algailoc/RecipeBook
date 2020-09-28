import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from '../../utils/common/localisation';
import {useNavigation} from '@react-navigation/native';

const CreateScreenModel = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [currentIngredients, setCurrentIngredients] = useState([
    // {id: '1', name: 'Мука', amount: 100, unit: 'г'},
    // {id: '2', name: 'Молоко', amount: 20, unit: 'мл'},
  ]);

  const recipe = useSelector((state) => state.recipe.recipe);
  const loading = useSelector((state) => state.recipe.loading);

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
    recipeId,
    recipeName,
    currentIngredients,
    recipeSteps,
    recipePic,
    servings,
    loading,

    setRecipeName,
    setCurrentIngredients,
    setRecipeSteps,
    setRecipePic,
    setServings,

    navigation,
    dispatch,
    t,
  };
};

export default CreateScreenModel;
