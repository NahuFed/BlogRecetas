import { Routes, Route } from "react-router-dom";
import Administrador from "../components/views/Administrador";
import EditarReceta from "../components/views/receta/EditarReceta";
import CrearReceta from "../components/views/receta/crearReceta";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear-receta"
          element={<CrearReceta></CrearReceta>}
        ></Route>
        <Route
          exact
          path="/editar-receta/:id"
          element={<EditarReceta></EditarReceta>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
