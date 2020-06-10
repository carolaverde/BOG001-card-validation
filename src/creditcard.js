import validator from './validator.js';
document.getElementById("validar").addEventListener("click",final);
function final(){
    let numero = document.getElementById("tarjetaCredito").value;
    //console.log("Numero de tarjeta es: " + numero);
    let resultado = validator.isValid(numero);
    //console.log("Resultado es: " + resultado);
    if (resultado == true){
        window.location.href = "final.html";
        return true;
    } else { 
        alert("Tarjeta de crédito no valida");
        return false;
    }
}




