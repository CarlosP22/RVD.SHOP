
const cards=document.getElementById('cards');
const items=document.getElementById('items');
const footer=document.getElementById('footer');
const templateCard=document.getElementById('template-card').content;
const templateFooter=document.getElementById('template-footer').content;
const templateCarrito=document.getElementById('template-carrito').content;
const fragment=document.createDocumentFragment();
let carrito={};
/*export const CarritoDeCompras = () => { 
    return(  
        <div id="root">
                <div class="container">  </div>
                       
            </div>
    ) 
}*/


document.addEventListener('DOMContentLoaded',()=>{
    fetchData();
    if(localStorage.getItem('carrito')){
        carrito=JSON.parse(localStorage.getItem('carrito'));
        pintarCarrito();
    }
})

cards.addEventListener('click',evento=>{
    adicionarCarrito(evento);

})
items.addEventListener('click',evento=>{
    btnAccion(evento);

})

const fetchData =async()=>{
    try{
        const leer= await fetch('datos.json');
        const data = await  leer.json();
        pintarCards(data);
    } catch(error){
        console.log(error);
    }

}
const pintarCards = data =>{
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent=producto.descripcion;
        templateCard.querySelector('p').textContent=producto.precio;
        templateCard.querySelector('img').setAttribute('src',producto.url);
        templateCard.querySelector('.btn-dark').dataset.id=producto.id;
        templateCard.querySelector('h4').textContent=producto.stock;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
        //console.log(producto);
    })
    cards.appendChild(fragment);
        

}
const adicionarCarrito = evento=>{
    if(evento.target.classList.contains('btn-dark')){
       cargarCarrito(evento.target.parentElement);
    }
    //detener otro evento que se genere
   evento.stopPropagation(); 
}
const cargarCarrito = objeto=>{
    const producto ={
        id:objeto.querySelector('.btn-dark').dataset.id,
        descripcion:objeto.querySelector('h5').textContent,
        precio:objeto.querySelector('p').textContent,
        stock:objeto.querySelector('h4').textContent,
        cantidad:1
    }
    //console.log(carrito.hasOwnProperty(producto.id));
    //console.log(producto.stock);
    let value=Number(producto.stock);
   

    if (carrito.hasOwnProperty(producto.id)){
        
        if(carrito[producto.id].cantidad<value){
            producto.cantidad=carrito[producto.id].cantidad+1;
           // console.log(producto.cantidad);
        }
       
    }
    carrito[producto.id]={...producto};
    pintarCarrito();
    


}
const pintarCarrito = () =>{
    console.log(carrito);
    items.innerHTML='';
    Object.values(carrito).forEach(producto=>{
        templateCarrito.querySelector('th').textContent=producto.id;
        templateCarrito.querySelectorAll('td')[0].textContent=producto.descripcion;
        templateCarrito.querySelectorAll('td')[1].textContent=producto.cantidad;
        templateCarrito.querySelector('.btn-success').dataset.id=producto.id;
        templateCarrito.querySelector('.btn-secondary').dataset.id=producto.id;
        templateCarrito.querySelector('span').textContent=producto.cantidad*producto.precio;
        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);

    })
    items.appendChild(fragment);
    pintarfooter();
    //localStorage guarda todo como texto plano y lo debemos convertir en una coleccion de objetos tipo JSON
    localStorage.setItem('carrito',JSON.stringify(carrito));
}
const pintarfooter=()=>{
    footer.innerHTML='';
    if(Object.keys(carrito).length===0){
       // footer.innerHTML='Carrito vacio -comience a comprar! ';
       footer.innerHTML=`<th scope=""row" colspan="5">Carrito vacio -comience a comprar! </th>`;
        return;
    }
    const ncantidad=Object.values(carrito).reduce((acc,{cantidad})=>acc+cantidad,0);
    const nprecio=Object.values(carrito).reduce((acc,{cantidad,precio})=>acc+cantidad*precio,0);
    templateFooter.querySelectorAll('td')[0].textContent=ncantidad;
    templateFooter.querySelector('span').textContent=nprecio;
    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);

    const btnVaciar=document.getElementById('vaciar-carrito');
    btnVaciar.addEventListener('click',evento=>{
        carrito={};
        pintarCarrito();
    
    })
    
}

const btnAccion=evento=>{
    console.log(evento.target);
    const producto=carrito[evento.target.dataset.id];
    if(evento.target.classList.contains('btn-success') && producto.cantidad <producto.stock){
        
        producto.cantidad++;
        carrito[evento.target.dataset.id]={...producto};
        pintarCarrito();
    }
    if(evento.target.classList.contains('btn-secondary') && producto.cantidad>0){
        producto.cantidad--;
        if(producto.cantidad===0){
            delete carrito[evento.target.dataset.id];
        }
        pintarCarrito();
    }
    evento.stopPropagation();
}