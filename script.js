async function pokemonData() {

    try {
        const pokemonName = document.getElementById('search-input').value.toLowerCase();
        console.log(pokemonName)
        //const pokemonID = document.getElementById('search-input').value
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}`);
        let pokemonClass = document.querySelector('.pokemon-img-class')
        if (!response.ok) {
            alert("Pokémon not found")
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonImg = document.querySelector('.pokemon-img');
        if (pokemonImg == null) {
            pokemonClass.classList.add('pokemon-img');
            const img = document.createElement('img')
            img.id = 'sprite'
            img.src = pokemonSprite
            pokemonClass.appendChild(img)
        } else {
            const putImage = document.getElementById('sprite')
            putImage.src = pokemonSprite
        }
        // getting necessary the API

        document.getElementById('pokemon-name').innerHTML = "";
        const pokemonNameFind = document.getElementById('pokemon-name')
        pokemonNameFind.innerHTML += `<p>${(data.name).toUpperCase()}</p>`

        document.getElementById('pokemon-id').innerHTML = "";
        const pokemonId = document.getElementById('pokemon-id')
        pokemonId.innerHTML += `<p>${data.id}</P>`

        document.getElementById('weight').innerHTML = "";
        const weight = document.getElementById('weight')
        weight.innerHTML += `<p>${data.weight}</p>`

        document.getElementById('height').innerHTML = "";
        const height = document.getElementById('height')
        height.innerHTML += `<p>${data.height}</p>`

        document.getElementById('hp').innerHTML = "";
        const hp = document.getElementById('hp')
        hp.innerHTML += `<p>${data.stats[0].base_stat}</p>`

        document.getElementById('attack').innerHTML = "";
        const attack = document.getElementById('attack')
        attack.innerHTML += `<p>${data.stats[1].base_stat}</p>`

        document.getElementById('defense').innerHTML = "";
        const defense = document.getElementById('defense')
        defense.innerHTML += `<p>${data.stats[2].base_stat}</p>`


        document.getElementById('special-attack').innerHTML = "";
        const specialAttack = document.getElementById('special-attack')
        specialAttack.innerHTML += `<p>${data.stats[3].base_stat}</p>`

        document.getElementById('special-defense').innerHTML = "";
        const specialDefense = document.getElementById('special-defense')
        specialDefense.innerHTML += `<p>${data.stats[4].base_stat}</p>`

        document.getElementById('speed').innerHTML = "";
        const speed = document.getElementById('speed')
        speed.innerHTML += `<p>${data.stats[5].base_stat}</p>`

        document.getElementById('types').innerHTML = "";
        const types = document.getElementById('types')
        if (data.types.length === 1) {
            types.innerHTML += `<p>${(data.types[0].type.name).toUpperCase()}</p>`
        } else {
            types.innerHTML += `<p>${(data.types[0].type.name).toUpperCase()}</p>`
            types.innerHTML += `<p>${(data.types[1].type.name).toUpperCase()}</p>`
        }


    } catch (error) {
        console.log(error);
    }
}

