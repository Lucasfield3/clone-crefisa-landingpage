import { CSSProperties, ReactNode } from 'react'
import './style.scss'

type Props =  {
    children:ReactNode;
    isOver:boolean;
    transform?:string;
}

export const DropMenu = ( props:Props) =>{


     return(
          <div style={{
              zIndex:props.isOver ? '999': '-1',
              opacity: props.isOver ? 1 : 0,
              transform:props.transform,
              }} className='drop-menu'>
              <ul>
                  {props.children}
              </ul>
          </div>
     )

}