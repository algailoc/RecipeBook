import {
  RECIPE_ID,
  RECIPE_IMAGE_PATH,
  RECIPE_SERVINGS,
  RECIPE_STEPS,
  RECIPE_TITLE,
  RECIPES_TABLE,
} from './tables/recipesTable';
import {
  INGREDIENTS_AMOUNT,
  INGREDIENTS_ID,
  INGREDIENTS_NAME,
  INGREDIENTS_RECIPE_ID,
  INGREDIENTS_TABLE,
  INGREDIENTS_UNIT,
} from './tables/ingredientsTable';
import {SqlStatementExecutor} from '../../utils/common/service-utils/SqlStatementExecutor';

const DB_NAME = 'recipes_storage.db';

const SQlite = require('react-native-sqlite-storage');

export class RecipesStorageService {
  static #db;

  static async init() {
    this.#db = SQlite.openDatabase({name: DB_NAME});

    const recipesCreateTable =
      'CREATE TABLE IF NOT EXISTS ' +
      RECIPES_TABLE +
      ' ' +
      '(' +
      RECIPE_ID +
      ' INTEGER PRIMARY KEY NOT NULL, ' +
      RECIPE_TITLE +
      ' TEXT NOT NULL, ' +
      RECIPE_IMAGE_PATH +
      ' BLOB, ' +
      RECIPE_STEPS +
      ' TEXT, ' +
      RECIPE_SERVINGS +
      ' TEXT NOT NULL)';

    const ingredientsCreateTable =
      'CREATE TABLE IF NOT EXISTS ' +
      INGREDIENTS_TABLE +
      ' ' +
      '(' +
      INGREDIENTS_ID +
      ' INTEGER PRIMARY KEY NOT NULL, ' +
      INGREDIENTS_RECIPE_ID +
      ' INTEGER, ' +
      INGREDIENTS_NAME +
      ' TEXT, ' +
      INGREDIENTS_AMOUNT +
      ' REAL, ' +
      INGREDIENTS_UNIT +
      ' TEXT)';

    await SqlStatementExecutor.execute({
      db: this.#db,
      statement: recipesCreateTable,
    });
    await SqlStatementExecutor.execute({
      db: this.#db,
      statement: ingredientsCreateTable,
    });
  }

  static async getRecipesList() {
    const getRecipesList = 'SELECT * FROM ' + RECIPES_TABLE;

    try {
      const result = await SqlStatementExecutor.execute({
        db: RecipesStorageService.#db,
        statement: getRecipesList,
      });
      // console.log(result.rows.length);

      const recipes = [];
      for (let i = 0; i < result.rows.length; ++i) {
        recipes.push(result.rows.item(i));
      }

      return recipes;
    } catch (e) {
      console.log('Error on getting recipes list from storage', e);
    }

    return [];
  }

  static async getRecipe(id) {
    const getRecipe =
      'SELECT * FROM ' + RECIPES_TABLE + ' WHERE ' + RECIPE_ID + ' = ?';

    const recipeResult = await SqlStatementExecutor.execute({
      db: RecipesStorageService.#db,
      statement: getRecipe,
      params: [id],
    });

    let recipe = recipeResult.rows.item(0);

    const getRecipeIngredients =
      'SELECT * FROM ' +
      INGREDIENTS_TABLE +
      ' WHERE ' +
      INGREDIENTS_RECIPE_ID +
      ' = ?';

    const ingredientsResult = await SqlStatementExecutor.execute({
      db: RecipesStorageService.#db,
      statement: getRecipeIngredients,
      params: [id],
    });

    const ingredients = [];
    for (let i = 0; i < ingredientsResult.rows.length; ++i) {
      ingredients.push(ingredientsResult.rows.item(i));
    }

    recipe = {...recipe, ingredients};

    return recipe;
  }

  static async createRecipe() {
    const createRecipe =
      'INSERT INTO ' +
      RECIPES_TABLE +
      ' (' +
      RECIPE_TITLE +
      ', ' +
      RECIPE_IMAGE_PATH +
      ', ' +
      RECIPE_STEPS +
      ', ' +
      RECIPE_SERVINGS +
      ') VALUES (?, ?, ?, ?)';

    const params = ['', '', '', '1'];

    const result = await SqlStatementExecutor.execute({
      db: RecipesStorageService.#db,
      statement: createRecipe,
      params,
    });

    const newRecipeId = result.insertId;

    return await RecipesStorageService.getRecipe(newRecipeId);
  }

  static async addIngredient({recipeId, name, amount, unit}) {
    const addIngredient =
      'INSERT INTO ' +
      INGREDIENTS_TABLE +
      ' (' +
      INGREDIENTS_RECIPE_ID +
      ', ' +
      INGREDIENTS_NAME +
      ', ' +
      INGREDIENTS_AMOUNT +
      ', ' +
      INGREDIENTS_UNIT +
      ') VALUES (?, ?, ?, ?)';

    const params = [recipeId, name, amount, unit];

    const result = await SqlStatementExecutor.execute({
      db: RecipesStorageService.#db,
      statement: addIngredient,
      params,
    });

    return await this.getRecipeIngredients({recipeId});
  }

  static async getRecipeIngredients({recipeId}) {
    const getRecipeIngredients =
      'SELECT * FROM ' +
      INGREDIENTS_TABLE +
      ' WHERE ' +
      INGREDIENTS_RECIPE_ID +
      ' = ?';

    const result = await SqlStatementExecutor.execute({
      db: RecipesStorageService.#db,
      statement: getRecipeIngredients,
      params: [recipeId],
    });

    const ingredients = [];
    for (let i = 0; i < result.rows.length; ++i) {
      ingredients.push(result.rows.item(i));
    }
    return ingredients;
  }

  static async updateRecipe({id, title, imagePath, steps, servings}) {
    console.log(
      'Payload in update recipe service:',
      id,
      title,
      imagePath,
      steps,
      servings,
    );

    const updateRecipe =
      'UPDATE ' +
      RECIPES_TABLE +
      ' SET ' +
      RECIPE_TITLE +
      ' = ?, ' +
      RECIPE_IMAGE_PATH +
      +' = ?, ' +
      RECIPE_STEPS +
      ' = ?, ' +
      RECIPE_SERVINGS +
      ' = ? WHERE ' +
      RECIPE_ID +
      ' = ?';

    const params = [title, imagePath, steps, servings, id];

    try {
      const result = await SqlStatementExecutor.execute({
        db: RecipesStorageService.#db,
        statement: updateRecipe,
        params,
      });
      const rowsAffected = result.rowsAffected;
      return rowsAffected > 0;
    } catch (e) {
      console.log('Error on updating recipe in storage', e);
    }
  }

  static async removeRecipe(id) {
    const removeRecipe =
      'DELETE FROM ' + RECIPES_TABLE + ' WHERE ' + RECIPE_ID + ' =?';

    const result = await SqlStatementExecutor.execute({
      db: RecipesStorageService.#db,
      statement: removeRecipe,
      params: [id],
    });

    const rowsAffected = result.rowsAffected;

    return rowsAffected > 0;
  }
}
