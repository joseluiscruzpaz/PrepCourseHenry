function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}

function otraFuncion(){
    return(
        "El nombre retornado por la funcion 'cuidadoConElConsolelog' es: " + 
        cuidadoConElConsoleLog('Luis')
    );
}

function cuidadoConElReturn(nombre){
    return nombre;
    console.log(nombre);
}