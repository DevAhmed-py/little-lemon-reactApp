import React from "react"
import Nav from "./Nav"

const Header = () => {
    return (
        <div className="header">
            <Nav />
            <section className="header-section">
                <div className="left">
                    <h1> Little Lemon </h1>
                    <h3> Chicago </h3>
                    <p> 
                        We are a family owned Mediterranean restaurant, 
                        focused on traditional recipes served with a 
                        modern twist 
                    </p>
                    <button> Reserve a Table </button>
                </div>
                <div className="right">
                    <img src="" alt="header content food image" />
                </div>
            </section>
        </div>
    )
}

export default Header
