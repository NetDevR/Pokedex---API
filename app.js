const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonsPromises = []
    
    for (let i = 1; i <= 150; i++){
        pokemonsPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }

   Promise.all(pokemonsPromises)
        .then(pokemons => {
            console.log(pokemons)

            const lisPokemon = pokemons.reduce((accumulator, pokemon) => {
                accumulator += `<li>${pokemon.name}</li>`
                return accumulator
            }, '')

            console.log(lisPokemon)
        })
}

fetchPokemon()