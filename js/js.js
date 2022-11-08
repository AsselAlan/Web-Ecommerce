let productosContainer = document.getElementById("productos-container")

let productos = [
    {id: 1, nombre: "Samsung A32", precio: 55000, stock: 5, marca:"Samsung", envio:"Gratis", 
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 2, nombre: "Samsung A52", precio: 70000, stock: 5, marca:"Samsung", envio:"Gratis", 
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 3, nombre: "Samsung A72", precio: 800000, stock: 5, marca:"Samsung", envio:"Gratis", 
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 4, nombre: "Iphone 8", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", 
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 5, nombre: "Iphone 8 Plus", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", 
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 6, nombre: "Iphone 10", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", 
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 7, nombre: "Iphone 11", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", 
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 8, nombre: "Iphone 12", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis",  
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 9, nombre: "Iphone 13", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis",  
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
]

let inputbuscador = document.getElementById("inputbuscador")

function renderProductos(){ 
   
    productosContainer.innerHTML = ""
    let buscadorvalue = inputbuscador.value.toLowerCase()
    
        for (let producto of productos) {
            let nombre = producto.nombre.toLowerCase()
            if(nombre.indexOf(buscadorvalue) !== -1){
                productosContainer.innerHTML += `
                <div class="producto">
                    <span class="span-ver-producto" data-bs-toggle="modal" href="#ver-producto" onclick="verProduc(${producto.id})">
                        <div id="carrucel${producto.id}" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                 <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="${producto.imagenes.imgurl1}" class="d-block" alt="...">  
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="${producto.imagenes.imgurl2}" class="d-block" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${producto.imagenes.imgurl3}" class="d-block" alt="...">
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
        if(productosContainer.innerHTML === ""){
            productosContainer.innerHTML += `
            <div class="error">
            <h2>No se encontro ningun producto...</h2>
            </div>`
        }
}


renderProductos()

let verProducto = document.getElementById("modal-ver-producto")

function verProduc(id){

    for (let i = 0; i < productos.length; i++) {
        if(productos[i].id === id)
            verProducto.innerHTML = `   
            <div class="modal-ver-producto" id="modal-ver-producto">
                        <div class="ver-producto">
                        <div id="carrucelproducto${productos[i].id}" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="${productos[i].imagenes.imgurl1}" class="d-block" alt="...">  
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="${productos[i].imagenes.imgurl2}" class="d-block" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${productos[i].imagenes.imgurl3}" class="d-block" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carrucelproducto${productos[i].id}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carrucelproducto${productos[i].id}" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="producto-info">
                            <h2>${productos[i].nombre}</h2>
                            <div>
                                <p>Precio: $${productos[i].precio}</p>
                                <p>Envio: ${productos[i].envio}</p>
                            </div>
                            <h3>Caracteristicas:</h3>
                            <div>
                                <p>Memoria interna: ${productos[i].caracteristicas.memoriainterna}</p>
                                <p>Memoria RAM: ${productos[i].caracteristicas.memoriaram}</p>
                                <p>Camara tracera: ${productos[i].caracteristicas.camaratrasera}</p>
                                <p>Camara frontal: ${productos[i].caracteristicas.camarafrontal}</p>
                                <p>Memoria SD: ${productos[i].caracteristicas.microsd}</p>                            
                                <p>Sistema operativo: ${productos[i].caracteristicas.sisop}</p>
                                <p>Version del Sistema operativo: ${productos[i].caracteristicas.verisionsis}</p>
                            </div>
                        </div>
                </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="agrgaralcarrito" onclick="agrgarAlCarrito(${productos[i].id}), mostrarProdCarr()" class="btn btn-outline-success">Agregar al carrito</button>
                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Cerrar</button>
                    </div>               
            ` 
        }
    }

   

let btnAgrgarAlCarrito = document.getElementById("agrgaralcarrito")
let alertas = document.getElementById("alertas")

let carrito = []

function agrgarAlCarrito(id){
    for (let producto of productos) {
        if(id === producto.id) {
            carrito.push(producto)
            alertas.innerHTML += `
            <div class="alert-incarrito animate__animated animate__fadeInRight" id="alert-incarrito${id}">
            <p>Producto agregado</p>
            </div>
            `            
        }
    }   
    console.log(carrito)
   
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
    carritoTotal.innerHTML = `<p>Total: $${total}</p>`
}

let offcarrito = document.getElementById("alert-offcarrito")


function borrarProducCarrito(id){
    console.log(id)
   
    for (let i = 0; i < carrito.length; i++) {
        if(carrito[i].id === id)
            carrito.splice(i, 1)
            carritoBody.innerHTML = ""
    }
    total = 0
    offcarrito.classList.remove("animate__fadeOutRight")
    offcarrito.classList.remove("alert-off")
    offcarrito.classList.add("animate__fadeInRight")
    setTimeout(()=>{
        offcarrito.classList.add("animate__fadeOutRight")
        offcarrito.classList.remove("animate__fadeInRight")
    } , 1200);
    mostrarProdCarr()
    console.log(carrito)
}


function vaciarCarrito(){
    carrito = []
    total = 0
    mostrarProdCarr()
}