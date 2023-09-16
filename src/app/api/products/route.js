import { connectionstr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function  GET(request){
let data =[]
    try {
        await mongoose.connect(connectionstr);
     data = await Product.find();
    } catch (error) {
        data = {success:false}
    }
    console.log(data);
    return NextResponse.json({data,success:true})
}



export async function POST(request){
    const payload = await request.json()
    await mongoose.connect(connectionstr);
    const product = new Product (payload)
    const result = await product.save();
    return NextResponse.json({result,success:true})
} 