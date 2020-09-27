import * as RNLocalize from 'react-native-localize';
import translations from '../../../../assets/translations';

class SystemLocalization {
  static async init() {}

  static getAvailableLanguageCodes() {
    const appTranslations = translations;
    const uniqueLanguageCodes = appTranslations.uniqueLanguages;

    const uniqueLanguagesArray = [];
    Object.keys(uniqueLanguageCodes).forEach((key) =>
      uniqueLanguagesArray.push(key),
    );

    return uniqueLanguagesArray;
  }
}

export default SystemLocalization;
