
/*creo el array del carrito*/
let carrito = []

/*obtengo el main donde se encuentran los productos */
contenedorProductos = document.getElementById("mainPrincipal")

/*listener e if para saber exactamente a que producto elegí agregar al carrito*/
contenedorProductos.addEventListener('click', (e) => {

    if (e.target.classList.contains('agregar')) {
        chequearProducto(e.target.id)
        // console.log(e.target.id)
    }
})

/*funcion para verificar si el producto seleccionado se encuentra en el carrito*/

const chequearProducto =(productoId) => {
    /*chequeo si en el carrito no hay un producto cuyo id sea igual al que estoy tratando de agregar y que obtengo previamente con el EventListener*/
    const productoRepetido = carrito.find(producto => producto.id == productoId)

    if(!productoRepetido)
    {   /*ya que no existe en el carrito, tengo que buscarlo en el stock por el id y lo guardo en la variable producto, luego lo pusheo al carrito*/
        const producto = stock.find(producto => producto.id == productoId)
       
        // carrito.push(producto2);
        carrito.push(producto)
        console.log(producto)
        console.log(carrito)
        pintarProductosCarrito(producto)
        actualizarCarrito(carrito)
    }
    else
    {
        /*le sumo en 1 unidad la propiedad cantidad del producto repetido del carrito.
        despues lo tengo q mostrar en el dom, asi que lo obtengo del document.getelementByid etc*/
        productoRepetido.cantidad++
        console.log(productoRepetido.cantidad)
        /*obtengo el producto que se repite con template literals usando backtips, obtengo su elemento cantidad a partir del id*/
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`)
        /*modifico el nodo texto con innertext*/
        cantidadProducto.innerText = `Cantidad: ${productoRepetido.cantidad}`
        actualizarCarrito(carrito)
    }
}

/*funcion para "pintar" o visualizar los productos  dentro del carrito*/

const pintarProductosCarrito = (producto) =>
{
    /*obtengo el contendor donde se encuentran todos mis productos*/
    const contenedor = document.getElementById("carrito-contenedor");
    /*creo un div*/
    const div = document.createElement("div");
    /*le agrego una clase al div la cual despues por medio de la class le voy a dar estilo en css*/
    div.classList.add("productoEnCarrito");
    div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
        <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
    `
    contenedor.appendChild(div)
}


/*funcion para actualizar el valor del precio y de la cantidad del carrito*/
const actualizarCarrito = (carrito)=>
{
    const cantidadTotal = carrito.reduce((acc, item) => acc+ item.cantidad ,0)
    const montoTotalCompra = carrito.reduce((acc,item)=> acc+ (item.cantidad*item.precio) ,0)
    visualizarCarrito(cantidadTotal,montoTotalCompra)
    /*llamo guardarStorageCarrito porque esta funcion es la ultima en iterar*/

     guardarStorageCarrito(carrito)
}

/*funcion para pintar o visualizar el total del carrito*/

const visualizarCarrito = (cantidad, monto) =>
{
    const contadorCarrito = document.getElementById("contador-carrito");
    const precio = document.getElementById("precioTotal")
  
    contadorCarrito.innerText=cantidad;
    precio.innerText=monto;
}



/*funcion para pintar o actualizar el carrito luego de haber eliminado algo*/

const carritoActualizado = (carrito) => {
    /*obtengo el contendor del modal entero*/
    const contenedor = document.getElementById("carrito-contenedor");
    /*le pinto un string vacio para borrar todo*/
    contenedor.innerHTML = " ";
    /*con un forEach lo recorro y vuelvo a pintar todo ya con los valores actualizados*/
    carrito.forEach(producto => {
 
    const div = document.createElement("div");
    /*le agrego una clase al div la cual despues por medio de la class le voy a dar estilo en css*/
    div.classList.add("productoEnCarrito");
    div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
        <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
    `
    contenedor.appendChild(div)
});
/*vuelvo a llamar a actualizarCarrito para que se actualicen las cantidades y el monto*/
actualizarCarrito(carrito)
}

/*funcion para eliminar productos del carrito */

const eliminarProducto =(productoId) =>{
    /*utilizo la funcion de orden superior FindIndex que me devuelve la posicion del array en donde se encuentra el id que obtengo por parametro*/
    
    const productoIndice = carrito.findIndex(producto => producto.id == productoId)
    /*tuve que agregar productoIndice.cantidad = 12; sino al borrar un producto del carrito, cuando lo agregaba de nuevo se agregaba con las cantidades anteriores*/
    carrito[productoIndice].cantidad = 1;
    console.log("cantidad es"+carrito[productoIndice].cantidad)
    /*con splice, que recibe 2 argumentos logro eliminar algo de un array. primero le digo el indice y luego la cantidad a eliminar, en este caso 1*/
    carrito.splice(productoIndice,1)
    console.log(productoIndice)
    carritoActualizado(carrito)
    actualizarCarrito(carrito)
}


// /*funcion para guardar en el Storage el carrito*/

const guardarStorageCarrito = (carrito) => {

/*transformo el array carrito en JSON*/
/*JSON.stringify para transformarlo en json*/
localStorage.setItem('carrito', JSON.stringify(carrito))
}



/*Funcion para OBTENER el carrito del storage*/
const obtenerStorageCarrito = () =>{
/*guardo en la variable carritoStorage y lo parseo ya que recibirá un JSON*/
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"))
    return carritoStorage

    /*return carritoStorage para despues CARGARLO cuando se actualice la pagina*/
}
0

/*Funcion para cargar el carrito del storage*/

const cargarCarrito = () => {

    /*primero pregunto si hay algo cargado en el storage llamado "carrito"*/
    if(localStorage.getItem("carrito"))
    {
        /*si existe "carrito" entrará al if, sino arrojará undefined*/
        /*se guardará en mi array carrito lo que este en el storage segun la funcion obtenerStorageCarrito*/
        carrito = obtenerStorageCarrito()
        /*ahora nuevamente pintamos o visualizamos el carrito*/
        pintarProductosCarrito(carrito)
        /*invocamos actualizar carrito para que actualice la cantidad y  el monto*/
        actualizarCarrito(carrito)
        carritoActualizado(carrito)

    }

}


