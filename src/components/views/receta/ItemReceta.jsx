import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EditarReceta from './EditarReceta';
const ItemReceta = () => {
    return (
        <tr>
        <td>1</td>
        <td>Pastafrola</td>
        <td>5 ingredientes</td>
        <td>https://www.elmundoeats.com/wp-content/uploads/2019/09/Pasta-Frola-2.jpg</td>
        <td>Tarta dulce</td>
        <td><Link to={"editar-receta"} className='btn btn-warning'>Editar</Link> <Button variant='danger'>Borrar</Button></td>
        </tr>
    );
};

export default ItemReceta;