import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useTranslation} from '../../utils/common/localisation';
import {useNavigation} from '@react-navigation/native';

const CreateScreenModel = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [currentIngredients, setCurrentIngredients] = useState([
    {id: '1', name: 'Мука', amount: '100 г'},
    {id: '2', name: 'Молоко', amount: '20 мл'},
  ]);
  const [recipeName, setRecipeName] = useState('');
  const [recipeSteps, setRecipeSteps] = useState('');
  const [recipePic, setRecipePic] = useState(
    require('../../assets/img/default_bg.jpg'),
  );
  const [servings, setServings] = useState('1');

  return {
    recipeName,
    currentIngredients,
    recipeSteps,
    recipePic,
    servings,

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
