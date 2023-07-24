const btnFilter = document.querySelector('.icon-filter')

btnFilter.addEventListener('click', () => {
    const containerFilter = document.querySelector('.container-filters')

    containerFilter.classList.toggle('active')
})


const listPokemon =document.querySelector('.card_list_pokemon');
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++)  {
    fetch(URL + i)
        .then((response => response.json()))
        .then(data => mostrarPokemon(data))
        
}

function mostrarPokemon(poke)  {
    
    let Typespokemon = poke.types.map(type => 
        ` <span class="${type.type.name}">${type.type.name}</span>`);
        Typespokemon= Typespokemon.join('');

    const main = document.createElement("main");
    main.classList.add("card_list_pokemon");
    main.innerHTML = `  
            <main class="card_list_pokemon">       
                <a href="pokemon.html" class="card-pokemon"> 
                    <div class="card_img">
                        <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
                    </div>
                    <div class="card_info">
                        <span class="pokemon-id">N°${poke.id}</span>
                        <h3>${poke.name}</h3>
                        <div class="card_types">
                            ${Typespokemon}
                        </div>
                    </div>
                </a>
            </main>
        `; 
    listPokemon.append(main);
}
// <a href="pokemon.html" class="card-pokemon">
//             <div class="card_img">
//                 <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" alt="Pokemon ivysaur">
//             </div>
//             <div class="card_info">
//                 <span class="pokemon-id">N°2</span>
//                 <h3>Ivisaur</h3>
//                 <div class="card_types">
//                     <span class=" grass">planta</span>
//                     <span class="poison">veneno</span>
//                 </div>

