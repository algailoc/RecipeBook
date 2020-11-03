import {call, put} from '@redux-saga/core/effects';
import Services from '../../../../services/Services';
import {
  shareRecipeIngredientsViaSmsBeginAction,
  shareRecipeIngredientsViaSmsErrorAction,
  shareRecipeIngredientsViaSmsFinishedAction,
} from '../../../actions/shareActionCreator';
import ListToTextConverter from '../../../../services/service-utils/list-to-text-converter/ListToTextConverter';

function* ss_shareRecipeIngredientsViaSmsHandler(action) {
  const {id} = action.payload;

  yield put(shareRecipeIngredientsViaSmsBeginAction());

  try {
    const recipesStorageService = Services.get(
      Services.serviceTypes.RECIPES_STORAGE,
    );

    const productsList = yield call(recipesStorageService.getProductsList, {id});
    const categoriesList = yield call(recipesStorageService.getCategories, {
      shoppingListId: id,
    });

    const unitsList = yield call(recipesStorageService.getUnits, {
      shoppingListId: id,
    });

    const categoriesMap = new Map();
    categoriesList.forEach((c) => {
      categoriesMap.set(c.id, c);
    });

    const unitsMap = new Map();
    unitsList.forEach((u) => {
      unitsMap.set(u.id, u);
    });

    const productsListTextForm = yield call(ListToTextConverter.convert, {
      productsList: productsList.products,
      listName: productsList.name,
      categoriesMap,
      unitsMap,
    });

    const shareService = Services.get(Services.serviceTypes.SHARE);

    yield call(shareService.shareViaSms, {text: productsListTextForm});

    yield put(shareRecipeIngredientsViaSmsFinishedAction());
  } catch (e) {
    console.log('ss_shareRecipeIngredientsViaSmsHandler()->ERROR: ' + e);
    yield put(
      shareRecipeIngredientsViaSmsErrorAction({description: e.toString()}),
    );
  }
}

export default ss_shareRecipeIngredientsViaSmsHandler;
