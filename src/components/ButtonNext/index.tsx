import { MdKeyboardArrowRight } from 'react-icons/md'
import './style.scss'

type Props ={
    top:string;
    color:string;
    onClick:()=>void;
    width:string;
}

export const ButtonNext = ({color, onClick, top, width}:Props) =>{

     return(
          <div style={{top:top, width:width}} className='arrow-next'>
              <button style={{border:`1px solid ${color}`}} onClick={onClick} className="button-next"><MdKeyboardArrowRight size={30} fontWeight='normal' color={color}/></button>
          </div>
     )

}