import {RecipesStorageService} from './recipes-storage/RecipesStorageService';
import SystemService from './system/SystemService';

class ServicesInstance {
  serviceTypes = {
    RECIPES_STORAGE: 'RECIPES_STORAGE',
    SYSTEM: 'SYSTEM',
  };

  #recipesStorage;
  #systemService;
  #className = 'ServicesInstance';

  constructor() {
    this.#recipesStorage = RecipesStorageService;
    this.#systemService = SystemService;
  }

  async init() {
    await this.#systemService.init();
    await this.#recipesStorage.init();
  }

  get(serviceType) {
    switch (serviceType) {
      case this.serviceTypes.RECIPES_STORAGE: {
        return this.#recipesStorage;
      }

      case this.serviceTypes.SYSTEM: {
        return this.#systemService;
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
