import './style.scss'

export const Visit = () =>{

     return(
         <div className='visit-container'>
            <div className='image'></div>
            <div className='visit-info'>
                <div>
                    <h2>Faça seu empréstimo</h2>
                    <h3>Agende uma visita</h3>
                    <p>Agende uma visita agora, faça seu empréstimo e tenha dinheiro rápido!</p>
                </div>
                <div className='form'>
                    <div>
                        <div className='wrap-input'>
                            <input type="text" placeholder="Seu nome" />
                            <span>Seu Nome</span>
                        </div>
                        <div className='wrap-input'>
                            <input type="text" placeholder='Seu telefone'/>
                            <span>Seu Telefone</span>
                        </div>
                    </div>
                    <div className='wrap-input'>
                        <input type="text" placeholder='Seu e-mail'/>
                        <span>Seu e-mail</span>
                    </div>
                    <button>CONTINUAR</button>
                </div>
            </div>
         </div>
     )

}