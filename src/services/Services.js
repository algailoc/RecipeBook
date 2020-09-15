import {RecipesStorageService} from './recipes-storage/RecipesStorageService';

class ServicesInstance {
  serviceTypes = {
    RECIPES_STORAGE: 'RECIPES_STORAGE',
  };

  #recipesStorage;
  #className = 'ServicesInstance';

  constructor() {
    this.#recipesStorage = RecipesStorageService;
  }

  async init() {
    await this.#recipesStorage.init();
  }

  get(serviceType) {
    switch (serviceType) {
      case this.serviceTypes.RECIPES_STORAGE: {
        return this.#recipesStorage;
      }

      default: {
        return undefined;
      }
    }
  }
}

const Services = new ServicesInstance();
Object.freeze(Services);

export default Services;
