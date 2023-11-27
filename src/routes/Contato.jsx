import React from 'react'
import '../components/css/Contato.css'
import Contato from '../components/scripts/Contato'
import { FaTelegram,FaWhatsapp } from 'react-icons/fa';


////////Numero do whatsapp com todos os digitos/////////////
const numero = 5581354819;
///////////////////////////////////////////////////////////


//Aqui é para aparecer no site sem os identificadores de pais e local(DDD)
function extrairNumeroLocal(numero) {
    const numeroString = numero.toString();
    const numeroLocal = numeroString.slice(4);
    return parseInt(numeroLocal, 10);
}

function ContatoPage() {
    const numero_sem_digitos = extrairNumeroLocal(numero);

    

    return (
        <>
            <main>
                <section className='contato-page'>
                    <img className="contato-page-img" src="../img/barcos.JPG" alt="" />
                    <div className='contato-page-escrito'>
                        <p className='paragrafo'>Você pode enviar uma mensagem pra gente diretamente <br /> do site mas também pode escolher outros meios de contatos abaixo:</p>
                       
                        <button
                            className="whatsapp-button"
                            onClick={() => window.open(`https://api.whatsapp.com/send?phone=${numero}`, '_blank')}
                        >
                            <FaWhatsapp className="whatsapp-icon" />
                        Entre em contato pelo WhatsApp
                        </button>

                        <button
                            className="telegram-button"
                            onClick={() => window.open('https://t.me/COL_PESCADORES_ITA_BOT', '_blank')}
                            >
                            <FaTelegram className="telegram-icon" />
                                Entre em contato pelo Telegram
                        </button>
                    
                    </div>

                    
                    <div className='contato-localizacao'>
                          
                            <iframe
                                title="Google Maps"
                                width="300"
                                height="200"
                                loading="lazy"
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7906.2449278685!2d-34.90958418116063!3d-7.776837258697386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab699ae82fb05f%3A0xf34687259f747f77!2sItapissuma%2C%20PE%2C%2053700-000!5e0!3m2!1spt-BR!2sbr!4v1700795560059!5m2!1spt-BR!2sbr`}
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    
               
                </section>
            </main>
        </>
    );
}

export default ContatoPage;
