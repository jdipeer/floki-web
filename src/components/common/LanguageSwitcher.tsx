import styles from '@/styles/scss/Header.module.scss';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const languages: any = t('header.languages', { returnObjects: true });

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className={styles.languageSwitcher}>
      <select value={i18n.language} onChange={changeLanguage}>
        {languages.map((lang: any) => (
          <option key={lang.toLowerCase()} value={lang.toLowerCase()}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
