import React from 'react'
import { useNavigate } from 'react-router-dom'
import banner from '../assests/banner.png'
const BackStory = () => {
  let navigate = useNavigate()
  return (
    <>
      <div className='backstory'>
        <div className='banner-con'>
          <div>
            <h1 className='bs-title'>Little Lemon</h1>
            <h4 className='bs-loc'>Chicago</h4>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button onClick={()=>navigate('/booking')}>Reserve a table</button>
          </div>
          <div>
            <img src={banner} alt='banner'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default BackStory