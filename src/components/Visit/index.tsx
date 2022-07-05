import { useContext, useState } from 'react'
import { MatchContext } from '../../context/Match'
import './style.scss'

export const Visit = () =>{

    const [ toggle, setToggle ] = useState(false)
    const { match } = useContext(MatchContext)

     return(
         <div style={{minHeight:toggle && 'auto', height:toggle && 'auto'}} className='visit-container'>
            <div className={`image ${toggle && 'isOffset'}`}></div>
            <div className={`visit-info ${toggle && 'appear-info'}`}>
                <div className={`wrap-info`}>
                    <h2>Faça seu empréstimo</h2>
                    <h3 className={`${toggle && 'disapear'}`}>Agende uma visita</h3>
                    <p className={`${toggle && 'disapear'}`}>Agende uma visita agora, faça seu empréstimo e tenha dinheiro rápido!</p>
                    <button onClick={()=> setToggle(!toggle)} className={`${toggle && 'disapear'}`}>AGENDAR VISITA</button>
                </div>
                <div className={`form ${toggle && 'appear-form'}`}>
                    <div>
                        <div className='wrap-input'>
                            <input type="text" placeholder="Seu nome" />
                            <span>Seu Nome</span>
                        </div>
                        <div className='wrap-input'>
                            <input type="text" placeholder='Seu telefone'/>
                            <span>Seu Telefone</span>
                        </div>
                    </div>
                    <div className='wrap-input'>
                        <input type="text" placeholder='Seu e-mail'/>
                        <span>Seu e-mail</span>
                    </div>
                    <button>CONTINUAR</button>
                </div>
            </div>
         </div>
     )

}