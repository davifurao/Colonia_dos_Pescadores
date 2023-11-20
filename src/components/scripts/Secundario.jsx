import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'

function Secundario() {
  return (
    <main>
      <h3 className="conteudo-secundario-titulo">Conteúdos que você tem que ver!</h3>
      <section className="conteudo-secundario">
        <div className="conteudo-secundario-documentario">
          <h4><a className="documentario" href="/">Vídeos</a></h4>
          <p>Entenda como é ser um pescador, <br /> veja nossos vídeos.</p>
        </div>
        <div className="conteudo-secundario-respo">
          <h4><a className="responsaveis" href="/">Responsáveis</a> </h4>
          <p>Acesse e veja quem são os <br /> responsáveis pela Colônia dos <br /> pescadores de Itapissuma.</p>
        </div>
        <div className="conteudo-secundario-blog">
          <Link className="blog" to="/Blog"><h4>Blog</h4>
            <p className="blog-home-texto" >Acompanhe nossas postagens, <br /> acesse nosso Blog.</p></Link>
        </div>
      </section>
    </main>
  );
}

export default Secundario;