import { useState } from 'react'
import { MdClose, MdKeyboardArrowRight, MdSearch } from 'react-icons/md'
import { ButtonSlide } from '../ButtonSlide'
import './style.scss'

export const SideMenu = () =>{
    const [ isShowingSideMenu, setIsShowingSideMenu ] = useState(false)

     return(
         <div className='side-menu-container'>
            <header>
                <h3>Menu</h3>
                <div onClick={()=> setIsShowingSideMenu(!isShowingSideMenu)} className={`icon-close ${!isShowingSideMenu ? 'disapear' : ''}`}>
                    <p>Fechar</p>
                    <MdClose color='#fff' size={25}/>
                </div>
            </header>

            <div>
                <div>
                    <input type="text" placeholder='Busque por um produto...' />
                    <MdSearch size={25} color='#fff'/>
                </div>
                <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='FAZER MEU EMPRÉSTIMO'/>
            </div>
            <ul>
                <li>
                    <p>Para você</p>
                    <MdKeyboardArrowRight size={30} fontWeight='normal'/>
                </li>
                <li>
                    <p>Para sua empresa</p>
                    <MdKeyboardArrowRight size={30} fontWeight='normal'/>
                </li>
                <li>Beneficiários INSS</li>
                <li>Institucional</li>
                <li>Atendimento</li>
                <li>Agende uma visita</li>
                <li>Blog</li>
                <li>Crefisa Shop</li>
            </ul>
         </div>
     )

}