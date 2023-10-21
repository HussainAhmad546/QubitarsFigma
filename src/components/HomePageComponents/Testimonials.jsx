import React from 'react'
import '../../styles/Testimonial.css'
import Testimonial1 from '../../images/testimonial1.png'
import Testimonial2 from '../../images/testimonial2.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <>
    <h1 className='latest-reviews'>Our Latest Reviews</h1>
    <div className='cards'>
        <div className='card-1'>
            <img src={Testimonial1} alt="" />
            <p className='AuthorName'>Anna Merry</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae aliquam ipsum ad error quibusdam sapiente! Praesentium architecto quasi et, provident quo veritatis, aut libero non neque alias nostrum temporibus excepturi!</p>
            <p>23rd Oct, 2023</p>

        </div>
        <div className='card-2'>
        <img src={Testimonial2} alt="" />
        <p className='AuthorName'>Anna Merry</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, maxime sint nesciunt tenetur sit dolores soluta consequuntur, illo facilis id architecto eos laborum facere fugit qui ullam, doloribus consectetur vel.</p>
        <p>23rd Oct, 2023</p>
        </div>
    </div>
        <div className="arrow">
        <FaArrowLeft className="backward" />
        <FaArrowRight className="forward" />
       </div>
       <hr/>
    </>
  )
}

export default Testimonials
