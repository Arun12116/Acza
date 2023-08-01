import React from 'react'
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsCartDash } from "react-icons/bs"
import { BiUser } from "react-icons/bi"

import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {

    const lengthOfCart = useSelector((mystore) => {
        return mystore;

    })
    return (
        <>
            <div className="nav_Container">
                <div className="nav_Body">
                    <div className="logo">
                        <h1>Geeks-Store</h1>
                    </div>


                    <div className="list">
                        <ul>
                            <Link style={{ color: "white", textDecoration: "none" }} to={"/Home"}>HOME</Link>
                            <Link style={{ color: "white", textDecoration: "none" }} to={"/Product"}>PRODUCT</Link>
                            <Link style={{ color: "white", textDecoration: "none" }} to={"/Cart"}>CART</Link>
                        </ul>

                    </div>
                    <div className="cart">
                        <div>
                            <Link to={"/Login"}>
                                {<BiUser style={{ color: "white" }} />}
                            </Link>
                        </div>

                        <div>
                            <Link to={"/Cart"} style={{ color: "white" }}>


                                {<BsCartDash />}
                            </Link>
                        </div>
                        <div>
                            <div className='count'>
                                <p>  {lengthOfCart.addToCart.length}</p>

                            </div>
                        </div>
                        <div>
                            <div className="hamburger">

                                {<GiHamburgerMenu />}
                            </div>
                        </div>

                    </div>

                </div>





            </div>







        </>
    )
}

export default Navbar