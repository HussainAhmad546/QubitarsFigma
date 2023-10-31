// import React from 'react';
// import "../../styles/AboutUs.css";
// import pic from "../../images/How We Work.png";
// import playButtonIcon from "../../images/orange orange.png";

// const HowWeWork = () => {
//   return (
//     <div className='how-we-work-main'>
//       <h1>How We Work</h1>
//       <p>You offer a good product, make advertising, analyze the market but still have no improvement? </p>
//       <div className="image-container">
//         <img src={pic} alt='how we work' />
//         <div className="play-button">
//           <img src={playButtonIcon} alt='play' color='orange' style={{borderRadius:'50%', cursor:'pointer'}}/>
//         </div>
//         <div className="circle-border">
//           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="100%" cy="100%" r="30%" fill="none" stroke="transparent" strokeWidth="2" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HowWeWork;
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import "../../styles/AboutUs.css";
import pic from "../../images/How We Work.png";
import playButtonIcon from "../../images/orange orange.png";

const HowWeWork = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setVideoPlaying(true);
  };

  return (
    <div className='how-we-work-main'>
      <h1>How We Work</h1>
      <p>You offer a good product, make advertising, analyze the market but still have no improvement? </p>
      <div className="image-container">
        {!isVideoPlaying ? (
          <>
            <img src={pic} alt='how we work' onClick={handlePlayVideo} style={{ cursor: 'pointer' }} />
            <div className="play-button" onClick={handlePlayVideo} style={{ cursor: 'pointer' }}>
              <img src={playButtonIcon} alt='play' color='orange' style={{ borderRadius: '50%' }} />
            </div>
          </>
        ) : (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Tuw8hxrFBH8&t=223s" // Replace with your video URL
            playing
            controls
            width="800px"
            height="400px"
          />
        )}
      </div>
    </div>
  );
}

export default HowWeWork;

