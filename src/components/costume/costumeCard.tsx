import './costimeCard.scss'
import el from '../../assets/images/ell1.svg'
import quo from '../../assets/images/qu.svg'
import star from '../../assets/images/star.svg'

interface ICostume {
    name:string,
    desc:string
    grade:string
}

const CostumeCard:React.FC<ICostume> = ({name,desc,grade}) => {
    return (
        <div className="costume-card">
            <img className='kavichka' src={quo} alt="" />
            <p>{desc}salom</p>
            <div className="inner">
                <div>
                    <img src={el} alt="" />
                    <div>{name}</div>
                </div>
                <div>
                    <img src={star} alt="" />
                    <div>{grade}</div>
                </div>
            </div>
        </div>
    )
}

export default CostumeCard