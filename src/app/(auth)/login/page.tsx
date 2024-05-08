"use client";

import styles from "./login.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import logo_efood from "@/assets/img/logo-e-food.png";

const loginSchema = z.object({
  email: z.string().email({ message: "Veuillez insérer votre adresse email" }),
  password: z
    .string()
    .min(8, { message: "Veuillez insérez votre mot de passe" }),
});

type TLoginSchema = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function submitHandler(data: TLoginSchema) {
    const user = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/",
    });
  }

  return (
    <div className={styles.container}>
      <form className={styles.wrapper} onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.logoWelcome}>
          <Image src={logo_efood} width="220" height="90" alt="logo" />
        </div>
        <h1>Ravie de vous revoir</h1>

        <div className={styles.inputArea}>
          <div className={styles.inputBox}>
            <input
              type="email"
              placeholder="Email"
              required
              {...register("email")}
            />
            {errors.email && (
              <span className={styles.errors}>{errors.email.message}</span>
            )}
          </div>
          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Mot de passe"
              required
              {...register("password")}
            />
            {errors.password && (
              <span className={styles.errors}>{errors.password.message}</span>
            )}
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
