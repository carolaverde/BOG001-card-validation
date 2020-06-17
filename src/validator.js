const validator = {
  isValid: function (creditCardNumber) {
    let arrayNumero = new Array();
    //convierte la cadena en arreglo
    let numero = creditCardNumber;
    for (let indice = 0; indice < numero.length; indice++) {
      arrayNumero[indice] = numero.charAt(indice);
    }
    //arrayCosa[0] = cosa.charAt(0);
    //arrayCosa[1] = cosa.charAt(1);
    let numeroReversa = arrayNumero.reverse();
    for (let indice = 0; indice < numeroReversa.length; indice++) {
      let posicion = indice + 1;
      if (posicion % 2 == 0) {
        let resultado = numeroReversa[indice] * 2;
        //console.log("mensaje resultado" + resultado);
        if (resultado > 9) {
          let resultadoString = resultado.toString();
          resultado = parseInt(resultadoString.charAt(0)) + parseInt(resultadoString.charAt(1));
        }
        numeroReversa[indice] = resultado;
      }
    }
    let resultado2 = 0;
    for (let indice = 0; indice < numeroReversa.length; indice++) {
      resultado2 = resultado2 + parseInt(numeroReversa[indice]);
    }
    //console.log (resultado2);

    if (resultado2 % 10 == 0) {
      //console.log("true");
      return true;
    } else {
      //console.log ("false");
      return false;
    }
  },


  maskify: function (creditCardNumber) {
    let maskify = ""
    for (let indice = 0; indice < creditCardNumber.length - 4; indice++) {
      maskify = maskify + "#";
    }
    return maskify + creditCardNumber.substring(creditCardNumber.length - 4, creditCardNumber.length);
  }

};

export default validator;
