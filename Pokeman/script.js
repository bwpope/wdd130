//DOM Objects
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');

const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

function getName () {
    const str = document.getElementById('pokemonName').value;
    console.log("https://pokeapi.co/api/v2/pokemon/" + str);

    fetch('https://pokeapi.co/api/v2/pokemon/' + str)
        .then(res => {
            return res.json();
        })
        .then(data => {
            pokeName.textContent = capitalize(data['name']);
            pokeId.textContent = data['id'];
            pokeWeight.textContent = data['weight'];
            const dataTypes = data['types'];
            const dataFristType = dataTypes[0];
            const dataSecondType = dataTypes[1];
            pokeTypeOne.textContent = capitalize(dataFristType['type']['name']);
            if(dataSecondType) {
                pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);
            } else {
                pokeTypeTwo.textContent ='';
            }
    
            pokeFrontImage.src = data['sprites']['front_default']; 
            pokeBackImage.src = data['sprites']['back_default'] || ''; 




        });
}
