const URL = "https://rickandmortyapi.com/api/character";
const card = document.querySelector('.carta');
const input = document.getElementById('input_bus');

window.addEventListener('load', fetchRick);
Sortable.create(card, {});

input.addEventListener('keyup', search);


function fetchRick () {
    fetch(URL)
    .then(response => response.json())
    .then(data => cart(data.results));
}

function cart(data) {

    console.log(data);

    data.forEach(element => {

        const cart = document.createElement('div');
        cart.classList = ('cont');

        const name = document.createElement('h1');
        name.textContent = element.name;
        name.classList = 'titu';
        cart.append(name);

        const images = document.createElement('img');
        images.setAttribute('src', element.image);
        images.textContent = element.image;
        images.classList = 'imagenes';
        cart.append(images);

        const hr = document.createElement('hr');
        cart.append(hr);

        const gene = document.createElement('h2');
        gene.textContent = element.gender;
        gene.classList = ('genero')
        cart.appendChild(gene);

        card.appendChild(cart);

    });
}

function search() {

    console.log(input.value);

    while (card.firstChild) {
        card.removeChild(card.firstChild);
    }
    let search = (URL)+`/?name=${input.value}`

    fetch(search)
    .then(response => response.json())
    .then(data => cart(data.results))
}