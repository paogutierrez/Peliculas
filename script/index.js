import {data} from '../data/data.js'

const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');

//addEventListener = escucha/controla los eventos
//DOMContentLoaded GARANTIZA QUE nos llame la funcion cargarImagen luego de que cargue el DOM

document.addEventListener('DOMContentLoaded', () => {
    cargarImagen(data)
})
//crear una funcion para trasladar las imagenes
const cargarImagen = data =>{
    console.log(data);
    data.forEach(pelicula => { 
        //desestructuracion de objetos

        const {imagen} = pelicula;
        
        templateCard.querySelector('img').setAttribute('src' ,imagen);

        const clone = templateCard.cloneNode(true);

        fragment.appendChild(clone);


    })
    items.appendChild(fragment);
}