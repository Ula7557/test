import './businesCard.scss'
import p1 from '../../assets/images/p1.png'
import p2 from '../../assets/images/p2.png'
import p3 from '../../assets/images/p3.png'
import p4 from '../../assets/images/p4.png'

interface arrayType {
    title: string;
    desc: string;
    img: any;
    }

const BusinesCard = () => {

     const arrCard:arrayType[] = [
        {
            title:'UX Experience',
            desc:'I design products that are more than pretty. I make them  usable',
            img:p1
        },
        {
            title:'UI Design',
            desc:'I design products that are more than pretty. I make them  usable',
            img:p2
        },
        {
            title:'Product Analysis',
            desc:'I design products that are more than pretty. I make them  usable',
            img:p3
        },
        {
            title:'Product Design',
            desc:'I design products that are more than pretty. I make them  usable',
            img:p4
        },
    ]


    return (
       <div className='business-card'>
        {
            arrCard.map((item) => (
                <>
                    <div className="busines-card_inner">
                        <div className="busines-card-img">
                            <img src={item.img} alt="" />
                         </div>
                         <h6 className="busines-card-title">
                            {item.title} 
                        </h6>
                        <p className="busines-card-description">
                            {item.desc}
                        </p>
                     </div>
                </>
            ))
        }
       </div>
    )
}

export default BusinesCard