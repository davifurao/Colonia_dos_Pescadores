import React from 'react';


function Formulario() {
    return (

        <section className="formulario">
            <h5 className="formulario-titulo-home">Envie uma mensagem</h5>
                <form className="grupo-contato-home">
                    <label for="nome">Nome:</label>
                    <input type="text" name="nome" className="input" style={{ width: "380px" }} required></input>
                    <label for="email">Email:</label>
                    <input type="email" className="input" style={{ width: "380px" }} required ></input>
                    <label for="telefone">Telefone:</label>
                    <input type="tel" className="input" style={{ width: "380px" }} required />
                    <label for="mensage">Mensagem:</label>
                    <textarea name="mensagem" className="mensagem" cols="46" rows="8" required></textarea>
                    <button className="enviar-botao" type="submit">Enviar</button>
                </form>
        </section>

    );
}

export default Formulario;