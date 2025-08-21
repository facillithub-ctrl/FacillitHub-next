// Caminho: components/LoadingSpinner.tsx
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.loader}>
      <svg viewBox="0 0 86 86" className={styles.circleOuter}>
        <circle r="40" cy="43" cx="43" className={styles.back}></circle>
        <circle r="40" cy="43" cx="43" className={styles.front}></circle>
        <circle r="40" cy="43" cx="43" className={styles.new}></circle>
      </svg>
      <svg viewBox="0 0 60 60" className={styles.circleMiddle}>
        <circle r="27" cy="30" cx="30" className={styles.back}></circle>
        <circle r="27" cy="30" cx="30" className={styles.front}></circle>
      </svg>
      <div data-text="Carregando..." className={styles.text}></div>
    </div>
  );
};

export default LoadingSpinner;