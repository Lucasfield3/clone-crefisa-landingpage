import { CSSProperties, ReactNode } from 'react'
import './style.scss'

type Props =  {
    children:ReactNode;
    isOver:boolean;
}

export const DropMenu = ( props:Props) =>{


     return(
          <div style={{
              zIndex:props.isOver ? '999': '-1',
              opacity: props.isOver ? 1 : 0
              }} className='drop-menu'>
              <ul>
                  {props.children}
              </ul>
          </div>
     )

}