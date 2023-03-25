import React, { useState } from "react";

const BookingForm = ({times, onChange}) => {
    const [date, setDate] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")
    const [selectedTime, setSelectedTime] = useState(undefined)
    
    // const formValid = () => {
    //     return (
    //         date && availableTimes && guests && occasion
    //     );
    // }

    // const clearField = () => {
    //     setDate('');
    //     setAvailableTimes('');
    //     setGuests('');
    //     setOccasion('');
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Reservation made')
        // clearField()
    }

    return (
        <>
            <h2 style={{
                fontFamily: 'Markazi Text, serif',
                fontSize: '45px',
                textAlign: 'center',
                margin: '5px 0 20px',
                color: '#333'
            }}
            > Book a Table </h2>
            <form onSubmit={handleSubmit}
                style= {{ display: 'grid', 
                background: '#edefee', 
                width: '400px', 
                height: '500px', 
                margin: '0 auto', 
                padding: '5px 10px',
                marginBottom: '20px' }}
                >
                <label htmlFor="res-date"> Choose date </label>
                <input className="formStyle" type="date" id="res-date" 
                    value= {date}
                    onChange= {e => {setDate(e.target.value); onChange(e)}}
                />
                <label htmlFor="res-time"> Choose time </label>
                <select className="formStyle" id="res-time " 
                    onChange= {e => setSelectedTime(e.target.value)}
                >
                    {times.map(time => 
                        <option value={time} key={time}> 
                            {time} 
                        </option>
                    )}
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
                <button type="submit"> Make Your reservation </button>
            </form>
        </>
    )
}

export default BookingForm;
