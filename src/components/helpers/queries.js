const URL_usuario = import.meta.env.VITE_API_USUARIO
const URL_recetas = import.meta.env.VITE_API_RECETA

//get sn las petitciones que devuelven una lista de elementos y puede devolver un solo elemento
//post permite agregr elementos
//put / patch modifica elementos
//delete borra elementos


export const loginUsuario = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios= await respuesta.json();

        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado
            }else{
                console.log("el password es incorrecto")
                return false;
            }
        }else{
            console.log("el mail no existe")
            return false;
        }
    }catch(error){
        console.log(error)
    }
}

export const obtenerRecetas = async ()=>{
    try{
        const respuesta = await fetch(URL_recetas);
        const listaRecetas = await respuesta.json();
        return listaRecetas;
    }catch(error){
        console.log(error)
    }
}
export const crearRecetas = async (receta)=>{
    try{
        const respuesta = await fetch(URL_recetas,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(receta)
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}
export const borrarRecetas = async (id)=>{
    try{
        const respuesta = await fetch(URL_recetas+'/'+id,{
            method: "DELETE",

        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}
export const obtenerUnaReceta = async (id)=>{
    try{
        const respuesta = await fetch(URL_recetas+'/'+id);
        const receta = await respuesta.json();
        return receta;
    }catch (error){
        console.log(error)
    }
}
export const editarReceta = async (receta, id)=>{
    try{
        const respuesta = await fetch(URL_recetas+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(receta)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}