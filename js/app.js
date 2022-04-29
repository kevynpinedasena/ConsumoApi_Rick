const URL = "https://rickandmortyapi.com/api/character";
const card = document.querySelector('.carta');

const fetchRick = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => carta(data.results));
}

function carta(data) {

    data.forEach(element => {

        const cart = document.createElement('div');
        cart.classList = ('cont');

        const images = document.createElement('img');
        images.setAttribute('src', element.image);
        images.textContent = element.image;
        images.classList = 'imagenes';
        cart.append(images);

        const hr = document.createElement('hr');
        cart.append(hr);

        const name = document.createElement('h1');
        name.textContent = element.name;
        name.classList = 'titu';
        cart.append(name);

        card.appendChild(cart);

    });
}

Sortable.create(card, {});

window.addEventListener('load', fetchRick());
