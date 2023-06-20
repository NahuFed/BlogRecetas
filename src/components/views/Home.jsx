import { Container } from 'react-bootstrap';
import GrillaRecetas from './receta/GrillaRecetas'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import BarraNavegacion from '../common/BarraNavegacion';


function Home() {

  return (

    <>           
    <h1 className='text-center my-5'>Blog de Recetas</h1>
    <GrillaRecetas></GrillaRecetas>      

    </>
  )
}

export default Home
