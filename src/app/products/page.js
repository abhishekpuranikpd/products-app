import { connectionstr } from "@/lib/db";
import DeleteProduct from "@/lib/deleteproduct";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import Link from "next/link";

async function getproducts() {
    await mongoose.connect(connectionstr);
    const data = await Product.find();
    return data;
}

export default async function Home() {
    const products = await getproducts();
 
    return (

        <div>
            
              <table border="2">
                <thead><tr>
                    <td>Name</td>
                    <td>company</td>
                    <td>price</td>
                    <td>color</td>
                    <td>category</td>
                    <td>Edit</td>
                    <td>delete</td>


                    </tr></thead>
                    <tbody>
                    {
                products.map((product) => (
                        <tr key={product.id}>
                        <td><Link href={`/products/${product.id}`}>{product.name}</Link></td>
                        <td>{product.company}</td>
                        <td>{product.price}</td>
                        <td>{product.color}</td>
                        <td>{product.category}</td>
                        <td><Link href={`/products/${product.id}`}>Edit</Link></td>
                        <td><DeleteProduct id={product.id} /> </td>
                        
                        </tr>
                          ))
                        }
                    </tbody>
              </table>
              
                  
        </div>
    )
}
