import { animals } from './data.js';
import { renderListItem } from './render-utils.js';
import { findById } from './utils.js';

const main = document.querySelector('main');

for (let animal of animals) {
    const animalDiv = renderListItem(animal);
    main.append(animalDiv);
}




for (let )