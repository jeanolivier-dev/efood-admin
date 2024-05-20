"use client"

import styles from "@/app/menu/ajouter/ajouterUnMenu.module.css"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import {z} from "zod"
import {TMenu} from "@/app/menu/ajouter/MenuList"


const AddMenuSchema = z.object({
    name: z.string(),
    description: z.string(),
})
export type TAddMenuSchema = z.infer<typeof AddMenuSchema>

export default function Form({menu}:{menu : TMenu}){
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting },
    } = useForm<TAddMenuSchema>({
        resolver: zodResolver(AddMenuSchema),
    });

    const router = useRouter()

    async function submitHandler(data : TAddMenuSchema) {
        const response = await fetch("/api/newMenu", {
            method: "POST",
            body: JSON.stringify(data)
        })

        if (response.ok) router.push("/menu");

        console.log(response)
    }

    return(
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
    )
}