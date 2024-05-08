import Layout from "@/components/ui/layout/globalLayout";
import styles from "./orders.module.css";
import Search from "@/components/search/search";
import Link from "next/link";
import Pagination from "@/components/pagination/pagination";

export default function Commandes() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Search />
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Nom</td>
              <td>Status</td>
              <td>Date</td>
              <td>Montant</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>Table 1</div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>
                  En attente
                </span>
              </td>
              <td>14.02.2024</td>
              <td>25.000fCFA</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.view}`}>
                      voir
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Modifier
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>Table 2</div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.done}`}>
                  Terminé
                </span>
              </td>
              <td>14.02.2024</td>
              <td>25.000fCFA</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.view}`}>
                      Voir
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Modifier
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>Table 1</div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.cancelled}`}>
                  Annulé
                </span>
              </td>
              <td>14.02.2024</td>
              <td>25.000fCFA</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.view}`}>
                      Voir
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Modifier
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </Layout>
  );
}
