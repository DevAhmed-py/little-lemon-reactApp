import React from "react";
import BookingForm from "./BookingForm";
import Nav from "./Nav";
import Footer from "./Footer";

const BookingPage = () => {
    return (
        <div style=
            {{ display: 'grid', 
            gridTemplateRows: 'auto 1fr auto', 
            height: '100vh' }}
            >
            <Nav />
            <BookingForm />
            <Footer />
        </div>
    )
}

export default BookingPage;
