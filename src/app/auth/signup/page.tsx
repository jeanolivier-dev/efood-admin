"use client";
import styles from "./SignUp.module.css";
import Image from "next/image";
import logo_efood from "@/assets/img/logo-e-food.png";
import { FormEvent } from "react";

export default function SignUp() {
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    /*
    const userName = e.target[0].value;
    const restaurantName = e.target[1].value;
    const email = e.target[2].value;
    const phoneNumber = e.target[3].value;
    const password = e.target[4].value;
    const passwordConfirm = e.target[5].value;
    console.log(userName);
    */
  }

  return (
    <div className={styles.container}>
      <form className={styles.wrapper} onSubmit={(e) => submitHandler(e)}>
        <div className={styles.logoWelcome}>
          <Image src={logo_efood} width="150" height="70" alt="logo" />
          <h1>Bienvenue</h1>
        </div>
        <div className={styles.inputArea}>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Nom d'utilisateur" required />
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Nom du restaurant" required />
          </div>
          <div className={styles.inputBox}>
            <input type="email" placeholder="Adresse mail" required />
          </div>
          <div className={styles.inputBox}>
            <input type="phone" placeholder="Téléphone" />
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
        </div>

        <button type="submit" className={styles.signInBtn}>
          S&apos;incrire
        </button>
      </form>
    </div>
  );
}
