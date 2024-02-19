const listaDeClaves =["112345","456721","123523","103875","1182533","112397","907843","123481","123457","602356"];
const listaDeNombres =["Sistemas de control","Diseno Digital","Programacion Estructurada","Programacion Orientada a Objetos","Inteligencia Artificial","Documentacion tecnica","Microcontroladores","Base de datos","Redes de computadoras","Ingenieria en software"];
let numeroDeProcesos = (process.argv[2]);
let listaDeObjetos = [];
try{
    if( typeof numeroDeProcesos == "undefined");
        throw "ingrese un numero en la terminal";    


    fechaAEvaluar = new Date("2023-03-12");
    listaDeObjetos = declararListaDeObjetos(numeroDeProcesos);
    listaDeObjetos = listaDeObjetos.filter(x => x.calificacion > 60 && x.fecha < fechaAEvaluar);
    
    listaDeObjetos = listaDeObjetos.map(function (x){
        return cambiarLaListaDelObjeto(x);
    })
    
    //console.log(listaDeObjetos[1].fecha.getMonth());
    console.log(listaDeObjetos);

}
catch(err){
console.log("'Errror, " + err);
}

function cambiarLaListaDelObjeto(x)
{
    let cadena = "";
    cadena = cadena +(x.fecha.getDay()+1) +"/"+(x.fecha.getMonth()+1)+"/"+(x.fecha.getFullYear());
    NuevoObjeto = new Object();
    NuevoObjeto.clave = x.clave;
    NuevoObjeto.calificacion = x.calificacion;
    NuevoObjeto.fechaStr = cadena;
    return NuevoObjeto;
}

function declararListaDeObjetos(numero)
{
    let listaDeObjetosDeclarados = [];
    let fechaInicio = new Date("2021-01-01");
    let fechaFinal = new Date("2023-06-30")
    for(let i = 0; i <numeroDeProcesos; i++ )
    {
        listaDeObjetosDeclarados.push(new Object());
        listaDeObjetosDeclarados[i].clave = listaDeClaves[Math.floor(Math.random() * listaDeClaves.length +1)]
        listaDeObjetosDeclarados[i].nombre = listaDeNombres[Math.floor(Math.random() * listaDeNombres.length +1)]
        listaDeObjetosDeclarados[i].creditos = Math.floor(Math.random() * (8-4+1) +4);
        listaDeObjetosDeclarados[i].calificacion = Math.random()*100;
        listaDeObjetosDeclarados[i].fecha = new Date(Math.floor(Math.random()*(fechaInicio.getTime()-fechaFinal.getTime()+1)+fechaInicio.getTime()));
        //Para crear la fecha aleatorio se da uso del metodo getTime, en el cual regresa un valor
        //segun sea el tiempo, entonces desde ese rango de tiempo se puede hacer un numero aleatorio.
        
    }
    return listaDeObjetosDeclarados;
}
