let ID = 1;

var right = document.getElementById("rightButton").addEventListener("click", increase1);
var left = document.getElementById("leftButton").addEventListener("click", decrease1);

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
  
    if (keyName === 'ArrowRight') {
        increase1();
    } else if(keyName === 'ArrowLeft') {
        decrease1();
    }

});


function increase1() {
    ID++;
    console.log(ID);    
    fetch (`https://pokeapi.co/api/v2/pokemon/${ID}/`)
.then((res) => res.json())
.then( 
    data => {
        const {...pokemon} = data.sprites;
        console.log(pokemon)
        const selector = document.querySelector(".pokeIn");
        selector.innerHTML = `<img src="${pokemon.front_default}" />`;
        const selector2 = document.querySelector(".pokedex");
        selector2.innerHTML = `${name}`;
    }
    
);
}

function decrease1() {
    ID--;
    if (ID < 1) {
        ID = 1;
     } else if (ID == 0) {
        ID = 1;
    }

    console.log(ID);    
    fetch (`https://pokeapi.co/api/v2/pokemon/${ID}/`)
.then((res) => res.json())
.then( 
    data => {
        console.log(data);
        name = data.name
        const {...pokemon} = data.sprites;
        console.log(pokemon)
        const selector = document.querySelector(".pokeIn");
        selector.innerHTML = `<img src="${pokemon.front_default}" />`;
        const selector2 = document.querySelector(".pokedex");
        selector2.innerHTML = `${name}`;
    }
);
}

fetch (`https://pokeapi.co/api/v2/pokemon/${ID}/`)
.then((res) => res.json())
.then( 
    data => {
        const {...pokemon} = data.sprites;
        console.log(pokemon)
        const selector = document.querySelector(".pokeIn");
        selector.innerHTML = `<img src="${pokemon.front_default}" />`;
        const selector2 = document.querySelector(".pokedex");
        selector2.innerHTML = `${name}`;
    }
);