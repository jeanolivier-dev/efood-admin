import styles from "./SignIn.module.css";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <form className={styles.wrapper} action="">
        <div className={styles.logoWelcome}>
          <Image src="/logo-e-food.png" width="200" height="80" alt="logo" />
          <h1>Bienvenue</h1>
        </div>

        <div className={styles.inputBox}>
          <input type="text" placeholder="Nom d'utilisateur" required />
        </div>
        <div className={styles.inputBox}>
          <input type="text" placeholder="Nom du restaurant" required />
        </div>
        <div className={styles.inputBox}>
          <input type="tel" placeholder="Téléphone" required />
        </div>
        <div className={styles.inputBox}>
          <input type="password" placeholder="Mot de passe" required />
        </div>
        <div className={styles.inputBox}>
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            required
          />
        </div>

        <button type="submit" className={styles.signInBtn}>
          S&apos;incrire
        </button>
      </form>
    </div>
  );
}
