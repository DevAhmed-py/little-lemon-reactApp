import React, {useEffect, useReducer, useState} from "react";
import BookingForm from "./BookingForm";
import Reviews from "./Reviews";

const TIMES = ['17:00','18:00','19:00','20:00','21:00','22:00']

const date = new Date().getDate()

const initializeTimes = () => {
    return TIMES
}

const updateTimes = (state, action) => {

    return state
}

const Main = () => {

    const [availableTimes, dispatch] = useReducer( updateTimes, initializeTimes())

    const fetchData = () => {
        fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
            .then(response => response.json())
            .then(data => data)
            .catch((error) => console.log(error)); 
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    // const [availableTimes, setAvailableTimes] = useState(undefined)

    const handleDateChange = (e) => {
        // setAvailableTimes(e.target.value)

        dispatch(TIMES)
    }
        
    return (
        <main>
            <div className="main-header">
                <h2> This week's specials! </h2>
                <button> Online Menu </button>
            </div>
            <section className="card-wrapper">
                <div className="card">
                    <img src="images/greek-salad.jpg" alt="Greek Salad" />
                    <div className="img-label">
                        <p className="dish"> Greek Salad </p>
                        <p className="price"> $12.99 </p>
                    </div>
                    <p>
                        The famous Greek salad of crispy lettuce, peppers 
                        olives and our Chicago style feta cheese garnished 
                        with crunchy garlic and rosemary.
                    </p>
                    <div className="order-delivery">
                        <p> Order a delivery </p>
                    </div>
                </div>

                <div className="card">
                    <img src="images/bruchetta.svg" alt="Bruchetta" />
                    <div className="img-label">
                        <p className="dish"> Bruchetta </p>
                        <p className="price"> $5.99 </p>
                    </div>
                    <p>
                        Our Bruchetta is made from grilled bread that 
                        has been smeared from garllic and seasoned with 
                        sea salt and olive oil.
                    </p>
                    <div className="order-delivery">
                        <p> Order a delivery </p>
                    </div>
                </div>

                <div className="card">
                    <img src="images/lemon-dessert.jpg" alt="Lemon Dessert" />
                    <div className="img-label">
                        <p className="dish"> Lemon Dessert </p>
                        <p className="price"> $7.49 </p>
                    </div>
                    <p>
                        This comes straight from grandma's recipe book. 
                        Every ingredient has been sourced and is as authentic 
                        as can be imagined.
                    </p>
                    <div className="order-delivery">
                        <p> Order a delivery </p>
                    </div>
                </div>
            </section>

            <BookingForm 
                times = {availableTimes}
                onChange = {handleDateChange}
            />
            {/* <Reviews /> */}
        </main>
    )
}

export default Main
