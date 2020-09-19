import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import Services from '../services/Services';
import {AppNavigation} from './AppNavigation';
import {RecipeLoader} from './RecipeLoader';
import {loadRecipesList} from '../store/actions/recipesListActionCreator';

const AppLoader = () => {
  const [ready, setReady] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const initFunc = async () => {
      try {
        await Services.init();
        dispatch(loadRecipesList());
      } catch (e) {
        console.log(e);
      }

      setReady(true);
    };

    initFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (ready) {
    return <AppNavigation />;
  } else {
    return <View />;
  }
};

export default AppLoader;
