
import { Adress } from '../../components/Adress'
import { Apps } from '../../components/Apps'
import { Header } from '../../components/Header'
import { HeaderFixed } from '../../components/HeaderFixed'
import { Products } from '../../components/Products'
import { Slider } from '../../components/Slider'
import { SocialMedia } from '../../components/SocialMedia'
import { Visit } from '../../components/Visit'
import { Whatsapp } from '../../components/Whatsapp'
import './style.scss'

export const Home = () =>{

     return(
          <div className='home-container'>
               <Header/>
               <HeaderFixed/>
               <Slider/>
               <div className='warning'><p>Atenção! A Crefisa não cobra nenhum tipo de taxa ou antecipação para liberação de crédito.</p></div>
               <Products/>
               <Adress/>
               <Visit/>
               <Apps/>
               <SocialMedia/>
               <Whatsapp/>
          </div>
     )

}