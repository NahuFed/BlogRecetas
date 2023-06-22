import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css' 
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/views/Home'
import Administrador from './components/views/Administrador';
import Error404 from './components/views/Error404';
import BarraNavegacion from './components/common/BarraNavegacion';
import Footer from './components/common/Footer';
import { Container } from 'react-bootstrap';
import Login from './components/views/Login';
import Registro from './components/views/Registro';
import DetalleReceta from './components/views/DetalleReceta'
import CrearReceta from './components/views/receta/crearReceta';
import EditarReceta from './components/views/receta/EditarReceta';


function App() {

  return (
    <BrowserRouter>
    <BarraNavegacion></BarraNavegacion>
    <Container className='main my-5'>
        <Routes>
          <Route exact path ="/" element={<Home/>}></Route>      
          <Route path ="admin" element={<Administrador/>}></Route>        
          <Route path ="login" element={<Login/>}></Route>        
          <Route path ="registro" element={<Registro/>}></Route>        
          <Route path ="detalle" element={<DetalleReceta/>}></Route>        
          <Route path ="admin/crear-receta" element={<CrearReceta/>}></Route>        
          <Route path ="admin/editar-receta" element={<EditarReceta/>}></Route>        
          <Route path ="*" element={<Error404/>}></Route>      
      </Routes>
    </Container>
    <Footer></Footer>
      </BrowserRouter>

  )
}

export default App
