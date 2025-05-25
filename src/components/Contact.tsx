import React from 'react';
import styles from '@/styles/scss/Contact.module.scss';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const socials: any = t('contact.socials', { returnObjects: true });

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <span className={styles.sectionTag}>{t('contact.sectionTag')}</span>
        <h2 className={styles.sectionTitle}>
          {t('contact.title1')}
          <span> {t('contact.title2')} </span>
          {t('contact.title3')}
          <span> {t('contact.title4')}</span>
        </h2>

        <div className={styles.socialIcons}>
          {socials.map((social: any, index: number) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <img
                src={social.icon}
                alt={social.name}
                width={index === 1 ? 75 : 60}
                height={60}
                className={styles.socialIcon}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
