"use client";
import styles from "@/app/plats/ajouter/ajouterUnPlat.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { NewDishe } from "@/action/plats";
import { TMenu } from "@/app/menu/MenuList";

const AddDisheSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive().min(1)
  ),
  online: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number()),
  menu: z.string(),
});
export type TAddDisheSchema = z.infer<typeof AddDisheSchema>;

export default function Form({ menu }: { menu: TMenu }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TAddDisheSchema>({
    resolver: zodResolver(AddDisheSchema),
  });

  const router = useRouter();

  async function submitHandler(data: TAddDisheSchema) {
    NewDishe(data)
      .then((res) => reset())
      .catch((err) => console.log(err));
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
      <input placeholder="Nom" {...register("name")} />
      <select id="menu" {...register("menu")}>
        <option value="general">Choisir un Menu</option>
        {menu.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <input {...register("price")} placeholder="Prix" />
      {errors.price && <p>{errors.price.message}</p>}
      <input type="file" name="image" accept="image/*" />
      <select id="isActive" {...register("online")}>
        <option value="Général">En ligne ?</option>
        <option value={1}>Oui</option>
        <option value={0}>Non</option>
      </select>
      <textarea
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
