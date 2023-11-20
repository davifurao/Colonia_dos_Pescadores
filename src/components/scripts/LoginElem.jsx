import React from 'react'
import { Link } from 'react-router-dom'

function LoginElem() {
    return (
        <>
            <main class="conteudo">
                <section class="formulario">
                    <h5 class="formulario-titulo">Entre com sua conta</h5>
                    <form class="grupo-login">
                        <label for="email">Email</label>
                        <input type="email" className="input" style={{ width: "380px" }} required />
                        <label for="telefone">Senha</label>
                        <input type="password" className="input" style={{ width: "380px" }} required />
                        <Link class="esqueci-senha" to="/">Esqueci minha senha</Link>
                        <p class="conta">Se você ainda não tem uma conta.</p><Link class="criar-conta" to="/Cadastro">Clique aqui e cadastre-se</Link>
                        <button class="entrar-botao" type="submit">Entrar</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default LoginElem