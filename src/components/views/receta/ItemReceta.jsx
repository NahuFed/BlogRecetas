import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditarReceta from "./EditarReceta";
import { borrarRecetas, obtenerRecetas } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemReceta = ({ receta, setRecetas }) => {
  const eliminarReceta = () => {
    borrarRecetas(receta.id).then((respuesta) => {
      Swal.fire({
        title: "Esta seguro?",
        text: "No podrás ser capaz de revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borralo!",
      }).then((result) => {
        if (result.isConfirmed) {
          if (respuesta && respuesta.status === 200) {
            Swal.fire(
              "Receta eliminada",
              `La receta ${receta.nombreReceta} fue eliminada correctamente`,
              "success"
            );
                obtenerRecetas().then((respuesta)=> {
                    if (respuesta){
                        setRecetas(respuesta)
                    }
                })
          } else {
            Swal.fire(
              "A ocurrido un error",
              `La receta ${receta.nombreReceta} no pudo ser eliminada`,
              "error"
            );
          }
        }
      });
    });
  };

  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>{receta.complejidad}</td>
      <td>{receta.imagen}</td>
      <td>{receta.categoria}</td>
      <td>
        <Link to={"editar-receta"} className="btn btn-warning">
          Editar
        </Link>{" "}
        <Button variant="danger" onClick={eliminarReceta}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
