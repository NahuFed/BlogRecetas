import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import ItemReceta from "./receta/ItemReceta";
import { obtenerRecetas } from "../helpers/queries";

const Administrador = () => {
const [recetas,setRecetas] = useState([]);
useEffect(()=>{
  obtenerRecetas().then((respuesta)=>{
    if(respuesta){
      setRecetas(respuesta)
    }else{
      Swal.fire('Ocurrio un error','Intente realizar esta operacion en unos minutos','error')
    }
  })
},[])
    return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Recetas disponibles</h1>
          <Link className="btn btn-primary" to='/admin/crear-receta'>
            Agregar
          </Link>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Receta</th>
              <th>Complejidad</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>.</td>
            <td>.</td>
            <td>.</td>
            <td>.</td>
            <td>.</td>
            <td>.</td>
            </tr>
            {recetas.map((receta)=><ItemReceta receta={receta} key ={receta.id}></ItemReceta>)}            
          </tbody>
        </Table>
      </section>
    );
};

export default Administrador;