import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Card from "../Card";


function sortSix(data) {
    const product_arr = new Set();
    for (let i = 0; i < data.products.length; i++) {
        let randIndex = Math.floor(Math.random() * data.products.length);
        product_arr.add(data.products[randIndex]);
        if (product_arr.size === 6) {
            return Array.from(product_arr);
        }
    }
    
}

export default function Related({ data }) {
    const [products, set_products] = useState(sortSix(data));
    
    return <div aria-label="related products" style={{
        padding:"20px 10px",
        backgroundColor:"#fff",
        margin:"10px 0px"
    }}>
            <p style={{
                margin:"10px 0px",
                marginBottom:"50px",
                fontSize:"1rem",
                fontWeight:"500"
            }}>Related Products</p>
        <Swiper
            modules={[Navigation]}
            navigation={{enabled:true}}
            slidesPerView={2}
            loop={true}
        >
            {
                products.map((e , i) => {
                    return <SwiperSlide style={{border:"none"}} key={i} >
                        <Card regular_price={e.regular_price} sale_price={e.sale_price}  img_src={e.thumb} name={e.name} />
                    </SwiperSlide>
                })
            }

        </Swiper>
    </div>
}