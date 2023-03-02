import React from "react";
import Header from "./Header";
import Footer from './Footer';

const About = () => {
    return (
        <div style= {{display: 'grid', gridTemplateRows: '1fr', height: '100vh'}}>
            <Header />
            <Footer />
        </div>
    )
}

export default About;
