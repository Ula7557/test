import { Link } from 'react-router-dom'
import './header.scss'
import ButtonRgb from '../../components/btnColor/ButtonRgb'
import logo from '../../assets/images/logo.svg'
import burger from '../../assets/images/burger.svg'
import { useEffect, useRef, useState } from 'react'


const Header = () => {

    
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

  
    return (
       <>
        <div className={`header ${state ? '' : 'none'}`}>
            <div className="header-inner container">
                <Link to='/'><img src={logo} alt="" /></Link>
                <div className="header-inner_right">
                    <Link className='header-link' to='/About'>About</Link>
                    <Link className='header-link' to='/Service'>Service</Link>
                    <Link className='header-link' to='/Blogs'>Blogs</Link>
                    <Link className='header-link' to='/FAQ'>FAQ</Link>
                    <ButtonRgb
                    title='contanct'
                    url='contact'
                    />
                </div>
            </div>
        </div>
        <div className={`mobile-header ${state === false ? 'active' : ''}`}>
            <Link to='/'><img src={logo} alt="" /></Link>
            <button className='burger'>
                <img src={burger} alt="" />
            </button>
            <div className={`modal ${state ? 'active' : ''}`}>
            <Link className='header-link' to='/About'>About</Link>
                    <Link className='header-link' to='/Service'>Service</Link>
                    <Link className='header-link' to='/Blogs'>Blogs</Link>
                    <Link className='header-link' to='/FAQ'>FAQ</Link>
            </div>
        </div>
       </>
    )
}

export default Header