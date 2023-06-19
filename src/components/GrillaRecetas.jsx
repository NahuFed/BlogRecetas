import React from 'react';
import { Row } from 'react-bootstrap';
import Receta from './Receta';


const GrillaRecetas = () => {
    return (
        <>
        <Row className='m-1'>
             <Receta></Receta>
             <Receta></Receta>
             <Receta></Receta>
             <Receta></Receta>
             <Receta></Receta>
             <Receta></Receta>
        </Row>
        </>
    );
};

export default GrillaRecetas;