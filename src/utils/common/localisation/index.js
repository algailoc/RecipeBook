import {useSelector} from 'react-redux';
import translations from '../../../assets/translations';

export const useTranslation = () => {
  const appTranslations = translations;

  const currentLanguageCode = useSelector(
    (state) => state.system.system.localization.currentLanguageCode,
  );

  const t = (pattern) => {
    return appTranslations.translationsMap[currentLanguageCode][pattern];
  };

  return {t, language: currentLanguageCode};
};
