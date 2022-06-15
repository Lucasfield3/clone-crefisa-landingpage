import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import './style.scss'

export const SocialMedia = () =>{

     return(
         <div className='socialMedia-container'>
            <div className='image-section'>
                <div>
                    <img style={{height:'19.2rem'}} src="https://www.crefisa.com.br/wp-content/uploads/2020/09/280_x_280px_Banner-Footer_03.png" alt="" />
                    <img style={{height:'28rem'}} src="https://www.crefisa.com.br/wp-content/uploads/2020/09/280_x_280px_Banner-Footer_02.png" alt="" />
                </div>
                <div>
                    <img style={{height:'28rem'}} src="https://www.crefisa.com.br/wp-content/uploads/2020/09/280_x_280px_Banner-Footer_04.png" alt="" />
                    <img style={{height:'19.2rem'}} src="https://www.crefisa.com.br/wp-content/uploads/2019/08/siga-a-gente-4-min.jpg" alt="" />
                </div>
            </div>
            <div>
                <h3>Nossa Marca</h3>
                <h2>Siga a gente nas redes sociais</h2>
                <div>
                    <span><FaFacebookF color="#fff" size={24}/></span>
                    <span><FaTwitter color="#fff" size={24}/></span>
                    <span><RiInstagramFill color="#fff" size={24}/></span>
                    <span><FaYoutube color="#fff" size={24}/></span>
                    <span><FaLinkedinIn color="#fff" size={24}/></span>
                </div>
            </div>
         </div>
     )

}