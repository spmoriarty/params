// import { animals } from './data';
export function renderListItem(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    div.style.top = animal.top;
    div.style.left = animal.left;
    
    const a = document.createElement('a');
    a.href = `./animals/?id=${animal.id}`;

    const img = document.createElement('img');
    img.src = `./assets/${animal.type}.svg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = animal.name;
    nameSpan.classList.add('name');

    // const li = document.createElement('li');
    // a.textContent = animals.name;
    // li.append(a);
    

    const span = document.createElement('span');
    span.textContent = animal.says;

    a.append(img, nameSpan, span);
    div.append(a);
    return div;
}
