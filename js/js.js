let productosContainer = document.getElementById("productos-container")

let productos = [
    {id: 1, nombre: "Samsung A32", precio: 55000, stock: 5, marca:"Samsung", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 2, nombre: "Samsung A52", precio: 70000, stock: 5, marca:"Samsung", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 3, nombre: "Samsung A72", precio: 100000, stock: 5, marca:"Samsung", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 4, nombre: "Iphone 8", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 5, nombre: "Iphone 8 Plus", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 6, nombre: "Iphone 10", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 7, nombre: "Iphone 11", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis", imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 8, nombre: "Iphone 12", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis",  imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
    {id: 9, nombre: "Iphone 13", precio: 55000, stock: 5, marca:"Iphone", envio:"Gratis",  imgurl1:"https://exitocol.vtexassets.com/arquivos/ids/14992743-1600-auto?v=638005984526970000&width=1600&height=auto&aspect=true", imgurl2:"https://exitocol.vtexassets.com/arquivos/ids/14992748-800-auto?v=638005984534000000&width=800&height=auto&aspect=true", imgurl3:"https://exitocol.vtexassets.com/arquivos/ids/14992747-800-auto?v=638005984532270000&width=800&height=auto&aspect=true",},
]


function verProductos(){
    for (let producto of productos) {
        productosContainer.innerHTML += `
            <div class="producto">
                <div id="carrucel${producto.id}" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carrucel${producto.id}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carrucel${producto.id}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carrucel${producto.id}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
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
                <button type="button" class="btn btn-outline-success">Agregar al carrito</button>
            </div>
        ` 
    }
}

verProductos()