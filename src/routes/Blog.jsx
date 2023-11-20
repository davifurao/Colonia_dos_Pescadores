import React from 'react'
import '../components/css/Blog.css'

function Blog() {
    return (
        <main>
            <section className="blog-conteudo-1">
                <img name="homempescando" className="blog-img-homempescando" src="../img/homempassandorede.JPG" alt="" />
                <p className="blog-texto-1">Nas beiradas no mar de fora e nas areias da costa pescadores e pescadoras com seus barcos e redes de pescas sustentam seus lares e movimenta a economia e a gastronomia local.<br />  A pesca artesanal é muito mais que um <br />  trabalho com retorno financeiro, a pesca artesanal é cuidar e respeitar as leis da natureza. A maioria desses pescadores(a) tem histórico familiar da pesca. A pesca envolve também a família tornado algo mais cuidadoso, essas pessoas se alimenta e sustenta sua família só com a trabalho da pesca artesanal.</p>
            </section>

            <section className="blog-conteudo-2">
                <p className="blog-texto-2">No mangue também existe poesia,
                <br/>Ele é como um anjo que vive,
<br/>- entre o céu e a terra
<br/>Ele entre o rio e o mar,
<br/>Conhece o ritmo das águas,
<br/>Ele sabe como se comportar
<br/>Como anfitrião da vida...,

<br/><br/>No movimentar das águas doces,
<br/>E no bailar das águas salgadas,
<br/>O mangue sempre sabe esperar...

<br/><br/>Talvez seja porque não é notado,
<br/>Ou porque vive despercebido,
<br/>Ele é abrigo, viveiro e ninho.

<br/><br/>O mangue como grande anfitrião,
<br/>Só a existência dele é uma lição:
<br/>de paciência,
<br/>resiliência
<br/>e fonte de sabedoria
<br/>- Ele surpreende porque é veia;
<br/>Existe nele um sangue invisível,
<br/>O mangue é um lugar incrível!
<br/>Respeite o mangue como intangível,
<br/>Ele é a cintura da terra que liga,
<br/>O rio com todo o oceano, ele é pura lida!
<br/><br/>*Anna Flávia Schmitt Wyse Baranski</p>
<img className="blog-img-represetantetrabalhando" src="../img/mercadodepeixes.JPG" alt="" />
            </section>
        </main>
    );
}

export default Blog;