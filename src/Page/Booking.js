import React from 'react'
import BookingForm from '../components/BookingForm'

const Booking = () => {
  return (
    <>
      <div className='rb-title'>Reseravtion Form</div>
      <div className='d-flex justify-content-center'>
        <BookingForm/>
      </div>
    </>
  )
}

export default Booking