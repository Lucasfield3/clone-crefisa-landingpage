import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import logo from '../../assets/images/whatsapp.svg'
import './style.scss'
import { IoClose } from "react-icons/io5";

export const Whatsapp = () =>{

    const [ toggle, setToggle ] = useState(false)

     return(
        <>
         <div onClick={()=> setToggle(!toggle)} className={`whatsapp ${toggle ? 'disapear' : ''}`}>
            <img src={logo} alt="whatsapp" />
            <p>Contrate pelo Whatsapp</p>
         </div>
       
         <div className={`form-whatsapp ${!toggle ? 'disapear' : ''}`}>
            <header>PREENCHA O FORMULÁRIO E CONTRATE O SEU EMPRÉSTIMO.</header>
            <div>
                <input type="text" placeholder='Nome' />
                <input type="text" placeholder='CPF' />
                <input type="text" placeholder='Telefone' />
                <input type="text" placeholder='Email'/>
                <select name="" id="">
                    <option value="">Perfil</option>
                    <option value="Aposentado">Aposentado</option>
                    <option value="Pensionista">Pensionista</option>
                    <option value="Servidor Público">Servidor Público</option>
                    <option value="Militar">Militar</option>
                    <option value="Outros">Outros</option>
                </select>
                <button>CONTINUAR</button>
            </div>
         </div>
         <button onClick={()=> setToggle(!toggle)} className={`close-button ${!toggle ? 'disapear' : ''}`}>
            <IoClose strokeWidth={25} size={75} color='#fff'/>
         </button>
        </>
     )

}