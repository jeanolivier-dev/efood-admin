import Search from "@/components/search/search";
import styles from "./plats.module.css";
import Image from "next/image";
import product_image from "@/assets/img/noproduct.jpg";
import Link from "next/link";
import Pagination from "@/components/pagination/pagination";
import Layout from "@/components/ui/layout/globalLayout";
import { MdAdd } from "react-icons/md";

export default function Plats() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Search />
          <Link href="/plats/ajouter">
            <button className={styles.addBtn}>
              <MdAdd size={30} />
            </button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <td>Nom</td>
            <td>Decription</td>
            <td>Prix</td>
            <td>Créer le</td>
            <td>Action</td>
          </thead>
          <tbody>
            <td>
              <div className={styles.user}>
                <Image
                  src={product_image}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Alloco
              </div>
            </td>
            <td>Banane frite à l&apos;huile de palme...</td>
            <td>500fCFA</td>
            <td>02.03.2024</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/plats/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Voir
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Supprimer
                </button>
              </div>
            </td>
          </tbody>
        </table>
        <Pagination />
      </div>
    </Layout>
  );
}
