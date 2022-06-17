import { CSSProperties } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'
import './style.scss'

type Props ={
    color:string;
    onClick:()=>void;
    style:CSSProperties;
}

export const ButtonNext = ({color, onClick, style}:Props) =>{

     return(
          <div style={style} className='arrow-next'>
              <button style={{border:`1px solid ${color}`}} onClick={onClick} className="button-next"><MdKeyboardArrowRight size={30} fontWeight='normal' color={color}/></button>
          </div>
     )

}