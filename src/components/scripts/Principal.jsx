import React from 'react';

function Principal() {
  return (
    <section className="conteudo-principal">
      <div className="conteudo-principal-escrito">
        <h1 className="conteudo-principal-escrito-titulo">Colônia dos Pescadores Z10</h1>
        <p className="conteudo-principal-escrito-paragrafo">Fundada em 1927, a Colônia de Itapissuma conta com cerca de <br/>
          400 pescadores e pescadoras artesanais associados, que são
          diretamente <br/> beneficiados pelo Projeto, sendo em sua maioria
          mulheres.</p>
        <a href="/"><button className="saiba">Saiba Mais.</button></a>
      </div>
      <img className="conteudo-principal-img" src="../img/canal(2).JPG" alt="" />
    </section>
  );
}

export default Principal;