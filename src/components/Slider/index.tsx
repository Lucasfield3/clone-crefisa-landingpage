import { ReactNode, useEffect, useState } from 'react'
import logo from '../../assets/images/Logo.png'
import './style.scss'

export const Slider = () =>{

    const [ nextButton, setNextButton ] = useState(1)
    let [isLoaded, setIsLoaded] = useState(false)
    const sliders = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLLIElement>
    const handleSlider = () => {
        for(let i = 0; i < sliders.length; i++){

           if(sliders[i].id === String(nextButton)){
                sliders[i].style.transition = isLoaded ?  `opacity 0.5s ease-in-out` : 'none'
               sliders[i].style.opacity =  "1"
               sliders[i].style.zIndex =  "999"
               console.log(sliders[i]);
            }

            if(sliders[i].id !== String(nextButton)){
                sliders[i].style.transition = isLoaded ?  `opacity 0.5s ease-in-out` : 'none'
                sliders[i].style.opacity =  "0"
                sliders[i].style.zIndex =  "-1"
                console.log(sliders[i]);
             }
        }

    }

    console.log(isLoaded);
    
    useEffect(()=>{
        handleSlider()
    }, [])

    useEffect(()=>{
        setIsLoaded(true)
        if(nextButton > 5){
            setNextButton(1)
        }
        handleSlider()
    }, [nextButton])


     return(
          <div className='slider-container'>
              <ul className='sliders'>
                  <li className="slide" id='1'>
                  <img src={logo} alt="logo" />
                  </li>
                  <li className="slide" id='2'><img src="https://www.crefisa.com.br/wp-content/uploads/2022/05/mobile-novo.jpg" alt="logo" /></li>
                  <li className="slide" id='3'><img src={logo} alt="logo" /></li>
                  <li className="slide" id='4'><img src="https://www.crefisa.com.br/wp-content/uploads/2022/05/mobile-novo.jpg" alt="logo" /></li>
                  <li className="slide" id='5'><img src={logo} alt="logo" /></li>
              </ul>
              <button onClick={()=> setNextButton(nextButton + 1)}>next</button>
          </div>
     )

}