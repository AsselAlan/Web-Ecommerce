let productosContainer = document.getElementById("productos-container")

let productos = [
    {id: 1, nombre: "Iphone 13 128GB", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", 
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/10498530-1200-auto?v=637697437067800000&width=1200&height=auto&aspect=true",
        imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/10498531-1200-auto?v=637697437068730000&width=1200&height=auto&aspect=true", 
        imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/10498532-1200-auto?v=637697437070130000&width=1200&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 2, nombre: "Iphone 13 128GB", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", 
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14412098-1200-auto?v=637974729252230000&width=1200&height=auto&aspect=true", 
        imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14412099-1200-auto?v=637974729253800000&width=1200&height=auto&aspect=true", 
        imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/10498584-1200-auto?v=637697437321830000&width=1200&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 3, nombre: "Iphone 13 128GB", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", 
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/11758176-1200-auto?v=637799293593630000&width=1200&height=auto&aspect=true", 
        imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/11758177-1200-auto?v=637799293595030000&width=1200&height=auto&aspect=true", 
        imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/11758179-1200-auto?v=637799293597830000&width=1200&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 4, nombre: "Iphone 12 128GB", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", 
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/4950685-1200-auto?v=637405668416670000&width=1200&height=auto&aspect=true", 
        imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/4950686-1200-auto?v=637405668418400000&width=1200&height=auto&aspect=true", 
        imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/4950687-1200-auto?v=637405668422300000&width=1200&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 5, nombre: "Iphone 12 128GB", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis",  
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/4950761-1200-auto?v=637405686436800000&width=1200&height=auto&aspect=true", 
        imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/4950762-1200-auto?v=637405686438200000&width=1200&height=auto&aspect=true", 
        imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/4950763-1200-auto?v=637405686440870000&width=1200&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 6, nombre: "Iphone 12 64GB", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis",  
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/4950761-1200-auto?v=637405686436800000&width=1200&height=auto&aspect=true", 
        imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/4950762-1200-auto?v=637405686438200000&width=1200&height=auto&aspect=true", 
        imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/4950763-1200-auto?v=637405686440870000&width=1200&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 7, nombre: "Iphone 11 64GB", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis",  
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/4995802-1200-auto?v=637413375475100000&width=1200&height=auto&aspect=true", 
        imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/4995803-1200-auto?v=637413375476500000&width=1200&height=auto&aspect=true", 
        imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/4996626-1200-auto?v=637413410824870000&width=1200&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 8, nombre: "Iphone 11 64GB", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis",  
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/4996624-1200-auto?v=637413410821430000&width=1200&height=auto&aspect=true", 
        imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/4996625-1200-auto?v=637413410823470000&width=1200&height=auto&aspect=true", 
        imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/4950763-1200-auto?v=637405686440870000&width=1200&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
    {id: 9, nombre: "Iphone 11 64GB", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis",  
    imagenes:{
        imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/4999342-1200-auto?v=637413517630030000&width=1200&height=auto&aspect=true", 
        imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/4999343-1200-auto?v=637413517632200000&width=1200&height=auto&aspect=true", 
        imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/4999344-1200-auto?v=637413517633470000&width=1200&height=auto&aspect=true",
    },
    caracteristicas:{
        memoriainterna: "64 GB", camaratrasera: "50 Mpx", camarafrontal: "5 Mpx", memoriaram: "3 GB", microsd: "512 GB", sisop: "Android", verisionsis: "12", 
    }
    },
]



// RENDER PRODUCTOS--------------------

let inputbuscador = document.getElementById("inputbuscador")

function renderProductos(){ 
   
    productosContainer.innerHTML = ""
    let buscadorvalue = inputbuscador.value.toLowerCase()
    
        for (let producto of productos) {
            let nombre = producto.nombre.toLowerCase()
            if(nombre.indexOf(buscadorvalue) !== -1){
                productosContainer.innerHTML += 
              `     
              <div class="container">
                    <div class="head__section">
                        <span class="logo"></span>
                    </div>
                    <div class="display__product">
                        <img src="${producto.imagenes.imgurl1}" alt="">
                    </div>
                    <div class="display__products__list">
                        <img src="${producto.imagenes.imgurl1}" alt="">
                        <img src="${producto.imagenes.imgurl2}" alt="">
                        <img src="${producto.imagenes.imgurl3}" alt="">
                    </div>
                    <div class="product__details">
                        <div class="title__section">
                        <div class="title">
                            <h2>${producto.nombre}</h2>
                            <div class="heart" id="heart${producto.id}" onclick="hearOn(${producto.id})"></div>
                            <p>Envio: ${producto.envio}</p>
                        </div>
                        </div>
                        <div class="product__add">
                            <span class="price">$${producto.precio}</span>
                            <button id="agrgaralcarrito" onclick="agrgarAlCarrito(${producto.id}), mostrarProdCarr()">Agregar al carrito</button>
                        </div>
                    </div>
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

// let btnbuscar = document.getElementById("btnbuscar")
// btnbuscar.onclick = () => {renderProductos()}

inputbuscador.onchange = ()=>{renderProductos()}

renderProductos()


   
// CARRITO----------------------------

let btnAgrgarAlCarrito = document.getElementById("agrgaralcarrito")
let alertas = document.getElementById("alertas")




let carrito = []
if (localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    
}


function agrgarAlCarrito(id){
    
    for (let producto of productos) {
        if(id === producto.id) {
            carrito.push(producto)
            
            
        }
        localStorage.setItem('carrito', JSON.stringify(carrito))
        
        
    }   
}

let carritoBody = document.getElementById("body-carrito")
let carritoTotal = document.getElementById("carrito-total")
let total = 0

function mostrarProdCarr(){
    if(carrito == ""){
        carritoBody.innerHTML = `<h3>No se agrego ningun producto al carrito...</h3>` 
    }else{
        carritoBody.innerHTML = ""
        for (let productocarrito of carrito) {
            carritoBody.innerHTML += `   
            <div class="producto-carrito producto${productocarrito.id}"> 
            <h2><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-apple" viewBox="-2 0 20 20">
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
            </svg>${productocarrito.nombre}</h2>
            <p>Precio: $${productocarrito.precio}</p>
            <p>Envio: ${productocarrito.envio}</p>
            <button type="button" id="agrgaralcarrito" href="#ver-producto" data-bs-toggle="modal" onclick="verProduc(${productocarrito.id})" class="btn">Ver</button>
            <button type="button" id="borrarproductocarrito" onclick="borrarProducCarrito(${productocarrito.id})" class="btndelete"><span class="material-symbols-outlined">
            delete
            </span></button>
            </div>`
            total = total + productocarrito.precio
        }
    }
    carritoTotal.innerHTML = `<p>Total: $${total}</p>`
}

mostrarProdCarr()

let sectionCarrito = document.getElementById("section-carrito")


function verCarrito (){
    sectionCarrito.classList.toggle("carrito-off")
    // document.body.style.overflow = "hidden";
}

function carritoOff (){
    sectionCarrito.classList.add("carrito-off")
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
 
    localStorage.setItem('carrito', JSON.stringify(carrito))
    mostrarProdCarr()
}


function vaciarCarrito(){
    carrito = []
    total = 0
    localStorage.removeItem('carrito')
    mostrarProdCarr()
}


let btnvaciarcarrito = document.getElementById("btnvaciarcarrito")
btnvaciarcarrito.onclick = () => {vaciarCarrito()}

// LIKE----------------------------


let likes = []
// if (localStorage.getItem('likes')){
//     likes = JSON.parse(localStorage.getItem('likes'))
    
// }


function hearOn(id){
    
    let heart = document.getElementById(`heart${id}`)
    
 

    // heart.classList.toggle("heart")
    // heart.classList.toggle("heart__click")

    if(likes == ''){
        heart.classList.toggle("heart__click")
        heart.classList.toggle("heart")
        console.log("este producto me empezo a gustar")
        for (let producto of productos) {
            if(id === producto.id) {
                likes.push(producto)        
            }
        }
    }
}


