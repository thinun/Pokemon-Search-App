async function pokemonData() {

    try {
        const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        let pokemonClass = document.querySelector('.pokemon-details')
        if (!response.ok) {
            throw new Error('can not find pokemon');
        }
        const data = await response.json();
        console.log(data)
        const pokemonSprite = data.sprites.front_default;
        const pokemonImg = document.querySelector('.pokemon-img');
        console.log(pokemonImg)
        if (pokemonImg == null) {
            pokemonClass.classList.add('pokemon-img');
            const img = document.createElement('img')
            img.id = 'pokemonImag'
            img.src = pokemonSprite
            pokemonClass.appendChild(img)
        } else {
            const putImage=document.getElementById('pokemonImag')
            putImage.src = pokemonSprite
        }


    } catch (error) {
        console.log(error);
    }
}

