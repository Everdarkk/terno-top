import { overpass } from '@/app/layout';
import styles from '../../styles/FaqAccordeon.module.css';

// Компонент приймає:
// item - об'єкт з даними {question, answer}
// isOpen - булеве значення (true/false), чи відкритий він зараз
// onToggle - функцію, яку треба викликати при кліку
export default function FaqAccordeon({ item, isOpen, onToggle }) {
  return (
    <li
      className={`${styles.item} ${isOpen ? styles.open : ''}`}
      onClick={onToggle}
    >
      <div className={styles.questionHeader}>
        {/* ICON */}
        <div className={styles.iconWrapper}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>

        <span className={`${styles.questionText} ${overpass.className}`}>{item.question}</span>

        {/* PLUS/CLOSE */}
        <div className={styles.toggleIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </div>

      {/* ANSWER */}
      <div className={styles.answerCollapse}>
        <div className={styles.answerContent}>
          <p>{item.answer}</p>
        </div>
      </div>
    </li>
  );
}