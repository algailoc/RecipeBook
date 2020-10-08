import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Services from '../services/Services';
import {AppNavigation} from './AppNavigation';
import {RecipeLoader} from './RecipeLoader';
import {loadRecipesList} from '../store/actions/recipesListActionCreator';
import {AppLoading} from './AppLoading';

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

      setTimeout(() => {
        setReady(true);
      }, 1000);
    };

    initFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (ready) {
    return <AppNavigation />;
  } else {
    return <AppLoading />;
  }
};

export default AppLoader;
