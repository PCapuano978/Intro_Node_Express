fetch ("https://pokeapi.co/api/v2/pokemon/rayquaza/")
.then((res) => res.json())
.then( 
    data => {
        const {...pokemon} = data.sprites;
        console.log(pokemon)
        const selector = document.querySelector(".pokeIn");
        selector.innerHTML = `Hello World! <img src="${pokemon.front_default}" />`
    }
);
