import Image from "next/image";
import user_image from "@/assets/img/user-image.jpeg";
import styles from "./transactions.module.css";

export default function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Dernières commandes</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nom</td>
            <td>Status</td>
            <td>Date</td>
            <td>Montant</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={user_image}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                En attente
              </span>
            </td>
            <td>14.02.2024</td>
            <td>25.000 CFA</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={user_image}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Terminé</span>
            </td>
            <td>14.02.2024</td>
            <td>25.000 CFA</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={user_image}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Annulé
              </span>
            </td>
            <td>14.02.2024</td>
            <td>25.000 CFA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
