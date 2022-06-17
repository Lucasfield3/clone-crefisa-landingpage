import {  useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { ButtonNext } from '../ButtonNext'
import { ButtonSlide } from '../ButtonSlide'
import './style.scss'

export const Slider = () =>{

    const [ nextButton, setNextButton ] = useState(1)
    const [isLoaded, setIsLoaded] = useState(false)

    const slidesButtonsArray = [1,2,3,4,5]

    const [ isOnInterval, setIsOnInterval] = useState(true)
    
    const sliders = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLLIElement>

    const slidesButtons = document.getElementsByClassName("slide-button") as HTMLCollectionOf<HTMLLIElement>

    const handleSlider = (id:number) => {
        for(let i = 0; i < sliders.length; i++){

           if(sliders[i].id === String(id)){
                sliders[i].style.transition = isLoaded ?  `opacity 0.5s ease-in-out` : 'none'
                sliders[i].style.opacity =  "1"
                sliders[i].style.zIndex =  "888"
            }else{
                sliders[i].style.transition = isLoaded ?  `opacity 0.5s ease-in-out` : 'none'
                sliders[i].style.opacity =  "0"
                sliders[i].style.zIndex =  "-1"
             }
            
        }

    }

    let isOver = false;
    const handleSlidesButtonFocus = (id:number)=>{
     
        if(document.readyState === 'complete'){
            for(const [, value] of Array.from(slidesButtons).entries()){

              value.addEventListener('click', ()=> setIsOnInterval(false))

                if(value.id === String(id)){
                  
                    value.style.border = "1px solid #fff"
                } else {
                    
                    value.style.border = "0px solid #fff"
                }

            }
        }
    }

  
    const handleDismissContainerSlideButtons = ()=>{
        const slideButtonContainer = document.querySelector('#container-slide')

        slideButtonContainer!.addEventListener('mouseenter', ()=>{
            isOver = true
            console.log('isOver: ' + isOver);
        })

        slideButtonContainer!.addEventListener('mouseleave', ()=>{
            isOver = false
            console.log('isOver: ' + isOver);
        })

        window.addEventListener('click', ()=>{
            if(!isOver){
                setIsOnInterval(true)
                console.log('isOnInterval:' + isOnInterval);
                
            }
        })
        
    }

   

    useEffect(()=>{
        handleSlider(nextButton)
        handleSlidesButtonFocus(nextButton)
    }, [])

    useEffect(()=>{
        setIsLoaded(true)
        if(nextButton > 5){
            setNextButton(1)
        }
        
        if(isOnInterval){
            const interval =  setInterval(()=>{
                setNextButton(nextButton + 1)
            }, 10000)
            handleSlidesButtonFocus(nextButton)
            handleSlider(nextButton)
            return () => clearInterval(interval)
        }else {
            handleSlidesButtonFocus(nextButton)
            handleSlider(nextButton)
        }
    }, [nextButton, isOnInterval])

    useEffect(()=>{
        handleDismissContainerSlideButtons()
    }, [isOver])

     return(
          <div className='slider-container'>
              <ul className='sliders'>
                  <li className="slide" id='1'>
                      <div>
                        <ButtonSlide frase='CONTRATE AGORA' style={{background:'#fdb913', color:'#fff'}}/>
                      </div>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2022/05/site-novo.jpg" alt="logo" />
                  </li>
                  <li className="slide" id='2'>
                      <div>
                        <ButtonSlide frase='CONTRATE AGORA' style={{background:'#fdb913', color:'#fff'}}/>
                      </div>
                      <img src="https://www.crefisa.com.br/wp-content/uploads/2022/03/1920x680-site_Dinheiro-Hora_.jpg" alt="logo" />

                    </li>
                  <li className="slide" id='3'>
                      <div>
                        <ButtonSlide frase='SAIBA MAIS' style={{background:'#178ac2', color:'#fff'}}/>
                      </div>
                      <img src="https://www.crefisa.com.br/wp-content/uploads/2022/03/1920x680-site_Dinheiro-Hora.jpg" alt="logo" />

                  </li>
                  <li className="slide" id='4'>
                      <div>
                        <ButtonSlide frase='SAIBA MAIS' style={{background:'#fdb913', color:'#fff'}}/>
                      </div>
                      <img src="https://www.crefisa.com.br/wp-content/uploads/2022/04/COVER-SITE-1920_x680_INSS.jpg" alt="logo" />

                    </li>
                  <li className="slide" id='5'>
                      <div>
                        <ButtonSlide frase='SAIBA MAIS' style={{background:'#fdb913', color:'#fff'}}/>
                      </div>
                      <img src="https://www.crefisa.com.br/wp-content/uploads/2022/03/Fique-Atento-Crefisa-banner-Home.jpg" alt="logo" />

                  </li>
              </ul>
      
                <ButtonNext style={{top:'51%', width:'100%'}} color="#ffffff"  onClick={()=> setNextButton(nextButton + 1)}/>
                <div id="container-slide" className="container-slide-buttons">
                    {slidesButtonsArray.map((index)=>{
                        return (
                            <div key={index} className="slide-button" id={String(index)} onClick={()=>setNextButton(index)} tabIndex={1}>
                                <span></span>
                            </div>
                        )
                    })}
                </div>
    
        
          </div>
     )

}