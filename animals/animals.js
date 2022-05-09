import { findById } from '../utils.js';
import { animals } from '../data.js';


const params = new URLSearchParams(window.location.search);
const animal = findById(params.get('id'), animals);

const main = document.getElementById('animal-name');
const img = document.getElementById('img');
const quote = document.getElementById('quote');


main.textContent = animal.name;
quote.textContent = animal.says;
img.src = `../assets/${animal.type}.svg`;

// main.append(animalDiv);



// const li = document.createElement('li');
// const a = document.createElement('a');
// a.href = `../data/?id=${animals.id}`;
// a.textContent = animals.name;
// li.append(a);
