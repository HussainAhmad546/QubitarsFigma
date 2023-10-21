// import React from 'react'
// import TrustPartner from '../../images/TrustedPartners.png'

// const TrustedPartners = () => {
//   return (
//     <>
//     <h1 className='text-center fw-bolder display-3'>Our Trusted Partners</h1>
//     <p>You offer a good product, make advertising, analyze the market but<br/>still have no improvement? </p>
//     <img src={TrustPartner} alt="" />
//     </>
//   )
// }

// export default TrustedPartners
import React from 'react';
import TrustPartner from '../../images/TrustedPartners.png';

const TrustedPartners = () => {
  return (
    <div className="container text-center mt-4">
      <h1 className="fw-bolder display-3 mt-4">Our Trusted Partners</h1>
      <p>
        You offer a good product, make advertising, analyze the market but
        <br /> still have no improvement?
      </p>
      <img
        src={TrustPartner}
        alt="Trusted Partners"
        className="img-fluid mt-4"
      />
    </div>
  );
};

export default TrustedPartners;
