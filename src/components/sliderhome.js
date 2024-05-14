import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
  autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false,

        },
      },
      {
        breakpoint: 576, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
      <div className='container p-4 mt-3 bg-dark mb-3' >
      <div className='bg-light 'style={{"max-height": '400px'  }}>
        <Slider {...settings}>
        
          <div>
            <img src="/sliderpic1.png"  className=" d-flex justify-content-center " style={{ "width": '100%',"height":"400px" }}  alt="404 not found" />
          </div>
          <div>
            <img src="/sliderpic2.png"  className=" d-flex justify-content-center " style={{ "width": '100%',"height":"400px" }}  alt="404 not found" />
          </div>
          <div>
            <img src="/1.png" className='container mt-3 d-flex justify-content-center' style={{ "width": '50%',"height":"400px" }}  alt="404 not found" />
            
          </div>
          
         
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
