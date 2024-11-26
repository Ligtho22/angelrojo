const baseUrl = 'https://rickandmortyapi.com/api';

async function fetchCharacters(page = 1) {
    try {
        const response = await fetch(`${baseUrl}/character?page=${page}`);
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

function displayCharacters(characters) {
    const container = document.getElementById('characters-container');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos personajes

    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character');
        characterDiv.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="${character.name}">
            <p>Estado: ${character.status}</p>
            <p>Especie: ${character.species}</p>
            <p>Género: ${character.gender}</p>
        `;
        container.appendChild(characterDiv);
    });
}

// Llamar a la función para obtener los personajes al cargar la página
fetchCharacters();
