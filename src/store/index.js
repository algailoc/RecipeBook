import {createStore, combineReducers, applyMiddleware} from 'redux';
import {recipeReducers} from './reducers/recipeReducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root';
import {recipesListReducer} from './reducers/recipesListReducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  recipesList: recipesListReducer,
  recipe: recipeReducers,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
