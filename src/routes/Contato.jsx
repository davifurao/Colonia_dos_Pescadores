import React from 'react'
import '../components/css/Contato.css'
import Contato from '../components/scripts/Contato'

function ContatoPage() {
    return (
        <>
            <main>
                <section className='contato-page'>
                    <img className="contato-page-img" src="../img/barcos.JPG" alt="" />
                    <Contato />
                    <div className='contato-page-escrito'>
                        <p className='paragrafo'>Você pode enviar uma mensagem pra gente diretamente <br /> do site mas também pode escolher outros meios de contatos abaixo.</p>
                        <p className='contato-email'><br />Email: <br /> coloniadepescaz10itapissuma@gmail.com</p>
                        <p className='contato-telefone'><br />Telefone para contato: <br /> +55 (81) 3548-1998</p>
                        <p className='contato-endereco'><br />Endereço: <br /> Itapissuma - PE, Rua Doutor José Gonsalves, 87, Centro. </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ContatoPage