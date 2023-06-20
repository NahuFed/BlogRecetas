import React from 'react';
import { Button } from 'react-bootstrap';

const ItemReceta = () => {
    return (
        <tr>
        <td>1</td>
        <td>Pastafrola</td>
        <td>5 ingredientes</td>
        <td>https://www.elmundoeats.com/wp-content/uploads/2019/09/Pasta-Frola-2.jpg</td>
        <td>Tarta dulce</td>
        <td><Button variant='warning'>Editar</Button> <Button variant='danger'>Borrar</Button></td>
        </tr>
    );
};

export default ItemReceta;