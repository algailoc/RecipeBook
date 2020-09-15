import {
  ADD_RECIPE,
  ADD_RECIPE_BEGIN,
  ADD_RECIPE_ERROR,
  ADD_RECIPE_FINISHED,
  CREATE_RECIPE,
  EDIT_RECIPE,
  EDIT_RECIPE_BEGIN,
  EDIT_RECIPE_ERROR,
  EDIT_RECIPE_FINISHED,
  REMOVE_RECIPE,
  REMOVE_RECIPE_BEGIN,
  REMOVE_RECIPE_ERROR,
  REMOVE_RECIPE_FINISHED,
} from '../types/recipeTypes';

// const initialState = {
//   recipes: [
//     {
//       id: '1',
//       title: 'Блины',
//       img: require('../../assets/img/blini.jpg'),
//       steps:
//         '1. Смешайте яйца, соль, сахар и размешайте миксером. Введите муку и влейте молоко. Взбейте блинное тесто, чтобы добиться однородной консистенции.\n' +
//         '2. Следом отправьте в тесто растительное масло, чтобы блины в момент жарки легко переворачивались и не пригорали.\n' +
//         '3. Разогрейте сковородку и смажьте маслом. Налейте в центр сковородки небольшую порцию теста. Сразу же вращайте сковородку по кругу, чтобы тесто равномерно распределилось по всей поверхности.\n' +
//         '4. Жарим блины на среднем огне с обеих сторон до зарумянивания. Блины очень тонкие, поэтому переворачивайте их аккуратно с помощью лопатки. После того, как блин будет готов, снимите со сковородки и смажьте сливочным маслом, чтобы края не были сухими, а блины получились нежными.',
//       ingredients: [
//         {id: '1', name: 'Молоко', amount: '500 мл'},
//         {id: '2', name: 'Яйца', amount: '3 шт'},
//         {id: '3', name: 'Масло растительное', amount: ''},
//         {id: '4', name: 'Мука ', amount: '250 г'},
//         {id: '5', name: 'Сахар ', amount: '1 ст. ложка'},
//         {id: '6', name: 'Соль ', amount: ''},
//         {id: '7', name: 'Масло сливочное', amount: '1 ст. ложка'},
//       ],
//       servings: '1',
//     },
//     {
//       id: '2',
//       title: 'Лазанья',
//       img: require('../../assets/img/lasanja.jpg'),
//       steps: 'Steps here',
//       ingredients: [
//         {id: '1', name: 'Name of ingredient', amount: 'Amount of ingredient'},
//       ],
//       servings: '2',
//     },
//     {
//       id: '3',
//       title: 'Паста с песто и сыром',
//       img: require('../../assets/img/default_bg.jpg'),
//       steps: 'Steps here',
//       ingredients: [
//         {id: '1', name: 'Name of ingredient', amount: 'Amount of ingredient'},
//       ],
//       servings: '3',
//     },
//   ],
// };

const initialState = [];

export const recipeReducers = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RECIPE: {
      return state;
    }

    case ADD_RECIPE: {
      return {
        ...state,
        recipes: [
          ...state.recipes,
          {
            id: action.payload.id,
            title: action.payload.title,
            steps: action.payload.steps,
            ingredients: action.payload.ingredients,
            img: action.payload.img,
            servings: action.payload.servings,
          },
        ],
      };
    }

    case ADD_RECIPE_BEGIN: {
      return state;
    }

    case ADD_RECIPE_FINISHED: {
      return {
        ...state,
        recipes: [
          ...state.recipes,
          {
            id: action.payload.id,
            title: action.payload.title,
          },
        ],
      };
    }

    case ADD_RECIPE_ERROR: {
      console.log('Error on adding recipe');
      return state;
    }

    case REMOVE_RECIPE: {
      return {
        ...state,
        recipes: state.recipes.filter((item) => item.id !== action.payload),
      };
    }

    case REMOVE_RECIPE_BEGIN: {
      return state;
    }

    case REMOVE_RECIPE_FINISHED: {
      return state;
    }

    case REMOVE_RECIPE_ERROR: {
      console.log('Error on removing recipe');
      return state;
    }

    case EDIT_RECIPE: {
      return {
        ...state,
        recipes: state.recipes.map((item) => {
          if (item.id === action.payload.id) {
            item.title = action.payload.title;
            item.steps = action.payload.steps;
            item.ingredients = action.payload.ingredients;
            item.img = action.payload.img;
            item.servings = action.payload.servings;
          }
          return item;
        }),
      };
    }

    case EDIT_RECIPE_BEGIN: {
      return state;
    }

    case EDIT_RECIPE_FINISHED: {
      return state;
    }

    case EDIT_RECIPE_ERROR: {
      console.log('Error on editing recipe');
      return state;
    }

    default: {
      return state;
    }
  }
};
