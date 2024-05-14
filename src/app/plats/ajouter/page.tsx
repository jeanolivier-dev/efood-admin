'use client'
import Layout from "@/components/ui/layout/globalLayout";
import styles from "./ajouterUnPlat.module.css";
import {z} from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const AddDisheSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.preprocess(
      (a) => parseInt(z.string().parse(a), 10),
      z.number().positive().min(1)
  ),
})
type TAddDisheSchema = z.infer<typeof AddDisheSchema>


export default function AjouterUnPlat() {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm<TAddDisheSchema>({
    resolver: zodResolver(AddDisheSchema),
  });

  const router = useRouter()

async function submitHandler(data : TAddDisheSchema) {
  const response = await fetch("/api/newDishe", {
    method: "POST",
    body: JSON.stringify(data)
  })

  if (response.ok) router.push("/plats");

  console.log(response)
  }

  return (
    <Layout>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
          <input placeholder="Nom" {...register("name")} />
          <select name="menu" id="menu">
            <option value="general">Choisir un Menu</option>
            <option value="entrées">Entrées</option>
            <option value="plats">Plats</option>
            <option value="desserts">Desserts</option>
            <option value="boissons">Boissons</option>
          </select>
          <input  {...register("price")} placeholder="Prix" />
          {errors.price && <p>{errors.price.message}</p>}
          <input type="file" name="image" accept="image/*"/>
            <select name="isActive" id="isActive">
              <option value="Général">En ligne ?</option>
              <option value={"true"}>Oui</option>
              <option value={"false"}>Non</option>
            </select>
          <textarea
            rows={16}
            placeholder="Description"
            {...register("description")}
          />
          <button type="submit" disabled={isSubmitting}>Ajouter</button>
        </form>
      </div>
    </Layout>
  );
}