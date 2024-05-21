import Layout from "@/components/ui/layout/globalLayout";
import styles from "./menu.module.css";
import Search from "@/components/search/search";
import Link from "next/link";
import Pagination from "@/components/pagination/pagination";
import { MdAdd } from "react-icons/md";
import client from "@/libs/prismadb";
import { DeleteMenu } from "@/action/menu";
import MenuList from "@/app/menu/MenuList";

export default async function Menu() {
  const menu = await client.menu.findMany();

  async function handleDelete(id: string) {
    await DeleteMenu(id);
  }

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
            <tr>
              <td>Nom</td>
              <td>Decription</td>
              <td>Nbre de plats</td>
              <td>Créer le</td>
              <td>Action</td>
            </tr>
          </thead>
          {menu.length === 0 && <p>Aucun menu pour l&apos;instant</p>}
          <MenuList menu={menu} />
        </table>
        <Pagination />
      </div>
    </Layout>
  );
}
