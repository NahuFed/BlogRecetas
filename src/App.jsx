import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css' 
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/views/Home'
import Administrador from './components/views/Administrador';
import Error404 from './components/views/Error404';
import BarraNavegacion from './components/common/BarraNavegacion';
import Footer from './components/common/Footer';
import { Container } from 'react-bootstrap';



function App() {

  return (
    <BrowserRouter>
    <BarraNavegacion></BarraNavegacion>
    <Container className='main my-5'>
        <Routes>
          <Route path ="/" element={<Home/>}></Route>      
          <Route path ="admin" element={<Administrador/>}></Route>      \   
          <Route path ="*" element={<Error404/>}></Route>      
      </Routes>
    </Container>
    <Footer></Footer>
      </BrowserRouter>

  )
}

export default App
