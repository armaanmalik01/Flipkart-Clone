import {Swiper , SwiperSlide } from "swiper/react";
import {  Autoplay, Pagination } from "swiper/modules";

import "./Sale.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



export default function Sale({banners}) {
    return <section>
        <Swiper
            modules={[Autoplay, Pagination,]}
            pagination={{clickable:true}}
            autoplay={{delay:"5000"}}
            loop={true}
        >            
        {
            banners.map((e, i) => {
                return <SwiperSlide key={i} style={{height:"250px", backgroundImage:`url(${e})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}></SwiperSlide>
            
            })
        }
        </Swiper>
    </section>
}