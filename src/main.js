import {filterByGender, filterByStatus, orderData } from './data.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';

let personajes = rickandmorty.results;
let filGender= document.getElementById('filGender');
let filStatus= document.getElementById('filStatus');
let boton = document.getElementById('hamburguer');
let buttonAll = document.getElementById('showAll');
const order = document.getElementById('order');


document.addEventListener('DOMContentLoaded',()=>{
    
    filStatus.addEventListener('change',(e)=>{
        const userStatus = e.target.value;

            console.log("Estoy escuchando el", userStatus)
    
            if(userStatus === "ali"){
                const statusA = filterByStatus(personajes, 'Alive', userStatus);
                createCards(statusA);
            }
            else if(userStatus === "dea"){
                const statusD = filterByStatus(personajes, 'Dead', userStatus);
                createCards(statusD); 
            }
            else if(userStatus === "uns"){
                const statusU = filterByStatus(personajes, 'unknown', userStatus);
                createCards(statusU); 
            }
            else{
                console.log('Nada');
            } 

 
         console.log("Estoy escuchando el", e.target.value)
     })

     filGender.addEventListener('change',(e)=>{

        const user = e.target.value;
        console.log("Estoy escuchando el",user)

        if(user === "fem"){
            const genderF = filterByGender(personajes, 'Female', user);
            createCards(genderF);
        }
        else if(user === "mal"){
            const genderM = filterByGender(personajes, 'Male', user);
            createCards(genderM); 
        }
        else if(user === "unk"){
            const genderU = filterByGender(personajes, 'unknown', user);
            createCards(genderU); 
        }
        else{
            console.log('Nada');
        }

        buttonAll.addEventListener("click", ()=>{
        createCards(personajes);
        console.log("Regreso todos los personajes");
        });
    })

        order.addEventListener ('change', (event) => {
            const sortOrder = event.target.value;
            const orderedData = orderData(personajes, 'name', sortOrder)
            createCards(orderedData);
        })

});

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
