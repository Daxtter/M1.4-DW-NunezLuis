let finDeTransimisionDeDatos = function (id){
    console.log('Transferencia',id,'terminada');
}

let obtenDatosDeInternet =  function(id, duracion){
    console.log ('proceso', id, 'obteniendo datos de internet');
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(finDeTransimisionDeDatos(id));
        },duracion);
    })
}




module.exports.getDatos = obtenDatosDeInternet;
