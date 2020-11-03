import {createStore, combineReducers, applyMiddleware} from 'redux';
import {recipeReducers} from './reducers/recipeReducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root';
import {recipesListReducer} from './reducers/recipesListReducer';
import {systemReducer} from './reducers/systemReducer';
import {shareReducer} from './reducers/shareReducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  recipesList: recipesListReducer,
  recipe: recipeReducers,
  system: systemReducer,
  share: shareReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
