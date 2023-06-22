import React from 'react';
import { Image } from 'react-bootstrap';
import { obtenerUnaReceta } from '../helpers/queries';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleReceta = () => {

    const [unaReceta, setUnaReceta] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        obtenerUnaReceta(id).then((respuesta)=>{
          setUnaReceta(respuesta);
        })
      },[])

    return (
        <div className='p-5 border border-3 sketchy'>
            
            <h1>{unaReceta.nombreReceta}</h1>
            <div className='d-flex p-5'>
                
            <Image src={unaReceta.imagen} className='img-detalle' alt='Pasta Frola'></Image>
                
            <div className='ms-5'>
                <h3 className='text-decoration-underline'>Ingredientes:</h3>
                <ul className='mt-5'>                 

                {unaReceta.ingredientes &&
              unaReceta.ingredientes.map((item, index) => (
                <li key={index}>{item.ingrediente}</li>
              ))}
                </ul>
            </div>
            
            </div>
            <div className='pasos-receta'>
            <h3>Paso A Paso para hacer {unaReceta.nombreReceta}</h3>
            <ol >
            {unaReceta.pasos &&
              unaReceta.pasos.map((item, index) => (
                <li key={index}>{item.paso}</li>
              ))}               
                
            </ol>
            </div>
        </div>
    );
};

export default DetalleReceta;