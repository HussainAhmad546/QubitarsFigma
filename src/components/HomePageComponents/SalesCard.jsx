import React from 'react'
import '../../styles/SalesCard.css'
import SalePic1 from '../../images/sale Pic 1.png'
import SalePic2 from '../../images/Sale Pic 2.png'


const SalesCard = () => {
  return (
    <div className='sales-card-container'>
      <div className="left-section">
        <div className="sales" style={{display:'flex'}}>
        {/* <div className='sale-1'>
            <p><span className='sale'>Sale</span> upto <span className='all'>all Macbook</span></p>
        </div> */}
        <img src={SalePic1} alt="" height={190} width={373}/>

        <div className='sale-2'>
            {/* <p><span className='sale'>Sale</span> upto <span className='all'>all accessories</span></p> */}
            <img src={SalePic2} alt="" height={190} width={373}/>
        </div>
        </div>
        <div className='sale-3'>
            <p style={{fontWeight:'bold'}}>Find the best watch for you!</p>
            <p style={{color:'#0F75BC', fontSize:'25px', fontWeight:'bold'}}>Smart</p>
            <p style={{color:'#F7941D',fontSize:'25px', fontWeight:'bold'}}>Watches</p>
        </div>
      </div>
      <div className="right-section">

      </div>
    </div>
  )
}

export default SalesCard
