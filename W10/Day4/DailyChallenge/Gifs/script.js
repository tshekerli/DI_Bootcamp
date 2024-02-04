let currentCategory = '';

document.getElementById('gif-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('gif-input');
    currentCategory = input.value;
    fetchGif(currentCategory);
    input.value = '';
});

document.getElementById('delete-all').addEventListener('click', function() {
    const container = document.getElementById('gif-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
});

async function fetchGif(category) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${category}&rating=g`);
    const data = await response.json();
    appendGif(data.data.images.original.url);
}

function appendGif(url) {
    const container = document.getElementById('gif-container');
    const gifElement = document.createElement('div');
    gifElement.innerHTML = `
        <img src="${url}" alt="Random Gif">
        <button class="delete">DELETE</button>
    `;
    gifElement.querySelector('.delete').addEventListener('click', function() {
        container.removeChild(gifElement);
        fetchGif(currentCategory);
    });
    container.appendChild(gifElement);
}