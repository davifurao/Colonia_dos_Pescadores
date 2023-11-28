import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Api from '../../services/Api';

function CadastroElem() {

    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [datadenascimento, setDataDeNascimento] = useState('');
    const [foto, setFoto] = useState('');
    const [telefone, setTelefone] = useState('');
    const [rg, setRG] = useState('');
    const [titulo, setTitulo] = useState('');
    const [nis, setNIS] = useState('');
    const [comprovante, setComprovante] = useState('');

    const handleSubmit = () => {
        if (nome.length === 0) {
            alert("O campo de Nome não foi preenchido!");
        }
        else if (cpf.length === 0) {
            alert("O campo de CPF não foi preenchido!");
        }
        else if (datadenascimento.length === 0) {
            alert("O campo de Data de Nascimento não foi preenchido!");
        }
        else if (foto.length === 0) {
            alert("O campo de Foto não foi preenchido!");
        }
        else if (telefone.length === 0) {
            alert("O campo de Telefone não foi preenchido!");
        }
        else if (rg.length === 0) {
            alert("O campo de RG não foi preenchido!");
        }
        else if (titulo.length === 0) {
            alert("O campo de Titulo de Eleitor não foi preenchido!");
        }
        else if (nis.length === 0) {
            alert("O campo de NIS não foi preenchido!");
        }
        else if (comprovante.length === 0) {
            alert("O campo de Comprovante de Residência não foi preenchido!");
        }
        else {

            let fDados = new FormData(); 
            fDados.append('nome', nome);
            fDados.append('cpf', cpf);
            fDados.append('dataDeNascimento', datadenascimento);
            fDados.append('foto', foto);
            fDados.append('telefone', telefone);
            fDados.append('rg', rg);
            fDados.append('titulo', titulo);
            fDados.append('nis', nis);
            fDados.append('comprovante', comprovante);

            axios.post(Api, fDados)
            .then(response => alert (response.data))
            .catch(error => alert (error))
        }
    }

    return (
        <>
            <main class="conteudo-Cad" >
                <section class="formulario">
                    <h5 class="formulario-titulo">Cadastre-se</h5>
                    <form className="grupo-cadastro">
                        <label for="nome">Nome Completo:</label>
                        <input className="input" id="nome" name="nome" type="text" style={{ width: "380px" }} value={nome} onChange={(e) => setNome(e.target.value)} required />
                        <label for="cpf">CPF:</label>
                        <input className="input" name="cpf" type="text" style={{ width: "380px" }} value={cpf} onChange={(e) => setCPF(e.target.value)} required />
                        <label for="datadenascimento">Data de nascimento:</label>
                        <input className="input" name="datadenascimento" type="date" style={{ width: "380px" }} value={datadenascimento} onChange={(e) => setDataDeNascimento(e.target.value)} required />
                        <label for="foto">Foto:</label>
                        <input className="input" name="foto" type="file" style={{ width: "380px" }} value={foto} onChange={(e) => setFoto(e.target.value)} />
                        <label for="telefone">Telefone:</label>
                        <input className="input" name="telefone" type="tel" style={{ width: "380px" }} value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                        <label for="rg">RG:</label>
                        <input className="input" name="rg" type="text" style={{ width: "380px" }} value={rg} onChange={(e) => setRG(e.target.value)} required />
                        <label for="titulo">Titulo de Eleitor:</label>
                        <input className="input" name="titulo" type="text" style={{ width: "380px" }} value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                        <label for="nis">NIS:</label>
                        <input className="input" name="nis" type="text" style={{ width: "380px" }} value={nis} onChange={(e) => setNIS(e.target.value)} required />
                        <label for="comprovante">Comprovante de Residência:</label>
                        <input className="input" name="comprovante" type="file" style={{ width: "380px" }} value={comprovante} onChange={(e) => setComprovante(e.target.value)} required />
                        <button class="cadastro-botao" type="submit" onClick={handleSubmit}>Cadastrar</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default CadastroElem