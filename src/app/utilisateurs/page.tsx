import Layout from "@/components/ui/layout/globalLayout";
import styles from "./utilisateurs.module.css";
import Search from "@/components/search/search";
import Image from "next/image";
import user_image from "@/assets/img/user-image.jpeg";
import Link from "next/link";
import { MdAdd } from "react-icons/md";
import Pagination from "@/components/pagination/pagination";

export default function Utilisateurs() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Search />
          <Link href="/user/ajouter">
            <button className={styles.addBtn}>
              <MdAdd size={30} />
            </button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <td>Nom</td>
            <td>Email</td>
            <td>Créer le</td>
            <td>Rôle</td>
            <td>Status</td>
            <td>Action</td>
          </thead>
          <tbody>
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
            <td>john@gmail.com</td>
            <td>13.01.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
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
