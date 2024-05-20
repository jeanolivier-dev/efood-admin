import Search from "@/components/search/search";
import styles from "./plats.module.css";
import Image from "next/image";
import product_image from "@/assets/img/noproduct.jpg";
import Link from "next/link";
import Pagination from "@/components/pagination/pagination";
import Layout from "@/components/ui/layout/globalLayout";
import { MdAdd } from "react-icons/md"
import DisheList from "./ajouter/DisheList";

export default async function Plats() {
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
            <td>Id</td>
            <td>Nom</td>
            <td>Decription</td>
            <td>Prix</td>
            <td>Créer le</td>
            <td>Action</td>
          </thead>
          <DisheList/>
        </table>
        <Pagination />
      </div>
    </Layout>
  );
}
