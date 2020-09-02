import {useState} from 'react';
import {useTranslation} from '../../utils/common/localisation';

const CreateScreenModel = () => {
  const {t} = useTranslation();

  const [currentIngredients, setCurrentIngredients] = useState([
    {id: '1', name: 'Мука', amount: '100 г'},
    {id: '2', name: 'Молоко', amount: '20 мл'},
  ]);

  const [recipeName, setRecipeName] = useState('');
  const [recipeSteps, setRecipeSteps] = useState('');

  return {
    currentIngredients,
    recipeName,
    recipeSteps,
    setCurrentIngredients,
    setRecipeSteps,
    setRecipeName,
    t,
  };
};

export default CreateScreenModel;
