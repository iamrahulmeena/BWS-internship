const btn = document.getElementById('btn');
const pokeSpeciesNumber = document.getElementById('species-number');
const generation = document.getElementById('generation')
const pokeName = document.getElementById('name')
const pokeImage = document.getElementById('image') 
const pokeAbilities = document.querySelector('.abilities')
const pokeAbility = document.querySelector("#ability");
const evolvesFromSpecies = document.getElementById('from_species') 

const URL =  "https://pokeapi.co/api/v2"

btn.addEventListener("click", () => {
    // creating a random number
    let randomSpeciesNumber = Math.floor(Math.random() * 1008);

    // Reset evolvesFromSpecies content
    evolvesFromSpecies.style.display = "none";
    evolvesFromSpecies.innerText = "Evolves from species: ";

    // fetch is used to make an HTTP request to the API
    // it returns a promise
    fetch(`${URL}/pokemon-species/${randomSpeciesNumber}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            pokeSpeciesNumber.innerText = randomSpeciesNumber;
            generation.innerText = data.generation.name;
            if (data && data.evolves_from_species !== null) {
                evolvesFromSpecies.style.display = "block";
                evolvesFromSpecies.innerText += " " + data.evolves_from_species.name;
            }

            fetch(`${URL}/pokemon/${data.name}`)
                .then(response => response.json())
                .then(data1 => {
                    console.log(data1);
                    pokeName.innerText = data1.name;
                    pokeImage.style.display = "block";
                    pokeImage.src = data1.sprites.back_default;

                    // for abilities:
                    let abilities = data1.abilities;
                    addAbilities(abilities);
                });
        });

    console.log(randomSpeciesNumber);
});

function addAbilities(abilities) {
    pokeAbilities.style.display = "inline"
    abilities.forEach(ability => {
        console.log(ability.ability.name);
        let li = document.createElement("li")
        li.innerText = ability.ability.name;
        pokeAbility.appendChild(li);
    });
}
