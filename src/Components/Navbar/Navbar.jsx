import React from 'react'
import "./Navbar.css"
import { FaTimes, FaBars } from "react-icons/fa"
import { BsCartDash } from "react-icons/bs"
import { Button } from "@chakra-ui/react"
import { Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handlClick = _ => {
        setClick(!click);
    }

    const lengthOfCart = useSelector((mystore) => {
        return mystore;

    })


    return (
        <>
            <div className="nav_Container">

                <div className="nav_Body">
                    <div className="logo">
                        <h1>Booster</h1>
                    </div>
                    <div className="all-list">
                    <div className="list" >
                    <ul className={click ? "nav-Menu active" : "nav-Menu"}>
                        <NavLink className="nav-Link" to={"/Home"}>HOME</NavLink>
                        <NavLink className="nav-Link" to={"#allProduct"}>PRODUCT</NavLink>
                        <NavLink className="nav-Link" to={"/Contact"}>Contact-Us</NavLink>
                        <NavLink className="nav-Link" to={"/Cart"}>CART</NavLink>
                    </ul>

                </div>

                <div className="cart">
                    <div className='counter'>
                        <Link to={"/Cart"} style={{ color: "white" }}>
                            {<BsCartDash className='cartIcon' />}

                        </Link>


                    </div>

                    <div className='count'>
                        <h1>  {lengthOfCart.addToCart.length}</h1>

                    </div>

                    <div>

                        <Link to={"/login"}>
                            <Button bgColor={'blue'} size={"md"} color={"white"}

                            >Login</Button>
                        </Link>

                    </div>
                    <div>

                        <Link to={"/Sinup"}>
                            <Button className='login_btn' bgColor={'red'} size={"md"} color={"white"}  >SinUp</Button>
                        </Link>

                    </div>



                </div>

                    </div>

                    <div className="hamburger" onClick={handlClick}>
                        {

                            click ? (<FaTimes size={30} style={{ color: "white" }} />) :
                                (<FaBars size={30} style={{ color: "white" }} />)


                        }
                    </div>



                </div>





            </div>







        </>
    )
}

export default Navbar