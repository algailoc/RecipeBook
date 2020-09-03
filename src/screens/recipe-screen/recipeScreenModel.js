import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from '../../utils/common/localisation';

const RecipeScreenModel = () => {
  const route = useRoute();
  const {id} = route.params;
  const dispatch = useDispatch();

  const {t} = useTranslation();

  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState('');

  const [isOpened, setIsOpened] = useState(false);

  const recipeList = useSelector((state) => state.recipe.recipes);

  useEffect(() => {
    if (id !== '') {
      let recipe = recipeList.find((item) => item.id === id);
      setTitle(recipe.title);
      setIngredients(recipe.ingredients);
      setSteps(recipe.steps);
      console.log(recipe.title);
    }
  }, [id, recipeList]);

  return {
    id,
    title,
    ingredients,
    steps,
    t,
    navigation,
    recipeList,
    isOpened,
    setIsOpened,
    dispatch,
  };
};

export default RecipeScreenModel;
