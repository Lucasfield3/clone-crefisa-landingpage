import { CSSProperties } from 'react';
import './style.scss'

type Props = {
    frase:string;
    style?:CSSProperties;
}

export const ButtonSlide = (props:Props) =>{

     return(
          <button className="button-slide" onTransitionEnd={(e)=> e.stopPropagation()} style={props.style}>
              {props.frase}
          </button>
     )

}