const countries = [{
    title: 'Random title',
    imgUrl: 'https://picsum.photos/300/200?random=1'
}, {
    title: 'Random title',
    imgUrl: 'https://picsum.photos/300/200?random=2'
}, {
    title: 'Random title',
    imgUrl: 'https://picsum.photos/300/200?random=3'
}, {
    title: 'Random title',
    imgUrl: 'https://picsum.photos/300/200?random=4'
}, {
    title: 'Random title',
    imgUrl: 'https://picsum.photos/300/200?random=5'
}];

for (const country of countries) {
    const div$$ = document.createElement('div');
    div$$.setAttribute('data-element', 'true');

    const title$$ = document.createElement('h4');
    title$$.textContent = country.title;
    div$$.appendChild(title$$);

    const img$$ = document.createElement('img');
    img$$.src = country.imgUrl;
    img$$.alt = 'Imagen de ' + country.title;
    div$$.appendChild(img$$);

    const removeBtn$$ = document.createElement('button');
    removeBtn$$.textContent('Borrar Elemento');
    removeBtn$$.addEventListener('click', removeElement);
    div$$.appendChild(removeBtn$$);

    document.body.appendChild(div$$);
}

const removeLastBtn$$ = document.querySelector('button');
removeBtn$$.addEventListener('click', removeLastElement);

function removeLastElement() {
    const LastElement$$ = document.querySelector('div[data-element="true"]:last-child')
    LastElement$$.remove();
}

// Hector (ver todo entero)


for (const country of countries) {
    const div$$ = document.createElement('div');
    div$$.setAttribute('data-element', 'true');

    const title$$ = document.createElement('h4');
    title$$.textContent = country.title;
    div$$.appendChild(title$$);

    const img$$ = document.createElement('img');
    img$$.src = country.imgUrl;
    img$$.alt = 'Imagen de ' + country.title;
    div$$.appendChild(img$$);

    const removeBtn$$ = document.createElement('button');
    removeBtn$$.textContent('Borrar Elemento');
    removeBtn$$.addEventListener('click', removeElement);
    div$$.appendChild(removeBtn$$);

    document.body.appendChild(div$$);
}

const removeLastBtn2$$ = document.querySelector('button');
removeLastBtn2$$.addEventListener('click', removeLastElement);

function removeLastElement() {
    const LastElement$$ = document.querySelector('div[data-element="true"]:last-child')
    LastElement$$.remove();
}