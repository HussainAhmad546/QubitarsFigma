import React from 'react';
import "../../styles/AboutUs.css";
import pic from "../../images/How We Work.png";
import playButtonIcon from "../../images/play-button.svg";

const HowWeWork = () => {
  return (
    <div className='how-we-work-main' style={{border:'1px solid red'}}>
      <h1>How We Work</h1>
      <p>You offer a good product, make advertising, analyze the market but still have no improvement? </p>
      <div className="image-container">
        <img src={pic} alt='how we work' />
        <div className="play-button">
          <img src={playButtonIcon} alt='play' />
        </div>
        <div className="circle-border">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100%" cy="100%" r="30%" fill="none" stroke="transparent" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
