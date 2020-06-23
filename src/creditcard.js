import validator from './validator.js';
document.getElementById("validar").addEventListener("click", final);

function final() {
  let numero = document.getElementById("tarjetaCredito").value;
  document.getElementById("tarjetaCredito").value = validator.maskify(numero);
  //console.log("Numero de tarjeta es: " + numero);
  let resultado = validator.isValid(numero);
  //console.log("Resultado es: " + resultado);
  let numeromaskify = validator.maskify(numero);
  let resultadoFinal = document.getElementById("resultadofinal");
  if (resultado == true) {
    //alert("Gracias por su compra");
    resultadoFinal.textContent="Tarjeta " + numeromaskify + " válida. Gracias por su compra";
    return true;
  } else {
    resultadoFinal.textContent="Tarjeta " + numeromaskify + " no válida, por favor ingrese nuevamente sus datos";
    //alert("Tarjeta de crédito no valida");
    return false;
  }


}
