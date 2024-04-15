import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
export default function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={30} />
      <div className={styles.texts}>
        <span className={styles.title}>Nombre de commandes</span>
        <span className={styles.number}>50</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> de plus que la semaine
          précédente
        </span>
      </div>
    </div>
  );
}
