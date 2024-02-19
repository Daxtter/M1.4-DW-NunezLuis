let finDeTransimisionDeDatos = function (id,callback){
    console.log('Transferencia',id,'terminada');
    callback(); //Se hace el llamado a la funcion para que haya un orden
}

let obtenDatosDeInternet =  function(id, duracion,callback){
    console.log ('proceso', id, 'obteniendo datos de internet');
    setTimeout(finDeTransimisionDeDatos,duracion,id,callback);
}




module.exports.getDatos = obtenDatosDeInternet;
