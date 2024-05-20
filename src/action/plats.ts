"use server"
import client from "@/libs/prismadb"
import {revalidatePath} from "next/cache";
import {TAddDisheSchema} from "@/app/plats/ajouter/Form";


export async function NewDishe(data: TAddDisheSchema) {
  const dataToSend = {
    name: data.name,
    description: data.description,
    price: data.price,
    online: data.online !== 0,
    menu : data.menu,
    img : ""
  }
  try {
    await client.plats.create({
      data: dataToSend
    });
    revalidatePath("/plats");
    return JSON.stringify("Plat ajouté")
  } catch (err) {
    revalidatePath("/plats");
    return JSON.stringify(err)
  }
}

export async function DeleteDishe(id: string) {
  try {
    await client.plats.delete({where: {id: id}});
    revalidatePath("/plats")
    return JSON.stringify("Dishe deleted")
  } catch (err) {
    revalidatePath("/plats");
    return JSON.stringify(err);
  }
}