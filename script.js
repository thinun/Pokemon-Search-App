async function pokemonData() {

    try {
        const pokemonName = document.getElementById('search-input').value.toLowerCase();
        console.log(pokemonName)
        //const pokemonID = document.getElementById('search-input').value
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}`);
        let pokemonClass = document.querySelector('.pokemon-details')
        if (!response.ok) {
            alert("Pokémon not found")
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonImg = document.querySelector('.pokemon-img');
        if (pokemonImg == null) {
            pokemonClass.classList.add('pokemon-img');
            const img = document.createElement('img')
            img.id = 'pokemonImag'
            img.src = pokemonSprite
            pokemonClass.appendChild(img)
        } else {
            const putImage = document.getElementById('pokemonImag')
            putImage.src = pokemonSprite
        }
        // getting necessary the API
        const pokemonNameFind = document.getElementById('pokemon-name')
        pokemonNameFind.innerHTML = `<p> Name: ${data.name}`

        const pokemonId = document.getElementById('pokemon-id')
        pokemonId.innerHTML = `<p>ID: ${data.id}</p>`

        const weight = document.getElementById('weight')
        weight.innerHTML = `<p>Weight: ${data.weight}</p>`

        const height = document.getElementById('height')
        height.innerHTML = `<p>Height: ${data.height}</p>`

        const types = document.getElementById('types')
        types.innerHTML = `<p>Types: ${data.types[0].type.name}</p>`

        const hp = document.getElementById('hp')
        hp.innerHTML = `<p>HP: ${data.stats[0].base_stat}</p>`

        const attack = document.getElementById('attack')
        attack.innerHTML = `<p>Attack: ${data.stats[1].base_stat}</p>`

        const defense = document.getElementById('defense')
        defense.innerHTML = `<p>Defence: ${data.stats[2].base_stat}</p>`

        const specialAttack = document.getElementById('special-attack')
        specialAttack.innerHTML = `<p>Special-Attack: ${data.stats[3].base_stat}</p>`

        const specialDefense = document.getElementById('special-defense')
        specialDefense.innerHTML = `<p>Special-Defence: ${data.stats[4].base_stat}</p>`

        const speed = document.getElementById('speed')
        speed.innerHTML = `<p>Speed: ${data.stats[5].base_stat}</p>`


    } catch (error) {
        console.log(error);
    }
}

