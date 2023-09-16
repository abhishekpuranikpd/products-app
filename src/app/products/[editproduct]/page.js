"use client"
import { useEffect, useState } from "react"

export default function page({ params }) {
    let id = params.editproduct
    console.log(id);
    const [name, setname] = useState("")
    const [company, setcompany] = useState("")
    const [price, setprice] = useState("")
    const [color, setcolor] = useState("")
    const [category, setcategory] = useState("")


    useEffect(() => {
        const getuserdetails = async () => {
            const res = await fetch("http://localhost:3000/api/products/" + id);
            const data = await res.json();
           console.log(data);
          setname(data.data.name)
          setcompany(data.data.company)
          setprice(data.data.price)
          setcolor(data.data.color)
          setcategory(data.data.category)
        }
        getuserdetails();
    }, [])
   
    const update = async () => {
        let result = await fetch("http://localhost:3000/api/products/" + id, {
            method: "PUT",
            body: JSON.stringify({ name,company,price,color,category })
        })
        result = await result.json()
        console.log(result);
        if (result.success) {
            alert("updated")
        } else {
            alert("not updated")
        }
    }
    return (
        <div>
            <h1>User Update Page</h1>

            <input type="text" placeholder="name" value={name} onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder="company" value={company} onChange={(e) => setcompany(e.target.value)} />
            <input type="text" placeholder="price" value={price} onChange={(e) => setprice(e.target.value)} />
            <input type="text" placeholder="color" value={color} onChange={(e) => setcolor(e.target.value)} />
            <input type="text" placeholder="category" value={category} onChange={(e) => setcategory(e.target.value)} />
            <button onClick={update}>UPDATE Product</button>
        </div>
    )
}