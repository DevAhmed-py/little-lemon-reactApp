import React, { useState } from "react";

const BookingForm = () => {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")
    
    const formValid = () => {
        return (
            date && time && guests && occasion
        );
    }

    const clearField = () => {
        setDate('');
        setTime('');
        setGuests('');
        setOccasion('');
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Reservation made')
        clearField()
    }

    return (
        <form onSubmit={handleSubmit}
            style= {{ display: 'grid', 
            background: '#edefee', 
            width: '400px', 
            height: '500px', 
            margin: '0 auto', 
            padding: '5px 10px' }}
            >
            <label htmlFor="res-date"> Choose date </label>
            <input className="formStyle" type="date" id="res-date" 
                value= {date}
                onChange= {e => setDate(e.target.value)}
            />
            <label htmlFor="res-time"> Choose time </label>
            <select className="formStyle" id="res-time " 
                value= {time}
                onChange= {e => setTime(e.target.value)}
            >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests"> Number of guests </label>
            <input className="formStyle" type="number" placeholder="1" 
                min="1" max="10" id="guests" 
                value= {guests}
                onChange= {e => setGuests(e.target.value)}
            />
            <label htmlFor="occasion"> Occasion </label>
            <select className="formStyle" id="occasion" 
                value= {occasion}
                onChange= {e => setOccasion(e.target.value)}
            >
                <option value= 'birthday'> Birthday </option>
                <option value= 'anniversary'> Anniversary </option>
                <option value= 'no_occasion'> No occassion </option>
            </select>
            <button disabled= {!formValid()} type="submit"> Make Your reservation </button>
        </form>
    )
}

export default BookingForm;
