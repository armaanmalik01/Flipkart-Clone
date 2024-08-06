import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.svg";

import Drawer from 'react-modern-drawer'

//import styles
import 'react-modern-drawer/dist/index.css'
import { useState } from "react";

import { AiOutlineOrderedList,AiFillMobile, AiFillBell, AiFillHeart, AiFillThunderbolt,
AiFillCar, AiFillTag, AiFillHome
} from "react-icons/ai";

import {BiTv, BiMobile, BiBook, BiHeart } from "react-icons/bi"

const navItems = [
{
    label:"My Account",
    icon : AiOutlineUser,
    href : "#"
},
{
    label:"Orders",
    icon : AiOutlineOrderedList,
    href : "#"
},
{
    label:"Cart",
    icon : AiOutlineShoppingCart,
    href : "#"
},
{
    label:"Electronics",
    icon : BiMobile,
    href : "#"
},
{
    label:"TVs & Appliances",
    icon : BiTv,
    href : "#"
},
{
    label:"Recharge",
    icon : AiFillThunderbolt,
    href : "#"
},
{
    label:"WishList",
    icon : BiHeart,
    href : "#"
},
{
    label:"My Rewards",
    icon : BiBook,
    href : "#"
},
{
    label:"Notification",
    icon : AiFillBell,
    href : "#"
},
{
    label:"Travel",
    icon : AiFillCar,
    href : "#"
},
{
    label:"Offer Zone",
    icon : AiFillTag,
    href : "#"
},
// {
//     label:"Home and furniture",
//     icon : AiFillHome,
//     href : "#"
// }

]


export default function Navbar(props) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return <> <nav>
        <div className="f-1">
            <div className="f-1-ch1">
                <AiOutlineMenu style={{cursor:"pointer"}} onClick={toggleDrawer} color="#fff" size={"20px"} />
                <img style={{marginLeft:"-35px", pointerEvents:"none"}} src={logo}  alt="logo" />                 
            </div>
            <div className="f-1-ch2">
                <div>
                    <AiOutlineUser color="#fff" size={"20px"} />
                    {/*<span style={{color:"#fff"}}>Login</span>*/}
                </div>
                <div>
                    <AiOutlineShoppingCart color="#fff" size={"20px"} />
                </div>
            </div>
        </div>
        <SearchInput />


    </nav>

        <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                lockBackgroundScroll={true}
            >
            
            <div className="topbar" style={{
                backgroundColor:"#2874f0",
                height:"60px",
                display:"flex",
                alignItems:"center",
                padding:"10px"
            }}>
                
            <img style={{marginLeft:"-35px", pointerEvents:"none"}} src={logo}  alt="logo" />

            </div>


            <div
                className="nav-itmes" style={{marginTop:"20px", display:"flex", flexDirection:"column", gap:"10px"}}>
                {
                    navItems.map((e, i) => {
                        return <div onClick={e.href === "#" ? null : ()=>navigate(e.href)} key={i} style={{color:"#555555",display:"flex", alignItems:"center", gap:"10px",padding:"8px 10px", cursor:"pointer"}}>
                            <e.icon size={"20px"}/>   
                            <p style={{fontSize:"0.8rem"}}>{e.label}</p>
                        </div>
                    })
                }


            </div>

            </Drawer>
    </>
}