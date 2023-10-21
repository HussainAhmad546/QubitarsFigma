import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import portfolio1 from '../../images/Portfolio1.png';
import portfolio2 from '../../images/Portfolio2.png';

const OurPortfolio = () => {
  return (
    <div className="container text-center my-5">
      <h1>Our Portfolio</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ad tempore
        dolores soluta nam nobis consequatur nulla, illo rem in quo eveniet
        assumenda officiis tenetur itaque vero recusandae? Et, sit!
      </p>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <div className="custom-carousel-button" onClick={clickHandler}>
              <span style={{ color: 'orange' }}>‹</span>
            </div>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <div className="custom-carousel-button" onClick={clickHandler}>
              <span style={{ color: 'orange' }}>›</span>
            </div>
          )
        }
        emulateTouch
        infiniteLoop
        interval={4000}
        renderIndicator={false}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <img src={portfolio1} alt="Image 1" />
            <div className="custom-legend">
              Image 1 Text
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src={portfolio2} alt="Image 2" />
            <div className="custom-legend">
              Image 2 Text
            </div>
          </div>
        </div>
        {/* Add more images and text here */}
      </Carousel>
    </div>
  );
};

export default OurPortfolio;
