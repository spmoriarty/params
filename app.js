import { animals } from './data.js';
import { renderListItem } from './render-utils.js';
import { findById } from './utils.js';

const main = document.querySelector('main');
const farmLinks = document.getElementById('link');

for (let animal of animals) {
    const animalDiv = renderListItem(animal);
    main.append(animalDiv);
}


