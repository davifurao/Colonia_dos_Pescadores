import { Link } from "react-router-dom";

function Cabecalho() {
    return (
            <header className="cabecalho">
                <Link to="/"><img className="cabecalho-img" src="../img/index icons/fish.png" alt="Logo da Colônia dos Pescadores" /></Link>
                <Link to="/"><h1 className="cabecalho-titulo">Colônia dos Pescadores<br/>Itapissuma - PE</h1> </Link>
                <nav className="cabecalho-navbar">
                    <ul className="caecalho-ul">
                        <li className="cabecalho-li"><a className="cabecalho-a" href>Notícias</a></li>
                        <li className="cabecalho-li"><Link className="cabecalho-a" to="/blog">Blog</Link></li>
                        <li className="cabecalho-li"><Link className="cabecalho-a" to="/contato" >Contato</Link></li>
                        <li className="cabecalho-li"><Link className="cabecalho-a" to="/sobre">Sobre</Link></li>
                    </ul>
                </nav>
            </header>
    );
}

export default Cabecalho;