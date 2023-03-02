import React from "react";
import Main from './Main';
import Footer from './Footer';
import Nav from "./Nav";

const Menu = () => {
    return (
        <div style= {{display: 'grid', gridTemplateRows: '1fr', height: '100vh'}}>
            <Nav />
            <Main  />
            <Footer />
        </div>
    )
}

export default Menu;
