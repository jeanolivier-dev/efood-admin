import Image from "next/image";
import styles from "./singleDishesPage.module.css";
import userImage from "@/assets/img/user-image.jpeg";
import Layout from "@/components/ui/layout/globalLayout";

export default function SingleUserPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src={userImage} alt="#" fill />
          </div>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <label>Nom</label>
            <input type="text" name="nom" placeholder="Alloco" />
            <label>Description</label>
            <textarea
              name="adress"
              placeholder="Banane frite à l'huile de palme..."
            />
            <label>Prix</label>
            <input type="number" name="prix" placeholder="500" />
            <select name="menu" id="menu">
              <option value="general">Choisir un Menu</option>
              <option value="entrées">Entrées</option>
              <option value="plats">Plats</option>
              <option value="desserts">Desserts</option>
              <option value="boissons">Boissons</option>
            </select>
            <button>Enregistrer</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
