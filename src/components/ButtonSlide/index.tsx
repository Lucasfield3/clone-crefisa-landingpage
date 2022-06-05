import './style.scss'

type Props = {
    frase:string;
    color:string;
    background:string;
}

export const ButtonSlide = (props:Props) =>{

     return(
          <button className="button-slide" style={{color:props.color, background:props.background}}>
              {props.frase}
          </button>
     )

}