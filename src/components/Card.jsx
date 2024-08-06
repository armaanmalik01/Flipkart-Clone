import "./Card.css";
import { useNavigate } from "react-router-dom";

import Price from "./Product/Price";

export default function Card({
    name , img_src,
    regular_price, sale_price
    }) {
        const navigate = useNavigate();
        
        return <div className="card" onClick={() => navigate(`/product/${name}`)}>
            <div className="image">
                <img src={img_src} alt={name} />
            </div>
            <div className="name">
                <p>{name}</p>
            </div>
            <Price regular_price={regular_price} sale_price={sale_price} iconsize={"10px"} fontsize={"0.8rem"} />
        </div>
}