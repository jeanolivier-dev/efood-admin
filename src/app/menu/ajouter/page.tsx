import Layout from "@/components/ui/layout/globalLayout";
import styles from "./ajouterUnMenu.module.css";

export default function AjouterUnPlat() {
  return (
    <Layout>
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Titre" name="titre" required />
          <textarea
            name="description"
            id="description"
            rows={16}
            placeholder="Description"
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </Layout>
  );
}
