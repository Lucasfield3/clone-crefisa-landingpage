import { useEffect, useState } from 'react'
import { ButtonNext } from '../ButtonNext'

import { ButtonSlide } from '../ButtonSlide'
import './style.scss'

export const Products = () =>{

  const [ addTranslate, setAddTranslate ] = useState(false)
  const slider = document.querySelector<HTMLElement>('#slider')
  const carousel = document.querySelector<HTMLElement>('#carousel')
  const product = document.querySelectorAll<HTMLElement>('.product')

  const handleCarousel = ()=>{

    if(slider){
      const style = getComputedStyle(product[0])
 
      carousel!.style.justifyContent = 'flex-start';
      slider.style.transform = `translate(-${style.flexBasis})`
      
    }
    
  }


  useEffect(()=>{
    handleCarousel()
  }, [addTranslate])

     return(
          <div className='produts-container'>
              <header>
                  <p>Nossos produtos</p>
                  <h1>Produtos para você e sua empresa</h1>
              </header>
 
              <div id="carousel" className='carousel'>
                <div onTransitionEnd={()=>{
                  if(slider){
                    slider.appendChild(slider.firstElementChild!);

                    slider.style.transition = 'none';
                    slider.style.transform = 'translate(0)';
                    setTimeout(() => {
                      slider.style.transition = 'all 0.5s';
                    })
                  }
                }} id="slider"  className='slider'>
                  <div className='product'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2019/05/crédito-pessoal-min-2-380x380.jpg" alt="image" />
                    <h3>Empréstimo Pessoal</h3>
                    <p><strong>Faça seu empréstimo</strong> e receba no mesmo dia! Dinheiro rápido, mesmo se estiver negativado. </p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='FAÇA SEU EMPRÉSTIMO'/>
                  </div>
                  <div className='product'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2020/10/660_x_560px_Pag-Consignado-380x380.jpg" alt="image" />
                    <h3>Empréstimo Consignado</h3>
                    <p>Faça seu Empréstimo Consignado na Crefisa. Dinheiro rápido, melhores taxas e até 84x para pagar.</p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='CONTRATE AGORA'/>
                  </div>
                  <div className='product'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2021/03/660_x_500_px_Renegocia%C3%A7%C3%A3o-de-D%C3%ADvidas-380x380.png" alt="image" />
                    <h3>Antecipe seu Benefício</h3>
                    <p>Antecipe seu Benefício do INSS. Você não precisa esperar pelo pagamento, aqui você em Dinheiro agora!</p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}}frase='CONTRATE AGORA'/>
                  </div>
                  <div className='product'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2019/05/conta-corrente-min-1-380x380.jpg" alt="image" />
                    <h3>Abra sua Conta-Corrente</h3>
                    <p>A Crefisa tem a solução ideal para você que está buscando abrir uma <strong>Conta Corrente</strong> de forma rápida e sem burocracia.</p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='ABRA SUA CONTA'/>
                  </div>
                  <div className='product'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2020/09/1040_x_700px_Banner-Cartões-380x380.png" alt="image" />
                    <h3>Solicite seu Cartão Crefisa</h3>
                    <p>Solicite o seu cartão <strong>Pré-Pago</strong> Crefisa e tenha muito mais agilidade e segurança nas transações financeiras.  </p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='PEÇA SEU CARTÃO'/>
                  </div>
                  <div className='product'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2019/05/Img-Prod-1-380x380.jpg" alt="image" />
                    <h3>Câmbio Crefisa, solicite o seu!</h3>
                    <p>Envie e receba Dinheiro do exterior com o <strong>Crefisa Câmbio</strong> . Conheça nossas soluções. </p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}}frase='FAÇA UMA SIMULAÇÃO'/>
                  </div>
                  <div className='product'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2020/07/1040_x_700_px_Renegociação-de-Dívidas-380x380.png" alt="image" />
                    <h3>Renegociação de Dívidas</h3>
                    <p><strong>Renegocie sua dívida </strong>com a Crefisa e volte a ter dinheiro na mão. Aproveite as condições!</p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='RENEGOCIAR MINHA DÍVIDA'/>
                  </div>
                 
                </div>
              </div>
              <ButtonNext style={{top:'62%', width:'90%'}} color="#cfcfcf" onClick={()=> setAddTranslate(!addTranslate)}/>
          </div>
     )

}