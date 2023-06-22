import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EditarReceta from './EditarReceta';
const ItemReceta = ({receta}) => {
    return (
        <tr>
        <td>{receta.id}</td>
        <td>{receta.nombreReceta}</td>
        <td>{receta.complejidad}</td>
        <td>{receta.imagen}</td>
        <td>{receta.categoria}</td>
        <td><Link to={"editar-receta"} className='btn btn-warning'>Editar</Link> <Button variant='danger'>Borrar</Button></td>
        </tr>
    );
};

export default ItemReceta;