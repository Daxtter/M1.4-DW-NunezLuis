const servicio = require("./servicioDatosCallback");

servicio.getDatos(1,3000, ()=>{
    servicio.getDatos(2,500,() => {
        servicio.getDatos(3,4000, () =>{
            servicio.getDatos(4,700,()=>{
                servicio.getDatos(5,3500,()=>{
                    //Funcion sin nada
                })
            })
        })
    })
})
   