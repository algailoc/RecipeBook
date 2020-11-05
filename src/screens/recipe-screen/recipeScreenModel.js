import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from '../../utils/common/localisation';

const RecipeScreenModel = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const navigation = useNavigation();

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [steps, setSteps] = useState('');
  const [servings, setServings] = useState('1');

  const [isOpened, setIsOpened] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const recipe = useSelector((state) => state.recipe.recipe);
  const loading = useSelector((state) => state.recipe.loading);
  const ingredients = useSelector((state) => state.recipe.ingredients);

  useEffect(() => {
    if (recipe !== undefined) {
      setTitle(recipe.title);
      setSteps(recipe.steps);
      setServings(recipe.servings);
      setId(recipe.id);
    }
  }, [recipe]);

  return {
    id,
    title,
    ingredients,
    recipe,
    steps,
    servings,
    isOpened,
    modalVisible,
    loading,

    setIsOpened,
    setServings,
    setModalVisible,

    t,
    navigation,
    dispatch,
  };
};

export default RecipeScreenModel;
