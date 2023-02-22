import React from "react";
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src='images/logo.svg' alt="logo" />
                </div>
                <div className="header-links">
                    <Link to= '/'> Home </Link>
                    <Link to= '/about'> About </Link>
                    <Link to= '/menu'> Menu </Link>
                    <Link to= '/reservations'> Reservations </Link>
                    <Link to= '/order-online' className="onlineOrder"> Order Online </Link>
                    <Link to= '/basket'> <img src="images/basket.svg" alt="basket" /> </Link>
                </div>
            </nav>
        </>
        
    )
}

export default Nav
