import React, { useEffect, useState } from 'react'
// import { useTable } from '../context/Table'
import axios from 'axios'

const CustomerSay = () => {

  const [reviews, setReviews] = useState([])

  const getreviews = async () => {
    const { data } = await axios.get('/reviews')
    setReviews(data.reviews)
  }

  useEffect(() => {
    getreviews()
  }, [])

  return (
    <>
      <div className='rating-con'>
        <div id="review-carousel" className="carousel slide rw-corousel" data-bs-ride="carousel">
          <div className="carousel-inner">
            {reviews.map((element, index) => {
              return <div key={element._id} className={`carousel-item rw-caro-item ${index === 0 ? 'active' : ''}`}>
                  <div className='rc-name'>{element.firstname + ' ' + element.lastname}</div>
                  <div className='rc-rating'>Rating : {element.rating}</div>
                  <div className='rc-desc'>{element.description}</div>
                </div>
              
            })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#review-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#review-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='rtc-item'>
          <div className='rtc-header'>Customer Ratings</div>
          <div className='rtc-txt'>Overall Rating :{4.2}</div>
        </div>
      </div>
    </>
  )
}

export default CustomerSay