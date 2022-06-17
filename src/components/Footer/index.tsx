import { ButtonNext } from '../ButtonNext'
import './style.scss'

type Props = {
    toTheTop:()=>void;
}

export const Footer = ({toTheTop}:Props) =>{

     return(
         <div className='footer-container'>
            <div className="footer-menu">
                <div className='first-section'>
                    <h5>Entre em contato</h5>
                    <div>
                        <h5>Central de Relacionamento</h5>
                        <a href='#'>4004 4001</a>
                        <a href='#'>0800 722 4444</a>
                    </div>
                    <div>
                        <h5>Central de Vendas</h5>
                        <a href='#'>0800 703 8888</a>
                    </div>
                    <div>
                        <h5>SAC</h5>
                        <a href='#'>0800 727 4884</a>
                    </div>
                    <div>
                        <h5>Ouvidoria</h5>
                        <a href='#'>0800 703 8891</a>
                    </div>
                    <div>
                        <h5>Deficientes Auditivos e de Fala</h5>
                        <a href='#'>0800 273 3374</a>
                    </div>
                    <a href='#'>Chat Crefisa</a>
                </div>
                <div>
                    <h5>Institucional</h5>
                    <a href='#'>Sobre a Crefisa</a>
                    <a href='#'>Documentos de Governança</a>
                    <a href='#'>Informações Financeiras</a>
                    <a href='#'>Atendimento</a>
                    <a href='#'>Informações e Dicas</a>
                </div>
                <div>
                    <h5>Atendimento</h5>
                    <a href='#'>Fale Conosco</a>
                    <a href='#'>Agende uma visita</a>
                    <a href='#'>Pontos de Atendimento</a>
                    <a href='#'>Central de Cartões</a>
                    <a href='#'>Renegocie Sua Dívida</a>
                </div>
                <div>
                    <h5>Alguns Produtos</h5>
                    <a href='#'>Empréstimo Pessoal</a>
                    <a href='#'>Consignado Crefisa</a>
                    <a href='#'>Beneficiários INSS</a>
                    <a href='#'>Conta-Corrente</a>
                    <a href='#'>Cartões Crefisa</a>
                </div>
                <div>
                    <h5>Minha Conta</h5>
                    <a href='#'>Empréstimo Online</a>
                    <a href='#'>Abra Sua Conta I Crefisa</a>
                </div>
                <div>
                    <ButtonNext style={{position:'unset', paddingRight:'unset'}}  color="#cfcfcf" onClick={toTheTop}/>
                    <p>Topo</p>
                </div>
            </div>
            <div className="infos">
                <div>
                    <h5>Crefisa S.A. Crédito Financiamento e Investimentos</h5>
                    <p>CNPJ: 60.779.196/0001-96</p>
                    <p>Endereço: Rua Canadá, 387 - Jd. América, São Paulo - SP CEP: 01.436-900*</p>
                </div>
                <div>
                    <h5>Banco Crefisa S.A.</h5>
                    <p>CNPJ: 61.033.106/0001-86</p>
                    <p>Endereço: Rua Canadá, 390 - Jd. América, São Paulo - SP CEP: 01.436-000*</p>
                </div>
                <p className='last-info'>*Nesses endereços, não há atendimento a clientes. Encontre nossos Pontos de Atendimento <a href="#">clicando aqui.</a></p>
            </div>
         </div>
     )

}