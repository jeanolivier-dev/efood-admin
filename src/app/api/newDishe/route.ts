import {NextRequest, NextResponse} from "next/server";
import client from "@/libs/prismadb";

export async function POST(req: NextRequest) {
    const {name, description, price} = await req.json()

    try {
        const newDishes = await client.plats.create({data:{
            name, description, price, img : "test", online : true
            }})
        return NextResponse.json("Le plat a été créé")
    }catch (err){
        return NextResponse.json(err)
    }
}