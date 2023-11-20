import ContatoHome from '../components/scripts/ContatoHome';
import Principal from '../components/scripts/Principal';
import Secundario from '../components/scripts/Secundario';
import Linha from '../components/scripts/Linha';
import '../components/css/Home.css'

function Home() {
  return (
    <>
      <Principal />

      <Linha />

      <Secundario />

      <Linha />

      <ContatoHome />
    </>
  )
}

export default Home