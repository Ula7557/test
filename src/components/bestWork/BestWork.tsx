import './bestWork.scss'
import im3 from '../../assets/images/re1.png'
import im2 from '../../assets/images/re2.png'
import im1 from '../../assets/images/re3.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from 'react'
const BestWork = () => {

    const hasWindow = typeof window !== 'undefined';
  const [widthsize, setWidthsize] = useState<number>();
  const [width, setWidth] = useState<number | null>(hasWindow ? window.innerWidth : null);
  const [state, setState] = useState(false)
  let timeOutId = useRef<any>();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', () => {
      clearTimeout(timeOutId.current);
      timeOutId.current = setTimeout(handleResize, 500);
    });
  }, []);
  
  useEffect(() => {
    if (width !== null && width > 1024) {
      setState(true)
    }  else {
      setState(false)
    }
  }, [width,state])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
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
    <>

        <div className={`portfolio ${state  ? '' : 'none'}`}>
            <div className="best-work">
            <div className="grid item-1">
                <img src={im1} alt="" />
                <div className="item-inner">
                    <h6 className='color-title'>UI Design</h6>
                    <p className='global-description'>Greenfy Website</p>
                </div>
            </div>
            <div className="grid item-2">
                <img src={im2} alt="" />
            </div>
            <div className="grid item-3">
                <img src={im3} alt="" />
            </div>
            <div className="grid item-4">
                <img src={im1} alt="" />
            </div>
            <div className="grid item-5">
                <img src={im2} alt="" />
            </div>
            <div className="grid item-6">
                <img src={im3} alt="" />
            </div>
            <div className="grid item-7">
                <img src={im1} alt="" />
            </div>
            <div className="grid item-8">
                <img src={im2} alt="" />
            </div>
            <div className="grid item-9">
                <img src={im3} alt="" />
            </div>
        </div>
        </div>

        <div className={`portfolio-slide ${state === false ? 'active': ''}`}>
        <Slider {...settings}>
            <div className="grid item-1">
                <img src={im1} alt="" />
                <div className="item-inner">
                    <h6 className='color-title'>UI Design</h6>
                    <p className='global-description'>Greenfy Website</p>
                </div>
            </div>
            <div className="grid item-2">
                <img src={im2} alt="" />
            </div>
            <div className="grid item-3">
                <img src={im3} alt="" />
            </div>
            <div className="grid item-4">
                <img src={im1} alt="" />
            </div>
            <div className="grid item-5">
                <img src={im2} alt="" />
            </div>
            <div className="grid item-6">
                <img src={im3} alt="" />
            </div>
            <div className="grid item-7">
                <img src={im1} alt="" />
            </div>
            <div className="grid item-8">
                <img src={im2} alt="" />
            </div>
            <div className="grid item-9">
                <img src={im3} alt="" />
            </div>
        </Slider>
        </div>
    </>
    )
}

export default BestWork