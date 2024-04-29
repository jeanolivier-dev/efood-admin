import styles from "./login.module.css";
import Image from "next/image";
import logo_efood from "@/assets/img/logo-e-food.png";

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.wrapper} action="">
        <div className={styles.logoWelcome}>
          <Image src={logo_efood} width="220" height="90" alt="logo" />
        </div>
        <h1>Ravie de vous revoir</h1>

        <div className={styles.inputArea}>
          <div className={styles.inputBox}>
            <input type="email" placeholder="Email" required />
          </div>
          <div className={styles.inputBox}>
            <input type="password" placeholder="Mot de passe" required />
          </div>
        </div>

        <div className={styles.rememberForgot}>
          <label>
            <input type="checkbox" />
            Se souvenir de moi
          </label>
          <a href="#">Mot de passe oublié ?</a>
        </div>

        <button type="submit" className={styles.loginBtn}>
          Connexion
        </button>

        <div className={styles.registerLink}>
          <p>
            Vous n&apos;avez pas de compte ?
            <a href="/signup"> Créer un compte</a>
          </p>
        </div>
      </form>
    </div>
  );
}
