"use server"

import client from "@/libs/prismadb"
import { type TAddDisheSchema } from "@/app/plats/ajouter/Form";
import { revalidatePath } from "next/cache";

export async function NewDishe(data:TAddDisheSchema) {
    const {name,description} =  data;
    try {
        const newDishe = await client.plats.create({data:{name, description, price, img : "test", online : true}})
        revalidatePath("/plats");
        return JSON.stringify("Plat ajouté")
    }catch (err){
        revalidatePath("/plats");
        return JSON.stringify(err)
    }
}

export async function DeleteDishe(id : string){
    try {
        const deletedDishe = await client.plats.delete({where:{id : id}})
        revalidatePath("/plats")
        return JSON.stringify("Dishe deleted")
    }catch (err){
        revalidatePath("/plats");
        return JSON.stringify(err);
    }
}