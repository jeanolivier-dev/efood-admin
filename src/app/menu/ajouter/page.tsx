'use client'
import Layout from "@/components/ui/layout/globalLayout";
import styles from "./ajouterUnMenu.module.css";
import {z} from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {NewMenu} from "@/action/menu"


const AddMenuSchema = z.object({
  name: z.string(),
  description: z.string(),
})
export type TAddMenuSchema = z.infer<typeof AddMenuSchema>

export default function AjouterUnMenu() {

  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm<TAddMenuSchema>({
    resolver: zodResolver(AddMenuSchema),
  });

  const router = useRouter()

async function submitHandler(data : TAddMenuSchema) {
  NewMenu(data).then(res => router.push("/menu"))
  }


  return (
    <Layout>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
          <input type="text" placeholder="Nom du menu" {...register("name")} required />
          <input type="file" name="image" accept="image/*"/>
          <textarea
            id="description"
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
