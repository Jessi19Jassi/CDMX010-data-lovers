import {filterFemale, filterAlive, filterDead, filterSunknown, orderData } from './data.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';

let personajes = rickandmorty.results;
let filGender= document.getElementById('filGender');
let filStatus= document.getElementById('filStatus');
let female = document.getElementById('female');
let male = document.getElementById('male');
let unknown = document.getElementById('unknown');
let boton = document.getElementById('hamburguer');
let buttonAll = document.getElementById('showAll');

//**Impresión de Género**

document.addEventListener('DOMContentLoaded',()=>{
    filStatus.addEventListener('change',(e)=>{
        const userStatus = e.target.value; 
        const alive = filterAlive(personajes, 'Alive', userStatus);
         createCards(alive);
 
         console.log("Estoy escuchando el", e.target.value)
     })
    filGender.addEventListener('change',(e)=>{

        const user = e.target.value;
        console.log("Estoy escuchando el",user)
        const nuevo = filterFemale(personajes, 'Female', user);
        createCards(nuevo);


    })
});




//**Impresión de ordenamiento**

const order = document.getElementById('order');
    order.addEventListener ('change', (event) => {
    const sortOrder = event.target.value;
    const orderedData = orderData(personajes, 'name', sortOrder)
    createCards(orderedData);
})

//**Tarjetas**
const createCards = data => {
    let showAll = data.map((element) =>{
        return  `
            <div class="card">
                <img src="${element.image}"/> 
                <div>
                    <h4> Name: ${element.name}</h4>
                    <p class="status"> Status: ${element.status}</p>
                    <p class="gender"> Gender: ${element.gender}</p>
                    <p class="origin"> Origin: ${element.origin.name}</p>
                    <p> Species: ${element.species}</p>
                    <p> Type: ${element.type}</p>
                </div>
            </div> 
            `;
        }).join(" ");
       document.getElementById("area").innerHTML = showAll;
}

 
buttonAll.addEventListener("click", ()=>{
    createCards(personajes);
    console.log("Regreso todos los personajes");
});

        document.getElementById('next').addEventListener("click", function(){
            displayOne.style.display = 'none'; //Ocultar
            displayTwo.style.display = 'block'; //Mostrar
        
            createCards(personajes);


        // **Función del menú hamburguesa**   

        function showMenu(){
             let menu = document.getElementById('options-menu');

            if(menu.classList.contains("disabled-menu")){ /*Si el elemento contiene la lista*/
                menu.classList.remove("disabled-menu"); /*quitar clase*/
                menu.classList.add("enabled-menu"); /*agregar clase que muestra elementos*/
            }

            else{
                menu.classList.remove("enabled-menu"); /*quitar elementos de mostrar*/
                menu.classList.add("disabled-menu"); /*agregar clase que oculta el menu*/
            }
        }

        boton.addEventListener("click", showMenu);



     });