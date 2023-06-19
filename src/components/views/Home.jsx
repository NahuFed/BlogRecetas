import { Container } from 'react-bootstrap';
import GrillaRecetas from '../GrillaRecetas'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import BarraNavegacion from '../BarraNavegacion';


function Home() {

  return (

    <>
          <Container className='mt-5 main'>
            <BarraNavegacion></BarraNavegacion>
    <h1 className='text-center'>Blog de Recetas</h1>
    <GrillaRecetas></GrillaRecetas>     
    </Container>
    <footer className="bg-dark text-center text-light py-4">
        <p>&copy; Todos los derechos reservados </p>
      </footer>    
    </>
  )
}

export default Home
