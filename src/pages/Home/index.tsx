
import { Header } from '../../components/Header'
import { HeaderFixed } from '../../components/HeaderFixed'
import { Products } from '../../components/Products'
import { Slider } from '../../components/Slider'
import './style.scss'

export const Home = () =>{

     return(
          <div className='home-container'>
               <Header/>
               <HeaderFixed/>
               <Slider/>
               <div className='warning'><p>Atenção! A Crefisa não cobra nenhum tipo de taxa ou antecipação para liberação de crédito.</p></div>
               <Products/>
          </div>
     )

}