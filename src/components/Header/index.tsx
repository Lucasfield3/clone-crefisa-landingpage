import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MatchContext } from '../../context/Match'
import './style.scss'


export const Header = () =>{

    const { match } = useContext(MatchContext)


     return(
          <div  className='header-container'>
              <div>
                  <Link to="#">ATENDIMENTO</Link>
                 {!match && 
                 <>
                    <Link to="#">INSTITUCIONAL</Link>
                    <Link to="#">BLOG</Link>
                 </>}
              </div>
              <div>
                    {!match && <Link to="#">ABRA SUA CONTA</Link>}
                    <Link to="#">FAÇA SEU EMPRÉSTIMO</Link>
              </div>
          </div>
     )

}