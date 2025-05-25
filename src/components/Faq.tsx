import React from 'react';
import styles from '@/styles/scss/Faq.module.scss';
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();
  const questions: any = t('faq.questions', { returnObjects: true });

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        <span className={styles.sectionTag}>{t('faq.sectionTag')}</span>
        <h2 className={styles.sectionTitle}>{t('faq.title')}</h2>

        <div className={styles.accordionList}>
          {questions.map((q: any, index: number) => (
            <div key={index} className={styles.accordionItem}>
              <details className={styles.accordionDetails}>
                <summary className={styles.accordionSummary}>
                  <h4 className={styles.accordionQuestion}>{q.question}</h4>
                </summary>
                <div className={styles.accordionAnswer}>
                  <div className={styles.accordionContent}>{q.answer}</div>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
