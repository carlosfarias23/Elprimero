console.log("Buenos dias estrellitas")
function asignarOReservaMesa(cantidadPersonas) {
    var mesa = "mesa1";
    var numeroDePersonas = cantidadPersonas;
    if (numeroDePersonas >=2) {mesa = "mesa 1"}
    else if (numeroDePersonas <2) {mesa="barra de solteros"}
    else if (numeroDePersonas >6) {mesa= "mesa 8"}
    else if (numeroDePersonas <1) {mesa="ingresa numero de personas papu"}
    console.log ("las",numeroDePersonas, "personas pueden sentarse en:", mesa);
    alert("las" + numeroDePersonas + "personas pueden sentarse en" + mesa);   
}

 function asignarArea(ConOSinHijos)
    const area = "zonaAzul";
    const siONo = ConOSinHijos
    if (siONo = si ) { area = "La Zona roja restringida"}
    else if (siONo = no) {area = "un acceso a la Zona roja por +50dls"}
    console.log ("cliente o clientes con",siONo, "continue a" + area)


for (let index=0; index <10; index++) {
    console.log("inicia for")
       if(index != 3) {
    console.log(index);
    break;
       }
       console.log("termino for")
}
    console.log("termino el trabajo")