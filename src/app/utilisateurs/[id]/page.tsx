import Image from "next/image";
import styles from "./singleUserPage.module.css";
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
          Restaurant La Tulipe
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <label>Nom du restaurant</label>
            <input
              type="text"
              name="nom du restaurant"
              placeholder="Restaurant La Tulipe"
            />
            <label>E-mail</label>
            <input type="email" name="email" placeholder="johndoe@gmail.com" />
            <label>Mot de passe</label>
            <input type="password" name="mot de passe" />
            <label>Numero de téléphone</label>
            <input
              type="text"
              name="numero de téléphone"
              placeholder="+12345678"
            />
            <label>Adresse</label>
            <textarea name="adress" placeholder="Abidjan, Cocody Centre" />
            <label>Est admin</label>
            <select name="isAdmin" id="isAdmin">
              <option value={"true"}>Oui</option>
              <option value={"false"}>Non</option>
            </select>
            <label>Est actif</label>
            <select name="isActive" id="isActive">
              <option value={"true"}>Oui</option>
              <option value={"false"}>Non</option>
            </select>
            <button>Enregistrer</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
