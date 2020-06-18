import validator from './validator.js';
document.getElementById("validar").addEventListener("click",final);
function final(){
    let numero = document.getElementById("tarjetaCredito").value;
    document.getElementById("tarjetaCredito").value= validator.maskify(numero);
    //console.log("Numero de tarjeta es: " + numero);
    let resultado = validator.isValid(numero);
    //console.log("Resultado es: " + resultado);
    if (resultado == true){  
    alert ("Gracias por su compra");
        return true;
    } else { 
        alert("Tarjeta de crédito no valida");
        return false;
    }


}




