import Search from "@/components/search/search";
import styles from "./plats.module.css";
import Link from "next/link";
import Pagination from "@/components/pagination/pagination";
import Layout from "@/components/ui/layout/globalLayout";
import {MdAdd} from "react-icons/md"
import client from "@/libs/prismadb";
import DisheList from "@/app/plats/DisheList";

export default async function Plats() {
  const plats = await client.plats.findMany()
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Search/>
          <Link href="/plats/ajouter">
            <button className={styles.addBtn}>
              <MdAdd size={30}/>
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
          <DisheList plats={plats}/>
        </table>
        <Pagination/>
      </div>
    </Layout>
  );
}

