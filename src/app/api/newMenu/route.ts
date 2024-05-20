import {NextRequest, NextResponse} from "next/server";
import client from "@/libs/prismadb";

export async function POST(req: NextRequest) {
    const {name, description, price} = await req.json()

    try {
        const newMenu = await client.menu.create({data:{
            name, description, img : "test", online : true
            }})
        return NextResponse.json("Le Menu a été créé")
    }catch (err){
        return NextResponse.json(err)
    }
}