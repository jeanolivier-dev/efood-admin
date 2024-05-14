"use server"
import client from "@/libs/prismadb";
import {type TAddMenuSchema} from "@/app/menu/ajouter/page";
import {revalidatePath} from "next/cache";

export async function NewMenu(data:TAddMenuSchema) {
    const {name,description} =  data;
    try {
        const newMenu = await client.menu.create({data:{name, description, img : "test", online : true}})
        revalidatePath("/menu");
        return JSON.stringify("Menu ajouté")
    }catch (err){
        revalidatePath("/menu");
        return JSON.stringify(err)
    }
}

export async function DeleteMenu(id : string){
    try {
        const deletedMenu = await client.menu.delete({where:{id : id}})
        revalidatePath("/menu")
        return JSON.stringify("Menu deleted")
    }catch (err){
        revalidatePath("/menu");
        return JSON.stringify(err);
    }
}
