import Layout from "@/components/ui/layout/globalLayout";
import styles from "./ajouterUnUtilisateur.module.css";

export default function ajouterUnUtilisateur() {
  return (
    <Layout>
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            name="nom d'utilisateur"
            required
          />
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Mot de passe"
            name="mot de passe"
            required
          />
          <input
            type="phone"
            placeholder="Numéro de téléphone"
            name="numéro de téléphone"
          />
          <select name="isAdmin" id="isAdmin">
            <option defaultValue={"admin"} selected>
              Admin ?
            </option>
            <option value={"true"}>Oui</option>
            <option value={"false"}>Non</option>
          </select>
          <select name="isActive" id="isActive">
            <option defaultValue={"actif"} selected>
              Actif ?
            </option>
            <option value={"true"}>Oui</option>
            <option value={"false"}>Non</option>
          </select>
          <textarea
            name="adress"
            id="adress"
            rows={16}
            placeholder="Adresse"
          ></textarea>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </Layout>
  );
}
