"use client";

import styles from "@/app/menu/ajouter/ajouterUnMenu.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NewMenu } from "@/action/menu";
import { TMenu } from "@/app/menu/MenuList";

const AddMenuSchema = z.object({
  name: z.string(),
  description: z.string(),
});
export type TAddMenuSchema = z.infer<typeof AddMenuSchema>;

export default function Form({ menu }: { menu: TMenu }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TAddMenuSchema>({
    resolver: zodResolver(AddMenuSchema),
  });

  async function submitHandler(data: TAddMenuSchema) {
    NewMenu(data)
      .then((res) => reset())
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
      <input
        type="text"
        placeholder="Nom du menu"
        {...register("name")}
        required
      />
      <input type="file" name="image" accept="image/*" />
      <textarea
        id="description"
        rows={16}
        placeholder="Description"
        {...register("description")}
      />
      <button type="submit" disabled={isSubmitting}>
        Ajouter
      </button>
    </form>
  );
}
