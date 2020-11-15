import {
  CHANGE_SORT_DIRECTION,
  LOAD_RECIPES_LIST,
  LOAD_RECIPES_LIST_BEGIN,
  LOAD_RECIPES_LIST_ERROR,
  LOAD_RECIPES_LIST_FINISHED,
} from '../types/recipesListTypes';
import {
  ADD_RECIPE_FINISHED,
  EDIT_RECIPE_FINISHED,
  REMOVE_RECIPE_FINISHED,
} from '../types/recipeTypes';
import {sortByName, sortByNew, sortByOld} from './helpers/sortingTypes';

const initialState = {
  recipes: [],
  sortDirection: 'new',
};

export const recipesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPES_LIST: {
      return state;
    }

    case LOAD_RECIPES_LIST_BEGIN: {
      return state;
    }

    case LOAD_RECIPES_LIST_FINISHED: {
      switch (state.sortDirection) {
        case 'new': {
          return {
            ...state,
            recipes: action.payload.sort(sortByNew),
          };
        }
        case 'old': {
          return {
            ...state,
            recipes: action.payload.sort(sortByOld),
          };
        }
        case 'name': {
          return {
            ...state,
            recipes: action.payload.sort(sortByName),
          };
        }
        default: {
          return {
            ...state,
            recipes: action.payload.sort(sortByNew),
          };
        }
      }
    }

    case LOAD_RECIPES_LIST_ERROR: {
      console.log('Error on getting list of recipes: ', action.payload);
      return state;
    }

    case ADD_RECIPE_FINISHED: {
      switch (state.sortDirection) {
        case 'new': {
          return {
            ...state,
            recipes: [
              {
                id: action.payload.id,
                title: action.payload.title,
                imagePath: action.payload.imagePath,
              },
              ...state.recipes,
            ],
          };
        }
        case 'old': {
          return {
            ...state,
            recipes: [
              ...state.recipes,
              {
                id: action.payload.id,
                title: action.payload.title,
                imagePath: action.payload.imagePath,
              },
            ],
          };
        }
        default: {
          return {
            ...state,
            recipes: [
              {
                id: action.payload.id,
                title: action.payload.title,
                imagePath: action.payload.imagePath,
              },
              ...state.recipes,
            ],
          };
        }
      }
    }
    // return {
    //   ...state,
    //   recipes: [
    //     {
    //       id: action.payload.id,
    //       title: action.payload.title,
    //       imagePath: action.payload.imagePath,
    //     },
    //     ...state.recipes,
    //   ],
    // };

    case REMOVE_RECIPE_FINISHED: {
      return {
        ...state,
        recipes: state.recipes.filter((item) => item.id !== action.payload),
      };
    }

    case EDIT_RECIPE_FINISHED: {
      return {
        ...state,
        recipes: state.recipes.map((item) => {
          if (item.id === action.payload.id) {
            item.title = action.payload.title;
            item.imagePath = action.payload.imagePath;
          }
          return item;
        }),
      };
    }

    case CHANGE_SORT_DIRECTION: {
      return {
        ...state,
        sortDirection: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
