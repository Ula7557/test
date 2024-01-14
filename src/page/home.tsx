import ButtonRgb from '../components/btnColor/ButtonRgb';
import './home.scss'
import imgs from '../assets/images/img1.png'
import MiniCarousel from 'components/miniCarousel/MiniCarousel';
import BusinesCard from 'components/busines-card/BusinesCard';
import { articlasArr, projectNum } from 'assets/images/fakeApi/fakeApi';
import BestWork from 'components/bestWork/BestWork';
import ArticlesCard from 'components/articles-card/articlesCard';
import CostumSlider from 'components/costume/costumeSlider';
import ControlledAccordions from 'components/accordion/Accordion';
import bg from '../assets/images/BG.svg'
import arrow from '../assets/images/arrow.svg'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import me1 from '../assets/images/me1.svg'
import me2 from '../assets/images/me2.svg'
import me3 from '../assets/images/me3.svg'
import me4 from '../assets/images/me4.svg'
import me5 from '../assets/images/me5.svg'


    
    const Home = () => {
   return (
    <main className="home">
        <section className='miami-walker container'>
            <div className="miami-walker_inner">
                <h2 className='rgb-title'>Miami</h2>
                <h2 className='black-title'>walke <span>r</span></h2>
                <p className='global-mini-desc'>
                    Award Wining product designer based in Georgia. We
                    create user-friendly interfaces for fast-growing startups.
                </p>
                <div className="btn_book">
                <ButtonRgb
                    title='Book A Call'
                    url=''
                />
                </div>
            </div>
            <div className="miami-walker_inner">
             <img src={imgs} alt="" />
            </div>
        </section>
        <section className='container'>
            <MiniCarousel/>
        </section>
        <section className='business container'>
            <div className="business-inner">
                <h6 className='color-title'>
                FEATURES
                </h6>
                <h4 className="global-description">
                    Giving Your Business
                    Some Great Ideas
                </h4>
                <p className='global-mini-desc'>
                    Every designer needs the right tools to do the perfect job.
                    Thankfully, we can do that. I design products that are more
                    than pretty. I make them shippable and usable.
                </p>
                <div className="btn_book">
                <ButtonRgb
                    title='Contact US'
                    url=''
                />
                </div>
            </div>
            <div className="business-inner">
                <BusinesCard/>
            </div>
        </section>
        <section className="project-num container">
            {
                projectNum.map((item) => (
                    <div className="project-num-block">
                        <h6>{item.num}</h6>
                         <p>{item.desc}</p>
                    </div>
                ))
            }
        </section>
        <section className="best-work container">
            <div className="best-work-head">
            <div>
                <h6 className='color-title'>
                    Portfolio
                </h6>
                <h4 className="global-description">
                    Some Of Our Best Works 
                </h4>
            </div>
            <div>
                <ButtonRgb
                    title='Load More'
                    url=''
                />
            </div>
            </div>
            <BestWork/>
        </section>
        <section className="black-articles">
        <div className="black-articles-inner container">
        <div className="black-articles-top">
            <div>
                <h6 className='color-title'>
                LATEST BLOG
                </h6>
                <h4 className="global-description">
                    Check Some of Latest
                    News & Articles 
                </h4>
            </div>
            <div>
                <ButtonRgb
                    title='Load More'
                    url=''
                />
            </div>
            </div>
            <div className="articlas-block">
                {
                    articlasArr.map((item) => (
                        <ArticlesCard
                        title={item.title}
                        desc={item.desc}
                        data={item.data}
                        />
                    ))
                }
            </div>
        </div>
        </section>
        <section className='customer'>
            <div className="customer_inner container">
            <h6 className='color-title'>
            Testimonials
            </h6>
            <h4 className="global-description">
            What our customer say 
            </h4>
            </div>
        <CostumSlider/>
        </section>
        <section className="accardion">
            <div className="accardion-inner container">
                <div className='accordion-inner-block'>
                    <ControlledAccordions/>
                </div>
                <div className='accordion-inner-block'>
                <h6 className='color-title'>
                  FAQs
                </h6>
            <h4 className="global-description">
                Be Kind to Your Mind
                Question & Answer 
            </h4>
            <p className='global-mini-desc'>
                All Your Qustions are in A document, in question and answer format, that introduces newcomers to a topic or answers common questions.
            </p>
                </div>
            </div>
        </section>
        <section className='project-mind container'>
            <h6 className='color-title'>
            Have you project in mind?
            </h6>
            <h4 className="global-description">
            Let’s Make Something
            Great Together! 
            </h4>
            <div>
            <Link to='/contact' className="contact-icon">
                    <img src={bg} alt="" />
                    <p>CONTACT WITH US</p>
                    <img className='arrow' src={arrow} alt="" />
            </Link>
            </div>
            <div className="logo">
            <img className='logotip' src={logo} alt="" />
            </div>
            <div className="messanger">
                <img src={me1} alt="" />
                <img src={me2} alt="" />
                <img src={me3} alt="" />
                <img src={me4} alt="" />
                <img src={me5} alt="" />
            </div>
        </section>
    </main>
   )
}

export default Home;