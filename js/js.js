let productosContainer = document.getElementById("productos-container")

let productos = [
    {id: 1, nombre: "Samsung A32", precio: 55000, stock: 5, marca:"Samsung", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 2, nombre: "Samsung A52", precio: 70000, stock: 5, marca:"Samsung", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 3, nombre: "Samsung A72", precio: 800000, stock: 5, marca:"Samsung", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 4, nombre: "Iphone 8", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 5, nombre: "Iphone 8 Plus", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 6, nombre: "Iphone 10", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 7, nombre: "Iphone 11", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 8, nombre: "Iphone 12", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis",  imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 9, nombre: "Iphone 13", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis",  imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
]


function renderProductos(){
    for (let producto of productos) {
        productosContainer.innerHTML += `
            <div class="producto">
                <span class="span-ver-producto" data-bs-toggle="modal" href="#ver-producto" onclick="verProduc(${producto.id})">
                    <div id="carrucel${producto.id}" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src="${producto.imgurl1}" class="d-block w-100" alt="...">  
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="${producto.imgurl2}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="${producto.imgurl3}" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carrucel${producto.id}" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carrucel${producto.id}" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <h2>${producto.nombre}</h2>
                    <p>Precio: $${producto.precio}</p>
                    <p>Envio: <span>${producto.envio}</span></p>
                </span>
                    <button type="button" id="agrgaralcarrito" onclick="agrgarAlCarrito(${producto.id}), mostrarProdCarr()" class="btn btn-outline-success">Agregar al carrito</button>
            </div>
        ` 
    }
}

renderProductos()



let btnAgrgarAlCarrito = document.getElementById("agrgaralcarrito")

let carrito = []

function agrgarAlCarrito(id){
    for (let producto of productos) {
        if(id === producto.id) {
            carrito.push(producto)
        }
    }
}

let carritoBody = document.getElementById("body-carrito")
let carritoTotal = document.getElementById("carrito-total")
let total = 0

function mostrarProdCarr(){
    carritoBody.innerHTML = ""
    for (let productocarrito of carrito) {
        carritoBody.innerHTML += `   
        <div class="producto-carrito producto${productocarrito.id}"> 
        <h2>${productocarrito.nombre}</h2>
        <p>Precio: $${productocarrito.precio}</p>
        <p>Envio: ${productocarrito.envio}</p>
        <button type="button" id="borrarproductocarrito" onclick="borrarProducCarrito(${productocarrito.id})"><span class="material-symbols-outlined">
        delete
        </span></button>
        </div>`
        total = total + productocarrito.precio
    }
    carritoTotal.innerHTML = `<p>Total      = $${total}</p>`
}


function borrarProducCarrito(id){
    for (let i = 0; i < carrito.length; i++) {
        if(carrito[i].id === id)
            carrito.splice(i, 1)
            carritoBody.innerHTML = ""
    }
    total = 0
    mostrarProdCarr()
}


let verProducto = document.getElementById("modal-ver-producto")

function verProduc(id){

    for (let i = 0; i < productos.length; i++) {
        if(productos[i].id === id)
            verProducto.innerHTML = `   
            <div class="ver-producto">
                        <div id="carrucel${productos[i].id}" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="${productos[i].imgurl1}" class="d-block w-100" alt="...">  
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="${productos[i].imgurl2}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${productos[i].imgurl3}" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carrucel${productos[i].id}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carrucel${productos[i].id}" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <h2>${productos[i].nombre}</h2>
                        <p>Precio: $${productos[i].precio}</p>
                        <p>Envio: <span>${productos[i].envio}</span></p>
                </div>
            ` 
        }
    }

   
