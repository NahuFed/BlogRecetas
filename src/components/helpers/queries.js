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
