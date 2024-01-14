import { articlasArr } from 'assets/images/fakeApi/fakeApi'
import './articlesCard.scss'
import img from '../../assets/images/i1.png'

interface IArticlas {
    data:string,
    title:string,
    desc:string
   }


const ArticlesCard:React.FC<IArticlas> = ({title,desc,data}) => {
    return (
            <div className="articlas-card">
            <img src={img} alt="" />
            <div className="articlas-card-inner">
                <span>{data}</span>
                <h6>{title}</h6>
                <p>{desc}</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

export default ArticlesCard