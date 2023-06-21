import React from 'react';
import { Col,Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Receta = () => {
    return (
        <Col xs={12} md={6} lg={4} className='mb-4' >
        <Card className='h-100'>
          <Card.Header>
            Receta uno            
          </Card.Header>
            <Card.Img variant="top" src='3' />
          <Card.Body className="d-flex justify-content-center flex-column">
            <Card.Text className='truncarTexto'> </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center">
            <Link className='btn btn-dark' to={"/detalle"} >
              Ver receta completa
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default Receta;