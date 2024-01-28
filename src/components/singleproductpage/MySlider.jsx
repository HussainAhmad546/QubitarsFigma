// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const MySlider = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1
//     };

//     return (
//         <>
//         <div style={{ maxWidth: '600px', margin: '0 auto' , border:'1px solid red', height:'600px'}}>
//         <Slider {...settings}>
//             <div>
//                 <h3>Slide 1</h3>
//             </div>
//             <div>
//                 <h3>Slide 2</h3>
//             </div>
//             <div>
//                 <h3>Slide 3</h3>
//             </div>
//             {/* Add more slides here */}
//         </Slider>
//         </div>
//         </>
//     );
// }


// export default MySlider;

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MySlider = () => {
    const settings = {
        dots: true,
        dotsClass: 'slick-dots-custom', // Add a custom class for styling dots
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show only one slide at a time
        slidesToScroll: 1,
        centerMode: true, // Center the slides
        centerPadding: '25%', // Add padding on the sides for centering
        appendDots: dots => (
            <div>
                <ul style={{ margin: 0 }}>{dots}</ul> {/* Ensure dots are displayed in a list without any margin */}
            </div>
        )
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', border:'1px solid red' }}>
            <Slider {...settings}>
                <div>
                    <h3 style={{ height: '300px', lineHeight: '300px', textAlign: 'center' }}>Slide 1</h3> {/* Adjust the height of the slide */}
                </div>
                <div>
                    <h3 style={{ height: '300px', lineHeight: '300px', textAlign: 'center' }}>Slide 2</h3>
                </div>
                <div>
                    <h3 style={{ height: '300px', lineHeight: '300px', textAlign: 'center' }}>Slide 3</h3>
                </div>
                
                {/* Add more slides here */}
            </Slider>
        </div>
    );
}

export default MySlider;
