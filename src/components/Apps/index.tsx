import { TiVendorAndroid } from 'react-icons/ti'
import { AiFillApple } from 'react-icons/ai'
import './style.scss'

export const Apps = () =>{

     return(
         <div className='apps-container'>
            <div className="text-section">
                <h3>Nossos aplicativos</h3>
                <h2>Experiência completa</h2>
                <p>A Crefisa é completa como você! Baixe nossos aplicativos e conheça todas as oportunidades que temos para você ou sua empresa.</p>
            </div>
            <div className="app-section">
                <div>
                    <a href='#'>Crefisa Empréstimo</a>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2019/07/Icone_APP_Crefisa-Empr%C3%A9stimo-e1563662894763.png" alt="crefisa" />
                    <div>
                        <span><TiVendorAndroid size={24} color='#000'/></span>
                        <span><AiFillApple size={24} color='#000'/></span>
                        <span className='triangle'></span>
                    </div>
                </div>
                <div>
                    <a href='#'>Crefisa Mais</a>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2022/05/11.png" alt="crefisa" />
                    <div>
                        <span><TiVendorAndroid size={24} color='#000'/></span>
                        <span><AiFillApple size={24} color='#000'/></span>
                        <span className='triangle'></span>
                    </div>
                </div>
            </div>
            <div className="image-section">
                <img src="https://www.crefisa.com.br/wp-content/uploads/2019/06/nossos-apps-imagem-direita-1.png" alt="device" />
            </div>
         </div>
     )

}