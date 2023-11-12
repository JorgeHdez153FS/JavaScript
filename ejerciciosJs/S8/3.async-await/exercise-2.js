async function getCharacters() {
    const rest = await fetch('https://rickandmortyapi.com/api/character');
    const character = await res.json();
    console.log(character);
}

getCharacters();