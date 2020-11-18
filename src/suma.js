function suma(...numeros){
    // Verificar si hay elementos a sumar
    if (numeros.length == 0){
       throw new Error("Debe informar los números"); 
    }

    // Realizamos la suma de los números
    let sum = 0;

    for (let numero of numeros){
        sum += numero;
    }
    return sum;
}

//export { suma };
module.exports = suma