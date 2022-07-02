import { Link } from 'react-router-dom'
import { MdSearch, MdLockOutline, MdClose } from 'react-icons/md'
import { HiMenu } from 'react-icons/hi'
import logo from '../../assets/images/Logo.png'
import './style.scss'
import { DropMenu } from '../DropMenu'
import { useEffect, useState } from 'react'
import { SideMenu } from '../SideMenu'

export const HeaderFixed = () =>{
    const [ isShowingDropMenu, setIsShowingDropMenu ] = useState(false)
    const [ isShowingDropMenu2, setIsShowingDropMenu2 ] = useState(false)
    const [ isShowingDropMenu3, setIsShowingDropMenu3 ] = useState(false)
    const [ isShowingMenu, setIsShowingMenu ] = useState(false)
    const [ isShowingSearchBar, setIsShowingSearchBar ] = useState(false)
    const [ isShowingSideMenu, setIsShowingSideMenu ] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 284){
                setIsShowingMenu(true)
            }else {
                setIsShowingMenu(false)
            }
        })
    }, [])

    useEffect(()=>{
        if(document.readyState === 'complete'){
            document.body.style.overflowY = (isShowingSearchBar || isShowingSideMenu) ? 'hidden' : 'auto';
        }
    }, [isShowingSearchBar, isShowingSideMenu])


     return(
        <>
          <div className={`header-fixed-container ${isShowingMenu ? 'fix' : ''}`}>
            <div className="content">
                <div>
                    <Link className="custom-img" to='#'><img src={logo} alt='logo' /></Link>
                
                
                        <div onMouseLeave={()=> setIsShowingDropMenu(false)} className={`drop-container disappear ${isShowingSearchBar ? 'disapear' : ''}`}>
                            <Link onMouseEnter={()=>setIsShowingDropMenu(true) }  to='#'>Para Você</Link>
                            <DropMenu transform='translate(0rem, 5.9rem)' isOver={isShowingDropMenu}>
                                <li>Empréstimo Pessoal</li>
                                <li>Empréstimo Consignado</li>
                                <li>Antecipação de Benefício</li>
                                <li>Conta Corrente</li>
                                <li>Cartão Pré-Pago</li>
                                <li>Benefício do INSS</li>
                                <li>Renegociação de Dívidas</li>
                                <li>Câmbio Crefisa</li>
                                <li>Pix</li>
                                <li>Whatsapp Crefisa</li>
                            </DropMenu>
                        </div>
                        <div onMouseLeave={()=>setIsShowingDropMenu2(false) } className={`drop-container disappear ${isShowingSearchBar ? 'disapear' : ''}`}>
                            <Link onMouseEnter={()=>setIsShowingDropMenu2(true) } to='#'>Para sua Empresa</Link>
                            <DropMenu transform='translate(0rem, 5.9rem)' isOver={isShowingDropMenu2}>
                                <li>Antecipação de Recebíveis</li>
                                <li>Crefisa Pay</li>
                            </DropMenu>
                        </div>
                        <Link style={{animation:'fading 0.3s'}} className={`disappear ${isShowingSearchBar ? 'disapear' : ''}`} to='#'>Beneficiários INSS</Link>
                </div>

                <div>
                    <div style={{animation:'fading 0.3s'}} className={`disappear ${isShowingSearchBar ? 'disapear' : ''}`}>
                        <Link onClick={()=> setIsShowingSearchBar(!isShowingSearchBar)} to='#'><MdSearch size={25} style={{color:'#fff !important'}} color='#fff'/> O que procura?</Link>
                    </div>
                    <div id="last-drop-menu" onMouseLeave={()=>setIsShowingDropMenu3(false) } className={`drop-container ${isShowingSearchBar ? 'disapear' : ''}`}>
                        <Link onMouseEnter={()=>setIsShowingDropMenu3(true) } to='#'>Acessar <MdLockOutline size={20} color={isShowingDropMenu3 ? '#38bfe4' : '#fff'}/></Link>
                        <DropMenu transform={'translate(-4.9rem, 5.9rem)'} isOver={isShowingDropMenu3}>
                            <li>Conta Pessoa Jurídica</li>
                            <li>Empréstimo Online</li>
                            <li>Renegocie sua Dívida</li>
                        </DropMenu>
                    </div>
                    <div className={`icons-match ${isShowingSearchBar ? 'disapear' : ''}`}>
                        <MdSearch onClick={()=> setIsShowingSearchBar(!isShowingSearchBar)} size={25} style={{color:'#fff !important', cursor:'pointer'}} color='#fff'/>
                        <HiMenu onClick={()=> setIsShowingSideMenu(!isShowingSideMenu)} size={30} style={{color:'#fff !important'}} color='#fff' />
                    </div>
                    <div onClick={()=> setIsShowingSearchBar(!isShowingSearchBar)} className={`icon-close ${!isShowingSearchBar ? 'disapear' : ''}`}>
                        <p>Fechar</p>
                        <MdClose color='#fff' size={25}/>
                    </div>
                </div>
            </div>
                <div style={{top:isShowingMenu ? '6rem' : ''}} className={`search-bar ${isShowingMenu ? 'fix' : ''} ${!isShowingSearchBar ? 'disapear' : ''}`}>
                    <div>
                        <h1>O que procura?</h1>
                        <span>
                            <MdSearch size={25} style={{color:'#fff !important'}} color='#fff'/>
                        </span>
                    </div>
                    <input name='search' autoComplete="off" type="text" autoFocus/>
                </div>
                <div className={`overlay ${(isShowingMenu) ? 'fix' : ''} ${(isShowingSearchBar || isShowingSideMenu) ? '' : 'disapear'}`}>
                </div>
            </div>
            <SideMenu
            isShowingMenu={isShowingMenu}
            isShowingSideMenu={isShowingSideMenu}
            onClickSideMenu={()=> setIsShowingSideMenu(!isShowingSideMenu)}
            />
        </>
     )

}