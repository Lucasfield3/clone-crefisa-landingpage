import { useState } from 'react'
import { MdLocationPin } from 'react-icons/md'
import { ButtonSlide } from '../ButtonSlide'
import './style.scss'

export const Adress = () =>{

    const [ toggle, setToggle ] = useState(false)



     return(
          <div className='adress-container'>
            <div className="content">
              <div>
                  <h3>Pontos de Atendimento</h3>
                  <h2>Mais de 1.000 pontos de atendimento para você!</h2>
                  <p>Informe seu CEP ou Endereço e encontraremos os Pontos de Atendimento mais próximos de você.</p>
              </div>
              <div className='adress-info'>
                  <input className={toggle ? 'disapear' : ''} type="text" placeholder="Digite seu CEP" />
                  <div className={`form-adress ${!toggle ? 'disapear' : ''}`}>
                        <div>
                            <select id="UF" name="UF">
                                <option value="">Estado</option>
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </select>
                            <input type='text' placeholder='Cidade'/>
                        </div>
                        <div>
                            <input type='text' placeholder='Endereço'/>
                            <input type='number'  onKeyDown={(e)=>  e.key === 'e' && e.preventDefault() }placeholder='Número'/>
                        </div>
                    </div>
                  <button>LOCALIZAÇÃO ATUAL <MdLocationPin size={18} color='red'/></button>
                  <div className='buttons'>
                      <button onClick={()=> setToggle(!toggle)}>{toggle ? 'OU DIGITE SEU CEP' : 'OU DIGITE SEU ENDEREÇO' }</button>
                      <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='PESQUISAR LOCAIS'/>
                  </div>
              </div>
            </div>
          </div>
     )

}