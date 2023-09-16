import Link from "next/link"

export default async function Home() {
  return(
    <div className="container mx-auto">


  
                
    <li><Link href={"/products"}>View Products</Link> </li>
                
 <li><Link href={"/addproduct"}>ADD Product</Link></li>
               
    </div>
    
  )
     
    
  
}
