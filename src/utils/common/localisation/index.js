import translations from '../../../assets/translations';

export const useTranslation = () => {
  const appTranslations = translations;

  const currentLanguageCode = appTranslations.defaultLanguage;

  const t = (pattern) => {
    return appTranslations.translationsMap[currentLanguageCode][pattern];
  };

  return {t, language: currentLanguageCode};
};
