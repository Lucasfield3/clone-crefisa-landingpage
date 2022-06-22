import { Link } from 'react-router-dom'
import { MdSearch, MdLockOutline } from 'react-icons/md'
import { HiMenu } from 'react-icons/hi'
import logo from '../../assets/images/Logo.png'
import './style.scss'
import { DropMenu } from '../DropMenu'
import { useContext, useEffect, useState } from 'react'
import { MatchContext } from '../../context/Match'

export const HeaderFixed = () =>{
    const [ isShown, setIsShown ] = useState(false)
    const [ isShown2, setIsShown2 ] = useState(false)
    const [ isShown3, setIsShown3 ] = useState(false)
    const [ isShowingMenu, setIsShowingMenu ] = useState(false)

    const { match } = useContext(MatchContext)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 284){
                setIsShowingMenu(true)
            }else {
                setIsShowingMenu(false)
            }
        })
    }, [])


     return(
          <div className={`header-fixed-container ${isShowingMenu ? 'fix' : ''}`}>
            <div>
                <Link className="custom-img" to='#'><img src={logo} alt='logo' /></Link>
                {!match && 
                <>
                    <div onMouseLeave={()=> setIsShown(false)} className='drop-container'>
                        <Link onMouseEnter={()=>setIsShown(true) }  to='#'>Para Você</Link>
                        <DropMenu isOver={isShown}>
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
                    <div onMouseLeave={()=>setIsShown2(false) } className="drop-container">
                        <Link onMouseEnter={()=>setIsShown2(true) } to='#'>Para sua Empresa</Link>
                        <DropMenu isOver={isShown2}>
                            <li>Antecipação de Recebíveis</li>
                            <li>Crefisa Pay</li>
                        </DropMenu>
                    </div>
                    <Link to='#'>Beneficiários INSS</Link>
                </>
                }
            </div>

            <div>

               {!match && 
                <div>
                    <Link to='#'><MdSearch size={25} style={{color:'#fff !important'}} color='#fff'/> O que procura?</Link>
                </div>}
                <div  onMouseLeave={()=>setIsShown3(false) } className="drop-container">
                    <Link onMouseEnter={()=>setIsShown3(true) } to='#'>Acessar <MdLockOutline size={20} color={isShown3 ? '#38bfe4' : '#fff'}/></Link>
                    <DropMenu transform={!match ? 'translate(-4.9rem, 6rem)' : 'translate(-3.3rem, 8.5rem)'} isOver={isShown3}>
                        <li>Conta Pessoa Jurídica</li>
                        <li>Empréstimo Online</li>
                        <li>Renegocie sua Dívida</li>
                    </DropMenu>
                </div>
                {match && 
                    <div className='icons-match'>
                        <MdSearch size={25} style={{color:'#fff !important'}} color='#fff'/>
                        <HiMenu size={30} style={{color:'#fff !important'}} color='#fff' />
                    </div>
                }
            </div>
          </div>
     )

}