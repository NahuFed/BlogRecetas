import Receta from './receta/Receta'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import { Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { obtenerRecetas } from '../helpers/queries';


function Home() {

  const [recetas, setRecetas] = useState([]);

  useEffect(()=>{
    obtenerRecetas().then((respuesta)=>{
      setRecetas(respuesta);
    })
  },[])

  return (

    <>           
    <h1 className='text-center my-5'>Blog de Recetas</h1>
    <Row className='m-1'>
        {
          recetas.map((receta)=><Receta receta={receta} key={receta.id}></Receta>)
        }
        </Row>    

    </>
  )
}

export default Home
