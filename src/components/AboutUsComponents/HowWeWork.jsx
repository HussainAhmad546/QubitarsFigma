import React from 'react'
import "../../styles/AboutUs.css"
import pic from "../../images/How We Work.png"

const HowWeWork = () => {
  return (
    <div className='how-we-work-main'>
          <h1>How We Work</h1>
          <p>You offer a good product, make advertising, analyze the market but still have no improvement? </p>
          <img src={pic} alt='how we work'/>
      
    </div>
  )
}

export default HowWeWork
