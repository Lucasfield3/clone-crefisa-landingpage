import { ButtonSlide } from '../ButtonSlide'
import './style.scss'

export const Products = () =>{

     return(
          <div className='produts-container'>
              <header>
                  <p>Nossos produtos</p>
                  <h1>Produtos para você e sua empresa</h1>
              </header>

              <div className='products-slides'>
                  <div className='product'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2020/10/660_x_560px_Pag-Consignado-380x380.jpg" alt="image" />
                    <h3>Empréstimo Consignado</h3>
                    <p>Faça seu Empréstimo Consignado na Crefisa. Dinheiro rápido, melhores taxas e até 84x para pagar.</p>
                    <ButtonSlide background='#fdb913' color='#fff' frase='CONTRATE AGORA'/>
                  </div>
                  <div className='product'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2021/03/660_x_500_px_Renegocia%C3%A7%C3%A3o-de-D%C3%ADvidas-380x380.png" alt="image" />
                    <h3>Antecipe seu Benefício</h3>
                    <p>Antecipe seu Benefício do INSS. Você não precisa esperar pelo pagamento, aqui você em Dinheiro agora!</p>
                    <ButtonSlide background='#fdb913' color='#fff' frase='CONTRATE AGORA'/>
                  </div>
                  <div className='product'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2019/05/conta-corrente-min-1-380x380.jpg" alt="image" />
                    <h3>Abra sua Conta-Corrente</h3>
                    <p>A Crefisa tem a solução ideal para você que está buscando abrir uma <strong>Conta Corrente</strong> de forma rápida e sem burocracia.</p>
                    <ButtonSlide background='#fdb913' color='#fff' frase='ABRA SUA CONTA'/>
                  </div>
                  <div className='product'>
                    <img src="https://www.crefisa.com.br/wp-content/uploads/2020/09/1040_x_700px_Banner-Cartões-380x380.png" alt="image" />
                    <h3>Solicite seu Cartão Crefisa</h3>
                    <p>Solicite o seu cartão <strong>Pré-Pago</strong> Crefisa e tenha muito mais agilidade e segurança nas transações financeiras.  </p>
                    <ButtonSlide background='#fdb913' color='#fff' frase='PEÇA SEU CARTÃO'/>
                  </div>
              </div>
          </div>
     )

}