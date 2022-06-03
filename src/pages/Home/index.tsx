
import { Header } from '../../components/Header'
import { HeaderFixed } from '../../components/HeaderFixed'
import { Slider } from '../../components/Slider'
import './style.scss'

export const Home = () =>{

     return(
          <div className='home-container'>
               <Header/>
               <HeaderFixed/>
               <Slider/>
          </div>
     )

}