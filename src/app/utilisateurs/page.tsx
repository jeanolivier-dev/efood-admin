import Layout from "@/components/ui/layout/globalLayout";
import styles from "./utilisateurs.module.css";
import Search from "@/components/search/search";

export default function Utilisateurs() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Search />
          <button className={styles.addBtn}>Ajouter</button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ulitisateur</th>
              <th>Restaurant</th>
              <th>Adress E-mail</th>
              <th>Téléphone</th>
              <th>Rôle</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>La tulipe</td>
              <td>latuplie@exemple.com</td>
              <td>0000000000</td>
              <td>User</td>
              <td>Modifier, Supprimer</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Doe</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>Modifier, Supprimer</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
