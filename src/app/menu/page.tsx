import Layout from "@/components/ui/layout/globalLayout";
import styles from "./menu.module.css";
import Search from "@/components/search/search";
import Image from "next/image";
import product_image from "@/assets/img/noproduct.jpg";
import Link from "next/link";
import Pagination from "@/components/pagination/pagination";
import { MdAdd } from "react-icons/md";

export default function Menu() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Search />
          <Link href="/menu/ajouter">
            <button className={styles.addBtn}>
              <MdAdd size={30} />
            </button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <td>Nom</td>
            <td>Decription</td>
            <td>Nbre de plats</td>
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
                Entrées
              </div>
            </td>
            <td>Lorem Ipsum...</td>
            <td>4</td>
            <td>02.03.2024</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/menu/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    Modifier
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
