import { useContext, useEffect, useState } from 'react'
import { MatchContext } from '../../context/Match'
import { ButtonNext } from '../ButtonNext'

import { ButtonSlide } from '../ButtonSlide'
import './style.scss'

export const Products = () =>{

  const { match } = useContext(MatchContext)

  const [ addTranslate, setAddTranslate ] = useState(false)
  const [ nextProduct ,setNextProduct ] = useState(1)
  const slider = document.querySelector<HTMLElement>('#slider')
  const carousel = document.querySelector<HTMLElement>('#carousel')
  const product = document.querySelectorAll<HTMLElement>('.product')
  const slidesButtons = document.getElementsByClassName("slide-button-products") as HTMLCollectionOf<HTMLLIElement>

  const slidesButtonsArray = [1,2,3,4,5,6,7]

  const handleCarousel = ()=>{

    if(slider){
      const style = getComputedStyle(product[0])
 
      carousel!.style.justifyContent = 'flex-start';
      slider.style.transform = `translate(-${style.flexBasis})`
      
    }
    
  }

  const handleSlide = (id:string)=>{
    if(slider){
      slider.style.transform = `translate(${(Number(id) - 1) * -75}%)` 
    }
  }

  const handleBorder = (id:string)=>{
    if(slidesButtons){
      for(const [, value] of Array.from(slidesButtons).entries()){
        console.log(value);
        
          if(value.id === id){
            value.style.border = '1px solid #23b9e2'
          }else{
            value.style.border = '0px solid #fff' 
          }
          
      }
    }
  }

  useEffect(()=>{
    if(slider){
      if(!match){
        slider.style.transform = `translate(0)`
      }else{
        slider.style.transform = `translate(- 75%)`
      }
    }
  }, [match])

  useEffect(()=>{
    handleSlide(String(nextProduct))
    handleBorder(String(nextProduct))
  }, [nextProduct])

  useEffect(()=> {
    handleSlide(String(nextProduct))
    handleBorder(String(nextProduct))
  }, [])


  useEffect(()=>{
    handleCarousel()
  }, [addTranslate])


     return(
          <div className='produts-container'>
              <header>
                  <p>Nossos produtos</p>
                  <h1>Produtos para voc?? e sua empresa</h1>
              </header>
 
              <div id="carousel" className='carousel'>
                <div onTransitionEnd={()=>{
                  if(!match){
                   console.log('oi');
                   
                    
                    if(slider){
                      
                      slider.appendChild(slider.firstElementChild!);
                      slider.style.transition = 'none';
                      slider.style.transform = 'translate(0)';
                      setTimeout(() => {
                        slider.style.transition = 'all 0.5s';
                      })
                    }
                  }
                }} id="slider"  className='slider'>
                  <div  className='product'>
                    <div className='reverse-order'>
                      <img src="https://www.crefisa.com.br/wp-content/uploads/2019/05/cr??dito-pessoal-min-2-380x380.jpg" alt="image" />
                      <h3>Empr??stimo Pessoal</h3>
                    </div>
                    <p><strong>Fa??a seu empr??stimo</strong> e receba no mesmo dia! Dinheiro r??pido, mesmo se estiver negativado. </p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='FA??A SEU EMPR??STIMO'/>
                  </div>
                  <div  className='product'>
                    <div className='reverse-order'>
                      <img src="https://www.crefisa.com.br/wp-content/uploads/2020/10/660_x_560px_Pag-Consignado-380x380.jpg" alt="image" />
                      <h3>Empr??stimo Consignado</h3>
                    </div>
                    <p>Fa??a seu Empr??stimo Consignado na Crefisa. Dinheiro r??pido, melhores taxas e at?? 84x para pagar.</p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='CONTRATE AGORA'/>
                  </div>
                  <div  className='product'>
                    <div className='reverse-order'>
                      <img src="https://www.crefisa.com.br/wp-content/uploads/2021/03/660_x_500_px_Renegocia%C3%A7%C3%A3o-de-D%C3%ADvidas-380x380.png" alt="image" />
                      <h3>Antecipe seu Benef??cio</h3>

                    </div>
                    <p>Antecipe seu Benef??cio do INSS. Voc?? n??o precisa esperar pelo pagamento, aqui voc?? em Dinheiro agora!</p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}}frase='CONTRATE AGORA'/>
                  </div>
                  <div  className='product'>
                    <div className='reverse-order'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2019/05/conta-corrente-min-1-380x380.jpg" alt="image" />
                    <h3>Abra sua Conta-Corrente</h3>
                    </div>
                    <p>A Crefisa tem a solu????o ideal para voc?? que est?? buscando abrir uma <strong>Conta Corrente</strong> de forma r??pida e sem burocracia.</p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='ABRA SUA CONTA'/>
                  </div>
                  <div  className='product'>
                    <div className='reverse-order'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2020/09/1040_x_700px_Banner-Cart??es-380x380.png" alt="image" />
                    <h3>Solicite seu Cart??o Crefisa</h3>
                    </div>
                    <p>Solicite o seu cart??o <strong>Pr??-Pago</strong> Crefisa e tenha muito mais agilidade e seguran??a nas transa????es financeiras.  </p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='PE??A SEU CART??O'/>
                  </div>
                  <div  className='product'>
                    <div className='reverse-order'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2019/05/Img-Prod-1-380x380.jpg" alt="image" />
                    <h3>C??mbio Crefisa, solicite o seu!</h3>
                    </div>
                    <p>Envie e receba Dinheiro do exterior com o <strong>Crefisa C??mbio</strong> . Conhe??a nossas solu????es. </p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}}frase='FA??A UMA SIMULA????O'/>
                  </div>
                  <div  className='product'>
                    <div className='reverse-order'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2020/07/1040_x_700_px_Renegocia????o-de-D??vidas-380x380.png" alt="image" />
                    <h3>Renegocia????o de D??vidas</h3>
                    </div>
                    <p><strong>Renegocie sua d??vida </strong>com a Crefisa e volte a ter dinheiro na m??o. Aproveite as condi????es!</p>
                    <ButtonSlide style={{background:'#fdb913', color:'#fff', height: '4.8rem', padding: '0 2.8rem'}} frase='RENEGOCIAR MINHA D??VIDA'/>
                  </div>
                 
                </div>
              </div>
              <ButtonNext style={{top:'62%', width:'90%'}} color="#cfcfcf" onClick={()=> setAddTranslate(!addTranslate)}/>
              <div id="container-slide" className="container-slide-buttons-product">
                    {slidesButtonsArray.map((index)=>{
                        return (
                            <div key={index}  className="slide-button-products" id={String(index)} onClick={()=>setNextProduct(index)} tabIndex={1}>
                                <span></span>
                            </div>
                        )
                    })}
                </div>
          </div>
     )

}