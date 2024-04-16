import styles from "./pagination.module.css";

export default function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        Précédent
      </button>
      <button className={styles.button}>Suivant</button>
    </div>
  );
}
