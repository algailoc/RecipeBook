import {createStore, combineReducers} from 'redux';
import {recipeReducers} from './reducers/recipeReducers';

const reducers = combineReducers({
  recipe: recipeReducers,
});

const store = createStore(reducers);

export default store;
