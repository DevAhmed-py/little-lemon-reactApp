import React from "react";
import Reviews from "./Reviews";

const Main = () => {
    return (
        <main>
            <div className="main-header">
                <h2> This week's specials! </h2>
                <button> Online Menu </button>
            </div>
            <section>
                <div className="card">
                    <img src="" alt="Greek Salad" />
                    <div className="img-label">
                        <p> Greek Salad </p>
                        <p> $12.99 </p>
                    </div>
                    <p>
                        The famous Greek salad of crispy lettuce, peppers 
                        olives and our Chicago style feta cheese garnished 
                        with crunchy garlic and rosemary croutons.
                    </p>
                    <div className="order-delivery">
                        <p> Order a delivery </p>
                    </div>
                </div>

                <div className="card">
                    <img src="" alt="Bruchetta" />
                    <div className="img-label">
                        <p> Bruchetta </p>
                        <p> $5.99 </p>
                    </div>
                    <p>
                        Our Bruchetta is made from grilled bread that 
                        has been smeared from garllic and seasoned with 
                        salt and olive oil.
                    </p>
                    <div className="order-delivery">
                        <p> Order a delivery </p>
                    </div>
                </div>

                <div className="card">
                    <img src="" alt="Lemon Dessert" />
                    <div className="img-label">
                        <p> Lemon Dessert </p>
                        <p> $7.49 </p>
                    </div>
                    <p>
                        This comes straight from grandma's recipe book. 
                        Every ingredient has been sourced and is as authentic 
                        as cn be imagined.
                    </p>
                    <div className="order-delivery">
                        <p> Order a delivery </p>
                    </div>
                </div>
            </section>

            <Reviews />
        </main>
    )
}

export default Main
