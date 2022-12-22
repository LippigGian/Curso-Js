//funcion de calculadora de divisas
const calculadoraDivisas = () => {
  let monto = 0;
  let precioDolar = 330;
  let precioEuro = 355;
  let precioReal = 33;
  let seguirConvirtiendo = false;
  let montoTotal = 0;
  let resultado = 0;

  do {
    monto = parseInt(prompt("Ingrese que monto de AR$ desea convertir: "));

    const cantidadValidada = validarCantidad(monto); //invoco a la funcion y le paso el parametro que quiero pasarle a la funcion (es buena practica usar const y no let)
    //ademas le asigno el valor de la funcion a la variable "cantidadValidada"

    tipoMoneda = prompt("¿A que divisa desea convertir? ¿Euro, Dolar o Reales?").toUpperCase();
    console.log(tipoMoneda); //para chequear el valor de tipoMoneda

    const resultado = calcular(cantidadValidada, tipoMoneda, precioDolar, precioEuro, precioReal);
    console.log(resultado); //para chequear el valor de resultado

    switch (tipoMoneda) {
      case "EURO":
        alert("Seleccionaste Euro. Tu cambio es de " + resultado +" Euros");
        break;
      case "DOLAR":
        alert("Seleccionaste Dolar. Tu cambio es de " + resultado +" Dolares");
        break;
      case "REALES":
        alert("Seleccionaste Reales. Tu cambio es de " + resultado +" Reales");
        break;

      default:     
            monto = 0;
        break;

    }

    montoTotal += monto;
    console.log(montoTotal); // para chequear el valor de montoTotal

    if (tipoMoneda != "EURO" || tipoMoneda != "DOLAR" || tipoMoneda != "REALES" ) {
        seguirConvirtiendo = confirm("Opción inválida. ¿Desea convertir otra divisa?");
    }
    else
    {
    seguirConvirtiendo = confirm("¿Desea convertir otra divisa?");
    }

  } while (seguirConvirtiendo);
  alert("Usted ha cambiado un total de " + montoTotal + " pesos");

  function validarCantidad(monto) {
    while (Number.isNaN(monto) || monto === 0) {
      if (monto !== 0) {
        alert("Debe agregar un número.");
      } else {
        alert("Debe agregar un número distinto de cero.");
      }
      monto = parseInt(prompt("Ingrese el monto que desea convertir sus AR$"));
    }
    return monto; /*return monto para que vuelva a la linea 40 donde la funcion es invocada*/
  }


  function calcular(cantidadValidada, tipoMoneda, precioDolar, precioEuro, precioReal) {
    switch (tipoMoneda) {
      case "EURO":
        resultado = cantidadValidada / precioEuro;
        return resultado;

        break;

      case "REALES":
        resultado = cantidadValidada / precioReal;
        return resultado;
        break;

      case "DOLAR":
        resultado = cantidadValidada / precioDolar;
        return resultado;
        break;

      default:
        break;
    }
  }
};

calculadoraDivisas();