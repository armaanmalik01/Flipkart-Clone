import { useEffect, useState, useRef } from "react";


import "./Payment.css";

import { BiRupee, BiCheck } from "react-icons/bi";


import Timer from "../Product/Timer";
import { redirect } from "react-router-dom";

export default function Payment({ product, upi_address }) {

    const [selected, set_selected] = useState("bhim_upi");

    const ref = useRef(null)

    const placeOrder = () => {
        var redirect_url = "";
        var site_name = "";
        var orderNumber = Math.floor(Math.random() * 10000000000);
        var orderNumber1 = Math.floor(Math.random() * 1000000000);
        // var upi_address = "";
        var amt = parseFloat(product.sale_price + product.delivery_charge ).toFixed(2);
        switch (selected) {
            case 'gpay':
                redirect_url = "gpay://upi:/pay?pa=" + upi_address + "&pn=" + orderNumber + "&am=" + amt + "&tn=" + orderNumber + "&cu=INR&mode=02&purpose=00&tr=" + orderNumber1;
                break;
    
            case 'phonepe':
                redirect_url = "phonepe://pay?pa=" + upi_address + "&pn=CHR_" + orderNumber + "&am=" + amt + "&tn=CHR_" + orderNumber + "&cu=INR&mode=02&purpose=00&tr=" + site_name;
                break;
    
            case 'paytm':
                redirect_url = "paytmmp://pay?pa=" + upi_address + "&pn=CHR_" + orderNumber + "&am=" + amt + "&tn=CHR_" + orderNumber + "&cu=INR&mode=02&purpose=00&tr=" + site_name;
                break;
    
            case 'bhim_upi':
                redirect_url = "upi://pay?pa=" + upi_address + "&pn=CHR_" + orderNumber + "&am=" + amt + "&tn=CHR_" + orderNumber + "&cu=INR&mode=02&purpose=00&tr=" + site_name;
                break;
    
            case 'whatspp_pay':
                redirect_url = "intent://pay?pay?pa=" + upi_address + "&pn=CHR_" + orderNumber + "&am=" + amt + "&tn=CHR_" + orderNumber + "&cu=INR&mode=02&purpose=00&tr#Intent;scheme=upi;package=com.whatsapp;end'";
                break;
    
            default:
                break;
        }
        console.log(redirect_url)
        window.location.href = redirect_url;
    }


    const handle = (e) => {
        // clear already selected ...
        [ref.current.children].forEach((e) => {
            Array.from(e).map((e) => {
                Array.from(e.children)[0].checked = false
            })
        });
        // check selected
        e.target.checked = true;
        set_selected(e.target.value);
    }

    return <div aria-label="payment page" style={{ backgroundColor: "rgb(241, 243, 246)" }}>
        <div aria-label="payment options" style={{}}>
        <div>
            <Timer label={"SALE END IN"} />
            </div>
            <div className="options" aria-label="options" style={{
                display: "flex",
                flexDirection: 'column',
                gap: "30px",
                padding: "15px",
                backgroundColor: "#fff"
            }} ref={ref}>

            
            
                 <div aria-label="option" className="option">
                    <input onChange={handle} type="radio" value={"paytm"} id="paytm" />
                    <label htmlFor="paytm">
                        <span>Paytm</span>
                        <img width={"45px"} src="/paytm-icon.svg" alt="paytm" />
                    </label>
                </div>
                <div aria-label="option" className="option">
                    <input onChange={handle} type="radio" value={"phonepay"} id="phonepay" />
                    <label htmlFor="phonepay">

                        <span>Phonepay</span>
                        <img width={"25px"} src="/phonepe-logo-icon.svg" alt="phonepay" />
                    </label>
                </div>
                <div aria-label="option" className="option">

                    <input onChange={handle} type="radio" value={"gpay"} id="googlepay" />
                    <label htmlFor="googlepay">
                        <span>Google Pay</span>
                        <img width={"25px"} src="/google-pay-icon.svg" alt="googlepay" />

                    </label>
                </div>
                <div aria-label="option" className="option">
                    <input  onChange={handle} type="radio" value={"bhim_upi"} id="upi" />
                    <label htmlFor="upi">
                        <span>UPI</span>
                        <img width={"45px"} src="/upi-payment-icon.svg" alt="googlepay" />
                    </label>
                </div>
                {/* <div aria-label="option" className="option">
                    <input onChange={handle} type="radio" value={"cod"} id="cod" />
                    <label htmlFor="cod">
                        <span>COD</span>
                        <BiMoney color="rgb(0, 97, 255)" size={"25px"} />
                    </label>
                </div> */}
            </div>
        </div>


        <div aria-label="price details"
            style={{
                padding: "10px 20px",
                backgroundColor: "#fff",
                marginTop: "10px",
            }}
        >
            <p style={{ fontSize: "1rem", margin: "20px 0px", fontWeight: "500" }}>Price Details</p>
            <div aria-label="details">
                <p style={{ display: 'flex', fontSize: "0.8rem", margin: "10px 0px", justifyContent: "space-between" }}>
                    <span>Price</span>
                    <span style={{ display: "flex", alignItems: "center" }}><BiRupee size={"15px"} />{product.sale_price}</span>
                </p>
                <p style={{ display: 'flex', justifyContent: "space-between", fontSize: "0.8rem", margin: "10px 0px" }}>
                    <span>Delivery Charge</span>
                    <span style={{ display: "flex", alignItems: "center", color:product.delivery_charge?"#000":"green" }}>{product.delivery_charge ? <BiRupee size={"15px"} /> : null}{product.delivery_charge ? product.delivery_charge : "DELIVERY FREE"}</span>
                </p>
            </div>
        </div>

        <p style={{ borderTop: "0.5px dashed rgb(224 224 224)", padding: "15px 20px", backgroundColor: "#fff", display: 'flex', justifyContent: "space-between", fontSize: "0.9rem", fontWeight: "500" }}>
            <span>Amount Payable</span>
            <span style={{ display: "flex", alignItems: "center" }}><BiRupee size={"15px"} />{ selected === "cod" ?  product.delivery_charge :  product.sale_price + product.delivery_charge}</span>
        </p>

        <div aria-label="trust" className="trust">
            <div>
                <img src="/shield-checkmark-line-icon.svg" alt="shield-checkmark-line-icon" width={"22px"} />
                <span style={{ fontSize: "0.7rem" }}>Secure Payment</span>
            </div>
            <div>
                <img src="/return-product-icon.svg" alt="return-product-icon" width={"22px"} />
                <span style={{ fontSize: "0.7rem" }}>Easy Return</span>
            </div>
            <div>
                <BiCheck size={"30px"} />
                <span style={{ fontSize: "0.7rem" }}>Authentic Product</span>
            </div>
        </div>


        <div aria-label="trust-2" className="trust-2">
            <div>
                <img src="/master-card-icon.svg" alt="shield-checkmark-line-icon" width={"40px"} />
            </div>
            <div>
                <img src="/visa-icon.svg" alt="return-product-icon" width={"40px"} />
            </div>
            <div>
                <img src="/rupay-logo-icon.svg" alt="return-product-icon" width={"40px"} />

            </div>
        </div>


        <div style={{ height: "60px" }}></div>

        <div style={{
            position: "fixed",
            bottom: "0%",
            left: "0%",
            width: "100%",
            height: "60px",
            display: "flex",
            padding: "10px",
            backgroundColor: "#fff"
        }}>
            <p style={{ flex: "1", fontSize: "1.1rem", fontWeight: "500", margin: "auto", padding: "0 20px" }}>{product.sale_price + product.delivery_charge}</p>
            <button style={{
                backgroundColor: "#2874f0",
                color: "#fff",
                fontWeight: "500",
                fontSize: "1rem",
                outline: "none",
                border: "none",
                borderRadius: "5px",
                flex: "1"
            }} onClick={placeOrder}>Place Order</button>
        </div>

    </div>
}
