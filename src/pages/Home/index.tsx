
import { useRef } from 'react'
import { Adress } from '../../components/Adress'
import { Apps } from '../../components/Apps'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { HeaderFixed } from '../../components/HeaderFixed'
import { Products } from '../../components/Products'
import { Slider } from '../../components/Slider'
import { SocialMedia } from '../../components/SocialMedia'
import { Visit } from '../../components/Visit'
import { Whatsapp } from '../../components/Whatsapp'
import './style.scss'

export const Home = () =>{
     const toHome = useRef<HTMLDivElement>(null)

     return(
          <div className='home-container'>
               <div ref={toHome}>
                    <Header/>
               </div>
               <HeaderFixed/>
               <Slider/>
               <div className='warning'><p>Atenção! A Crefisa não cobra nenhum tipo de taxa ou antecipação para liberação de crédito.</p></div>
               <Products/>
               <Adress/>
               <Visit/>
               <Apps/>
               <SocialMedia/>
               <Footer toTheTop={()=> toHome.current.scrollIntoView({behavior:'smooth', block:'start' })}/>
               <Whatsapp/>
          </div>
     )

}