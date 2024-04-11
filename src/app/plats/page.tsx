import Search from "@/components/search/search";
import styles from "./plats.module.css";
import Layout from "@/components/ui/layout/globalLayout";
import { MdAdd } from "react-icons/md";

export default function Plats() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Search />
          <button className={styles.addBtn}>
            <MdAdd size={30} />
          </button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Description</th>
              <th>Prix</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Alloco</td>
              <td>Banane frite...</td>
              <td>500</td>
              <td>N/A</td>
              <td>Modifier, Supprimer</td>
            </tr>
            <tr>
              <td>2</td>
              <td>1/2 poulet sauté</td>
              <td>Poulet sauté avec...</td>
              <td>2500</td>
              <td>N/A</td>
              <td>Modifier, Supprimer</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
