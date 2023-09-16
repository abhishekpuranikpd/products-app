"use client"

import { useState } from "react";



export default function page(){
const [name ,setname]=useState("")
const [company ,setcompany]=useState("")
const [price ,setprice]=useState("")
const [color ,setcolor]=useState("")
const [category ,setcategory]=useState("")
 
const addproduct= async ()=>{
    
    const res = await fetch("http://localhost:3000/api/products/",{
        method:"POST",
        body:JSON.stringify({name,company,price,color,category})
    })
    const data = await res.json()
    if(data.success){
        alert("true")
    }
    
}

    return(
        <div >

            <input type="text" placeholder="name" value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type="text" placeholder="company"value={company} onChange={(e)=>setcompany(e.target.value)}/>
            <input type="text" placeholder="price" value={price} onChange={(e)=>setprice(e.target.value)}/>
            <input type="text" placeholder="color" value={color} onChange={(e)=>setcolor(e.target.value)} />
            <input type="text" placeholder="category" value={category} onChange={(e)=>setcategory(e.target.value) }/>
            <button onClick={addproduct}>ADD Product</button>

        </div>
    )
}