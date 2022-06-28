import { Link } from 'react-router-dom'
import './style.scss'


export const Header = () =>{

     return(
          <div  className='header-container'>
              <div>
                <Link to="#">ATENDIMENTO</Link>
                <Link className="disappear" to="#">INSTITUCIONAL</Link>
                <Link className="disappear" to="#">BLOG</Link>
              </div>
              <div>
                <Link className="disappear" to="#">ABRA SUA CONTA</Link>
                <Link to="#">FAÇA SEU EMPRÉSTIMO</Link>
              </div>
          </div>
     )

}