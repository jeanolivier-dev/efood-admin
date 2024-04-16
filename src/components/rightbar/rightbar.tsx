import Image from "next/image";
import illust1 from "@/assets/img/space-rocket.png";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

export default function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src={illust1} alt="#" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Disponible maintenant</span>
          <h3 className={styles.title}>
            Comment utilser la nouvelle version de notre tableau de bord ?
          </h3>
          <span className={styles.subtitle}>
            Prenez 5 minutes pour apprendre
          </span>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            eaque perspiciatis obcaecati assumenda corrupti optio debitis.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Regarder
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀 Bientôt disponible</span>
          <h3 className={styles.title}>
            Nouvelle fonctionnalité pour les commandes ?
          </h3>
          <span className={styles.subtitle}>Boostez votre productivité</span>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            eaque perspiciatis obcaecati assumenda corrupti optio debitis.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Découvrir
          </button>
        </div>
      </div>
    </div>
  );
}
