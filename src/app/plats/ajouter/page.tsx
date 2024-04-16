import Layout from "@/components/ui/layout/globalLayout";
import styles from "./ajouterUnPlat.module.css";

export default function AjouterUnPlat() {
  return (
    <Layout>
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Titre" name="titre" required />
          <select name="menu" id="menu">
            <option value="general">Choisir un Menu</option>
            <option value="entrées">Entrées</option>
            <option value="plats">Plats</option>
            <option value="desserts">Desserts</option>
            <option value="boissons">Boissons</option>
          </select>
          <input type="number" placeholder="Prix" name="prix" required />
          <textarea
            name="description"
            id="description"
            rows={16}
            placeholder="Description"
          ></textarea>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </Layout>
  );
}
