"use client";
import styles from "./SignUp.module.css";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import logo_efood from "@/assets/img/logo-e-food.png";

const signupSchema = z
  .object({
    email: z.string().email({ message: "Adresse email invalide" }),
    password: z
      .string()
      .min(8, { message: "Veuillez insérez 8 caractères minimun" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passes doivent être identiques",
    path: ["confirmPassword"],
  });

type TSignupSchema = z.infer<typeof signupSchema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TSignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  async function onSubmit(data: TSignupSchema) {
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }).then((data) => console.log(data));
  }

  return (
    <div className={styles.container}>
      <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.logoWelcome}>
          <Image src={logo_efood} width="220" height="90" alt="logo" />
        </div>
        <h1>Bienvenue</h1>
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
          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Confirmez le mot de passe"
              required
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className={styles.errors}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </div>

        <button type="submit" className={styles.signInBtn}>
          Créer votre compte
        </button>
      </form>
    </div>
  );
}
