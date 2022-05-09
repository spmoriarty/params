import { findById } from '../utils';
import { animals } from '../data';
import { renderListItem } from '../render-utils';

const params = new URLSearchParams(window.location.search);

const animalEl = document.getElementById('name');

animalEl.textContent = params.get('id');

function renderAnimal(animals) {
const li = document.createElement('li')
const a = document.createElement('a'),

a.href = `../data/?id=${animals.id}`,
a.textContent = animals.name,
li.append(a),
return li;
}