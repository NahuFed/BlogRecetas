import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css' 
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/views/Home'
import Error404 from './components/views/Error404';
import BarraNavegacion from './components/common/BarraNavegacion';
import Footer from './components/common/Footer';
import { Container } from 'react-bootstrap';
import Login from './components/views/Login';
import Registro from './components/views/Registro';
import DetalleReceta from './components/views/DetalleReceta'
import { useState } from 'react';
import RutasProtegidas from './routes/RutasProtegidas';
import RutasAdministrador from './routes/RutasAdministrador';


function App() {
  const usuario =JSON.parse(sessionStorage.getItem('usuario')) || {}
const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
    <BarraNavegacion usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></BarraNavegacion>
    <Container className='main my-5'>
        <Routes>
          <Route exact path ="/" element={<Home/>}></Route>      
          <Route path ="admin/*" element={
            <RutasProtegidas>
              <RutasAdministrador></RutasAdministrador>
            </RutasProtegidas>
          }></Route>        
          <Route path ="login" element={<Login setUsuarioLogueado={setUsuarioLogueado}/>}></Route>        
          <Route path ="registro" element={<Registro/>}></Route>        
          <Route path ="detalle/:id" element={<DetalleReceta/>}></Route>                       
          <Route path ="*" element={<Error404/>}></Route>      
      </Routes>
    </Container>
    <Footer></Footer>
      </BrowserRouter>

  )
}

export default App
