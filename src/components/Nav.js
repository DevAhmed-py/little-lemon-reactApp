import React from "react";

const Nav = () => {
    return (
        <nav>
            <div className="logo">
                <img src='images/logo.svg' alt="logo" />
            </div>
            <ul className="header-links">
                <li><a href="#"> Home </a></li>
                <li><a href="#"> About </a></li>
                <li><a href="#"> Menu </a></li>
                <li><a href="#"> Reservations </a></li>
                <li><a href="#"> Order Online </a></li>
                <li><a href="#"> Login </a></li>
            </ul>
        </nav>
    )
}

export default Nav
