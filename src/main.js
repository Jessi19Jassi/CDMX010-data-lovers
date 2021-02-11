import data from './data/rickandmorty/rickandmorty.js';
import {filterByGender, filterByStatus,filterBySpecies, orderData } from './data.js';

//------DECLARACIÓN DE VARIABLES---------------
let personajes = data.results;
let filterGender= document.getElementById('selectByGender');
let filterStatus= document.getElementById('selectByStatus');
let filterSpecies =document.getElementById('selectBySpecies');
const order = document.getElementById('order');

document.addEventListener('DOMContentLoaded',()=>{
    createCards(personajes);
    
    filterStatus.addEventListener('change',(e)=>{
        const userStatus = e.target.value;

            console.log("Estoy escuchando el", userStatus)
    
            if(userStatus === "alive"){
                const statusA = filterByStatus(personajes, 'Alive', userStatus);
                createCards(statusA);
            }
            else if(userStatus === "dead"){
                const statusD = filterByStatus(personajes, 'Dead', userStatus);
                createCards(statusD); 
            }
            else if(userStatus === "unknownS"){
                const statusU = filterByStatus(personajes, 'unknown', userStatus);
                createCards(statusU); 
            }
            else{
                console.log('Nada');
            } 

        console.log("Estoy escuchando el", e.target.value)
    })

    filterGender.addEventListener('change',(e)=>{

        const userGender = e.target.value;
        console.log("Estoy escuchando el",userGender)

        if(userGender === "fem"){
            const genderF = filterByGender(personajes, 'Female', userGender);
            createCards(genderF);
        }
        else if(userGender === "mal"){
            const genderM = filterByGender(personajes, 'Male', userGender);
            createCards(genderM); 
        }
        else if(userGender === "unk"){
            const genderU = filterByGender(personajes, 'unknown', userGender);
            createCards(genderU); 
        }
        else{
            console.log('Nada');
        }
    })

    filterSpecies.addEventListener('change',(e)=>{

        const userSpecies = e.target.value;
        console.log("Estoy escuchando el evento ", userSpecies)

        if(userSpecies === "alien"){
            const speciesA = filterBySpecies(personajes, 'Alien', userSpecies);
            createCards(speciesA);
        }
        else if(userSpecies === "human"){
            const speciesH = filterBySpecies(personajes, 'Human', userSpecies);
            createCards(speciesH); 
        }
        else if(userSpecies === "humanoid"){
            const speciesHd = filterBySpecies(personajes, 'Humanoid', userSpecies);
            createCards(speciesHd); 
        }
        else{
            console.log('Nada');
        }
    })
        order.addEventListener ('change', (event) => {
            const sortOrder = event.target.value;
            const orderedData = orderData(personajes, 'name', sortOrder)
            createCards(orderedData);
        })

});

//----Imprimer CARD de personajes-----------
const createCards = data => {
    let showAll = data.map((element) =>{
        return  `
            <div class="card">
                <img src="${element.image}"/> 
                <div>
                    <h4> Name: ${element.name}</h4>
                    <p class="status">  Status: ${element.status}</p>
                    <p class="gender">  Gender: ${element.gender}</p>
                    <p class="origin">  Origin: ${element.origin.name}</p>
                    <p class="species"> Species: ${element.species}</p>
                    <p class="type">    Type: ${element.type}</p>
                </div>
            </div> 
            `;
        }).join(" ");
        document.getElementById("area").innerHTML = showAll;
}