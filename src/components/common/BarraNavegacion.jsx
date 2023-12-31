import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom'; 
import logo from '../../assets/logo.png'

const BarraNavegacion= ({usuarioLogueado, setUsuarioLogueado}) => {
  const navegacion = useNavigate();
  const logout= () =>{
    sessionStorage.removeItem('usuario');
    setUsuarioLogueado({});
    navegacion('/')
  }
  let activeStyle ={
    textDecoration: 'undirline',
    fontWeight: 'bold'
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}> <Image src={logo} alt="logo" className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
          <NavLink className='nav-link' to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)} >Inicio</NavLink>            
            <NavLink className='nav-link' to="/registro" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Registrarse</NavLink>
            {
              usuarioLogueado.nombreUsuario?
              <>
              <NavLink className='nav-link' to="/admin" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Admin</NavLink>
              <Button variant = 'dark' onClick={logout}>Logout</Button>
              </>:<NavLink className='nav-link' to="/login" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Login</NavLink>
            }
            </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar receta"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;