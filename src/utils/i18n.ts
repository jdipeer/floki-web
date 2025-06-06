import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/utils/translations/en.json';
import ru from '@/utils/translations/ru.json';
import cn from '@/utils/translations/cn.json';

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      cn: { translation: cn }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'cn'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
