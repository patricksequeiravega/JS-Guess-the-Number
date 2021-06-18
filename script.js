const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quam, quod ratione praesentium tempora ab sit vel consequatur? Laborum quisquam expedita dolores? Ex harum officia reprehenderit maxime placeat! Ratione, porro?';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('Favorite color');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(event) {
        event.stopPropagation();
        const listContent = prompt('Change your color');
        this.textContent = listContent;
 };
} 