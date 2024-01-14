import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss'

import img1 from '../../assets/images/svg1.svg'
import img2 from '../../assets/images/svg2.svg'
import img3 from '../../assets/images/svg3.svg'
import img4 from '../../assets/images/svg4.svg'
import img5 from '../../assets/images/svg5.svg'



const MiniCarousel = () => {


    const [windowWidh, setWindowWidth] = useState(false)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay:true
    };

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    return (
        
        <>
        <h6 className='slider-title'>Trusted By</h6>
        {
            windowWidh ? (
                <Slider {...settings}>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img4} alt="" />
                </div>
                <div>
                    <img src={img5} alt="" />
                </div>
        </Slider>
               ) : (
                <div className="images-block">
                     <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img4} alt="" />
                </div>
                <div>
                    <img src={img5} alt="" />
                </div>
                </div>
               )
        }
        </>
    )
}

export default MiniCarousel;