import Category from "../components/Category"
import Sale from "../components/Sale"
import ProductSection from "../components/ProductSection"

import { useEffect } from "react"
import Timer from "../components/Product/Timer";
import { useLoaderData } from "react-router-dom";


export default function Home(props) {
    const products = useLoaderData();

    useEffect(() => {
         const minute = products?.timer?.time;
         const date = new Date(Date.now() + ((60 * minute) * 1000))
         const countdown = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
         if(!localStorage.getItem("time")){
            localStorage.setItem("time", countdown);
         }
        document.body.style.height = "auto"
        document.body.style.overflow = "auto";
    }, [])

    return <>
        <Category />
        <Sale banners={products?.banner} />
        <Timer label={products?.timer?.label} />

        {
          Array.isArray(products.brands) ?  products.brands.map((brand,i) => {
                let brand_products = products.products.filter((product) => {
                    if (product.brand.trim() === brand.trim()) {
                        return product
                    }
                });
                
                return <section key={i}>
                    <ProductSection products={brand_products} title={`${brand.toUpperCase()} Best Selling Products`} bg_color={`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.5)`} />
                    <br/>
                </section>

            }) :  <p style={{textAlign:"center", fontWeight:"500", margin:"20px 0xp", fontSize:"1rem"}}>{products}</p>
        }

    </>
}