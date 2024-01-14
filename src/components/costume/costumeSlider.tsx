import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './cosSlider.scss'
import Slider from "react-slick";
import { costumeArr } from "assets/images/fakeApi/fakeApi";
import CostumeCard from "./costumeCard";



const CostumSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.8,
        slidesToScroll: 1,
        autoPlay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2.8,
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
        
        <div className="costumeSlider">
        {
            <Slider {...settings}>
                    {
                        costumeArr.map((item) => (
                            <CostumeCard
                            name={item.name}
                            desc={item.desc}
                            grade={item.grade}
                            />
                        ))
                    }
                </Slider>
        }
        </div>
    )
}

export default CostumSlider;