/*necesito crear una funcion que inicie todo el ciclo, en la cual voy a preguntar en que orden quiero mostrar las divisas*/
const inicioCiclo = () =>{
    const inicio = confirm("¿Desea ordenar las divisas de la mas barata a la mas cara?")
    if (inicio)
    {
        ordenarMenorMayor()
    }
    else
    {
        ordenarMayorMenor()
    }
}

// Array para el carrito de compras
const carrito = []

/*Funcion para ordenar de menor a mayor utilizando SORT*/
const ordenarMenorMayor = () => {

    /*sort para ordenar el array*/
    monedas.sort((a,b) => a.valor - b.valor)
    mostrarListaOrdenada()
};

/*Funcion para ordenar de mayor a menor utilizando SORT*/
const ordenarMayorMenor = () => {
    /*sort para ordenar el array*/
    monedas.sort((a,b) => b.valor - a.valor)
    mostrarListaOrdenada()
};

/*con esta funcion muestro el array ya ordenado*/
const mostrarListaOrdenada = () => {
    const mostrar = monedas.map(moneda => {
        return moneda.nombre + " $"+ moneda.valor+ "\n"})
    alert(mostrar)
    tipoMoneda()
}


/*inicio del programa en si*/
const tipoMoneda = () =>{
do {
    const monedaTipo = prompt("¿A que divisa desea convertir sus pesos? ¿Dolar, Euro, Real, Libra o Bitcoin?")

    const monedaMonto = parseFloat(prompt("¿Qué cantidad de pesos desea convertir?"))

    const moneda = monedas.find(moneda => moneda.nombre.toLowerCase() === monedaTipo.toLowerCase())
    console.log(monedaTipo)

    if (moneda) {
        alert("Usted recibe "+monedaMonto/moneda.valor+" de "+moneda.nombre)
        
        agregarAlCarrito(moneda, moneda.id, monedaMonto)

    } else {
        alert('La moneda seleccionada es invalida')
    }
    confirmar = confirm('¿Desea realizar otra operación?')

} while (confirmar);

confirmarCompra()
console.log(monedas)
}
/*Funcion para agregar al "carrito" las monedas y tipo que lleva*/
    const agregarAlCarrito = (moneda, monedaId, monedaMonto) => {

        const productoRepetido = carrito.find(moneda => moneda.id === monedaId)
        if (!productoRepetido) {
            moneda.cantidad += monedaMonto/moneda.valor;
            carrito.push(moneda)
        } else {
            productoRepetido.cantidad += monedaMonto/moneda.valor;
        }
    };
/*Checkout para mostrar que tipo y cantidad de monedas lleva*/
    const confirmarCompra = () => {
        const listaProductos = carrito.map(monedas => {
        return '-Usted ha cambiado '+monedas.cantidad +' de: '+monedas.nombre
        })
        console.log(listaProductos) 

        if(listaProductos.length === 0)
        {
            alert("No seleccionaste ninguna opción válida")
        }
        else
        {
            alert('Checkout: '+'\n\n'+listaProductos.join('\n'))
        }
}

/*inicioCiclo va al o ultimo de todo*/
inicioCiclo()
