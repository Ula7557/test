import { Link } from 'react-router-dom'
import './ButtonRgb.scss'
import { useEffect, useRef, useState } from 'react';

interface ButtonInfo {
    url: string;
    title: string;
    
  }

const ButtonRgb:React.FC<ButtonInfo> = ({url,title}) => {
    const [widthBlock, setWidthBlock] = useState()
    const [heightBlock, setHeightBlock] = useState()
    const divBlock:any = useRef(null);
    const hasWindow = typeof window !== 'undefined';
  const [widthsize, setWidthsize] = useState<number>();
  const [width, setWidth] = useState<number | null>(hasWindow ? window.innerWidth : null);
  const [state, setState] = useState(false)
  let timeOutId = useRef<any>();


    useEffect(() => {
            setWidthBlock(divBlock.current.clientWidth)
            setHeightBlock(divBlock.current.clientHeight)
    },[widthBlock, heightBlock, width,state])

    //////



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

  useEffect(() => {

  },[widthBlock, heightBlock])


    /////

    return (
       <div className='button-block'>
        <Link to={url} className='button' ref={divBlock}>
            <span>{title}</span>
        </Link>
            {
                widthBlock && heightBlock && <div className='button-shodow' style={{width:widthBlock, height:heightBlock}}/>
            }
        </div>
    )
}

export default ButtonRgb