import { MdLocationPin } from 'react-icons/md'
import { ButtonSlide } from '../ButtonSlide'
import './style.scss'

export const Adress = () =>{

     return(
          <div className='adress-container'>
              <div>
                  <h3>Pontos de Atendimento</h3>
                  <h2>Mais de 1.000 pontos de atendimento para você!</h2>
                  <p>Informe seu CEP ou Endereço e encontraremos os Pontos de Atendimento mais próximos de você.</p>
              </div>
              <div className='adress-info'>
                  <input type="text" placeholder="Digite seu CEP" />
                  <button >LOCALIZAÇÃO ATUAL <MdLocationPin size={18} color='red'/></button>
                  <div>
                      <button>OU DIGITE SEU ENDEREÇO</button>
                      <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='PESQUISAR LOCAIS'/>
                  </div>
              </div>
          </div>
     )

}