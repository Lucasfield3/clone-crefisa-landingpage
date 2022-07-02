import { useEffect, useState } from 'react'
import { MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight , MdSearch } from 'react-icons/md'
import { ButtonSlide } from '../ButtonSlide'
import './style.scss'


type Props = {
    onClickSideMenu: () => void;
    isShowingSideMenu:boolean;
    isShowingMenu:boolean;
}

export const SideMenu = ({
    onClickSideMenu,
    isShowingSideMenu,
    isShowingMenu 
}:Props) =>{


    const [ isShowingSideSideMenu, setIsShowingSideSideMenu ] = useState(false)
    const [ isShowingSideSideMenu2, setIsShowingSideSideMenu2 ] = useState(false)
    const sideMenu = document.querySelector<HTMLElement>('.side-menu-container')
    useEffect(() =>{
        if(sideMenu){
            if(!isShowingSideSideMenu){
                sideMenu.scroll(0, 0);
            }
        }
    }, [isShowingSideSideMenu])

     return(
         <div 
         className={`side-menu-container ${isShowingSideMenu ? 'show' : ''} ${(isShowingMenu) ? 'fix' : ''}`}
         style={{overflowY:isShowingSideSideMenu ? 'auto' : 'hidden'}}
         
         >
            <header>
                <h3>Menu</h3>
                <div onClick={onClickSideMenu} className='icon-close'>
                    <p>Fechar</p>
                    <MdClose fontSize={20} color='#fff' size={24}/>
                </div>
            </header>

            <div className='main'>

                <div>
                    <div className='search-bar-side-menu'>
                        <input type="text" placeholder='Busque por um produto...' />
                        <MdSearch size={25} color={'#8f8f8f'}/>
                    </div>
                    <ButtonSlide style={{
                        background:'#fdb913', 
                        color:'#fff', 
                        height:'3.8rem', 
                        padding: '0 2.8rem',
                        letterSpacing:'0.2px',
                        width:'100%'
                        }} 
                        frase='FAZER MEU EMPRÉSTIMO'
                        />
                </div>

                <ul>
                    <li onClick={()=> setIsShowingSideSideMenu(!isShowingSideSideMenu)}>
                        <a>Para você</a>
                        <MdKeyboardArrowRight color='#aaaaaa' size={18} fontWeight='normal'/>
                    </li>
                    <li onClick={()=> setIsShowingSideSideMenu2(!isShowingSideSideMenu2)}>
                        <a>Para sua empresa</a>
                        <MdKeyboardArrowRight color='#aaaaaa' onClick={()=> setIsShowingSideSideMenu2(!isShowingSideSideMenu2)} size={18} fontWeight='normal'/>
                    </li>
                    <li><a>Beneficiários INSS</a></li>
                    <li><a>Institucional</a></li>
                    <li><a>Atendimento</a></li>
                    <li><a>Agende uma visita</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Crefisa Shop</a></li>
                </ul>

                <div className={`side-side-menu ${isShowingSideSideMenu ? 'show-side-side' : ''}`}>
                    <div>
                        <MdKeyboardArrowLeft  color={'#aaaaaa'} size={18} fontWeight='normal'/>
                        <p onClick={()=> setIsShowingSideSideMenu(!isShowingSideSideMenu)}>Voltar</p>
                    </div>
                    <ul>
                        <li><a>Empréstimo Pessoal</a></li>
                        <li><a>Empréstimo Consignado</a></li>
                        <li><a>Antecipação de Benefício</a></li>
                        <li><a>Agente Crefisa</a></li>
                        <li><a>Conta-Corrente</a></li>
                        <li><a>Cartão Pré-Pago</a></li>
                        <li><a>Benefício do INSS</a></li>
                        <li><a>Renegociação de Dívidas</a></li>
                        <li><a>Câmbio Crefisa</a></li>
                        <li><a>Pix</a></li>
                        <li><a>Whatsapp Crefisa</a></li>
                    </ul>
                </div>
                <div className={`side-side-menu ${isShowingSideSideMenu2 ? 'show-side-side' : ''}`}>
                    <div>
                        <MdKeyboardArrowLeft  color={'#aaaaaa'} size={18} fontWeight='normal'/>
                        <p onClick={()=> setIsShowingSideSideMenu2(!isShowingSideSideMenu2)}>Voltar</p>
                    </div>
                    <ul>
                        <li><a>Antecipação de Recebíveis</a></li>
                        <li><a>CrefisaPay</a></li>
                    </ul>
                </div>
            </div>
         </div>
     )

}