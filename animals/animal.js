import { findById } from '../utils';
import { animals } from '../data';
import { renderListItem } from '../render-utils';

const params = new URLSearchParams(window.location.search);

const main = document.getElementById('animal-info');

const animal = findById(params.get('id'), animals);
const animalDiv = renderListItem(animal);

main.append(animalDiv);



const li = document.createElement('li');
const a = document.createElement('a');
a.href = `../data/?id=${animals.id}`;
a.textContent = animals.name;
li.append(a);