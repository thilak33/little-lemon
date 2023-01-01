import React from 'react';
// import axios from 'axios';
import { useTable } from '../context/Table';
import Input from './Input';
import Alert from './Alert';

function BookingForm({ onBooking }) {

    const { reservationdetails, setReservationdetails } = useTable()
    // const [alert, setAlert] = useState({})
    // const [invalid, setInvalid] = useState({})

    const handleSubmit = e => {
        e.preventDefault();
        // axios.post('/bookings', { date, time, people })
        //     .then(res => setMessage(res.data.message))
        //     .catch(err => setError(err.response.data.error));
    };

    const onChangerd = (e) => {
        setReservationdetails({ ...reservationdetails, [e.target.name]: e.target.value })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            {/* <label>
                Date:
                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            </label>
            <br />
            <label>
                Time:
                <input type="time" value={time} onChange={e => setTime(e.target.value)} />
            </label>
            <br />
            <label>
                Number of people:
                <input type="number" value={people} onChange={e => setPeople(e.target.value)} />
            </label>
            <br />
            <button type="submit">Book</button>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>} */}
            <div className='rf-f-partition'>
                <Input
                    className="primary"
                    placeholder='Date'
                    onChange={onChangerd}
                    value={reservationdetails.date}
                    type="date"
                    name="date"
                    id="date"
                    validation="\d{1,}"
                    alertmsg="Enter a valid  date"
                />
            </div>
            <div className='rf-f-partition'>
                <Input
                    className="primary"
                    placeholder='Time'
                    onChange={onChangerd}
                    value={reservationdetails.time}
                    type="time"
                    name="time"
                    id="time"
                    validation="\d{1,}"
                    alertmsg="Enter a valid time"
                />
            </div>
            <div className='rf-f-partition'>
                <Input
                    className="primary"
                    placeholder='Dinners'
                    onChange={onChangerd}
                    value={reservationdetails.dinners}
                    type="number"
                    name="dinners"  
                    id="dinners"
                    validation="\d{1,}"
                    alertmsg="Enter a valid number"
                />
            </div>
            <div className='rf-f-partition'>
                <div class="form-floating rf-select">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Select Occasion</option>
                        <option value="1">Birthday</option>
                        <option value="2">Anniversary</option>
                        <option value="3">NA</option>
                    </select>
                    <label for="floatingSelect rf-select-label">Occasion</label>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='rf-btn'>Reserve a Table</button>
            </div>
        </form>
        </>
    );
}

export default BookingForm;