import { connectionstr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function  GET(request,content){
let data = null
    try {
        const productid = content.params.productid
    const filter ={_id:productid}
        await mongoose.connect(connectionstr);
     data = await Product.findOne(filter);
    } catch (error) {
        data = {success:false}
        console.log(error);
    }

    return NextResponse.json({data,success:true})
}

export async function PUT(request,content){
    const productid = content.params.productid
    const filter ={_id:productid}
    const payload = await request.json()
    console.log(payload);
    await mongoose.connect(connectionstr);
 
    const result = await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,success:true})
} 

export async function DELETE(request,content){
    const productid = content.params.productid
    const record ={_id:productid}
    // const payload = await request.json()
    // console.log(payload);
    await mongoose.connect(connectionstr);
 
    const result = await Product.deleteOne(record)
    return NextResponse.json({result,success:true})
} 

