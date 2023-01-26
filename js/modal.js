const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');

const finalizarCompra = document.getElementsByClassName("finalizar-compra");
/*abrircarrito o cesta-carrito es el boton*/
abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

/*agrego el evento al modal del carrito y le pregunto si el target de donde hago click tiene la clase boton-eliminar, en caso afirmativo elimino el elemento que coincida con su value.

previamente nosotros guardamos en la propiedad value de cada boton el producto.id */
modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation()
    if (e.target.classList.contains('boton-eliminar')) {
    eliminarProducto(e.target.value)
    }
})

