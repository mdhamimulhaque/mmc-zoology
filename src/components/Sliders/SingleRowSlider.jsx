import React from 'react';
import Slider from "react-slick";
import Img1 from "../../assets/img/c1.jpeg";
import Img2 from "../../assets/img/c2.jpg";
import Img3 from "../../assets/img/c3.jpeg";

const SingleRowSlider = () => {
    const sliderCoverImages=[
        {
            no:1,
            img:Img1,
            caption:"3rd year study tour"
        },
        {
            no:2,
            img:Img2,
            caption:"2rd year study tour"
        },
        {
            no:1,
            img:Img3,
            caption:"2rd year study tour"
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className='w-full lg:p-16'>
        <Slider {...settings}>
         {
            sliderCoverImages.map(sliderImgs=> <div key={sliderImgs.no} className='relative'>
            <img className='w-full object-cover ' src={sliderImgs.img} alt="" />
            <div class="w-full h-full flex  justify-center items-end absolute top-0 left-0
             bg-gray-600/30 backdrop-brightness-30">
                <span class="font-bold lg:text-4xl w-full text-center  text-red-600 bg-gray-200 lg:p-3">{sliderImgs.caption}</span>
        </div>
          </div>)
         }
        </Slider>
      </div>
    );
};

export default SingleRowSlider;