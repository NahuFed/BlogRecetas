import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

const CrearReceta = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();

    return (
        <>
            <h1 className="display-4 mt-5">Nueva receta</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pastafrola"
            {...register("nombreReceta", {
              required: "El nombre de la receta es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad maxicma de caracteres es de 100 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formComplejidad">
          <Form.Label>Complejidad*</Form.Label>
          <Form.Select
            {...register("complejidad", {
              required: "La complejidad es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Sencilla">Sencilla</option>
            <option value="Accesible">Accesible</option>
            <option value="Moderada">Moderada</option>            
            <option value="Desafiante">Desafiante</option>            
            <option value="Exigente">Exigente</option>            
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.complejidad?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.elmundoeats.com/wp-content/uploads/2019/09/Pasta-Frola-2.jpg"
            {...register("imagen", {
              required: "La imagen es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Sándwiches y wraps">Sándwiches y wraps</option>
            <option value="Ensaladas rápidas">Ensaladas rápidas</option>
            <option value="Platos de pasta rápidos">Platos de pasta rápidos</option>
            <option value="Salteados">Salteados</option>
            <option value="Tacos y burritos">Tacos y burritos</option>
            <option value="Omelettes y tortillas">Omelettes y tortillas</option>
            <option value="Recetas de una olla">Recetas de una olla</option>
            <option value="Pizzas caseras rápidas">Pizzas caseras rápidas</option>
            <option value="Platos de arroz rápidos">Platos de arroz rápidos</option>
            <option value="Recetas de microondas">Recetas de microondas</option>
            <option value="Postres de frutas y crema">Postres de frutas y crema</option>
            <option value="Pasteles caseros">Pasteles caseros</option>
            <option value="Postres helados">Postres helados</option>
            <option value="Postres con chocolate">Postres con chocolate</option>
            <option value="Tartas de frutas">Tartas de frutas</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
        </>
    );
};

export default CrearReceta;