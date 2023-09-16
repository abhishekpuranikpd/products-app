"use client"

import { useRouter } from "next/navigation";

export default function DeleteProduct(props){
    const router = useRouter()
    console.log(props.id);
   const dlteproduct = async ()=>{
     let response = await fetch ("http://localhost:3000/api/products/"+props.id,{
        method:"DELETE"
     });
     response = await response.json();
     if(response.success){
        alert("deleted")
     }
     router.refresh()
   //   router.push("/addproduct")

   }


    return <button onClick={dlteproduct}>Delete</button>
}