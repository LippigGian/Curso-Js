/* aqui se van a pintar los productos de venta del index */

const renderizarProductos = (stock) => {
    const contenedor = document.getElementById("producto-contenedor");

stock.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `
    

            <div class="col-md">
                <div class="row">
                    <div class="col">
                        <div class="product-item">
                        
                            <div class="product-image">
                                <a>
                                    <img src=${producto.imagen} alt="Product Image">
                                </a>
                                <div class="product-action">
                                    <a><i id=${producto.id}  class="fa fa-cart-plus agregar"></i></a>
                                    <a href="#"><i class="fa fa-heart"></i></a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="title"><p class="display-4">${producto.nombre}</p></div>
                                <div class "description"><p>${producto.desc}</p></div>
                                <div class="price">$${producto.precio} </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
`
    contenedor.appendChild(div); 
});

}  

renderizarProductos(stock)

