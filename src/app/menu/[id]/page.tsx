import Image from "next/image";
import styles from "./singleMenuPage.module.css";
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
            <label>Menu</label>
            <input type="text" name="menu" placeholder="Entrées" />
            <label>Description</label>
            <textarea name="desc" placeholder="Lorem ipsum" />
            <label>En ligne</label>
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
