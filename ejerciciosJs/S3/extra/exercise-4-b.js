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

    const h4$$ = document.createElement('h4');
    h4$$.textContent = country.title;
    div$$.appendChild(h4$$);

    const img$$ = document.createElement('img');
    img$$.textContent = country.imgUrl;
    div$$.appendChild(img$$);

    document.body.appendChild(div$$)
}

const eliminateBtn$$ = document.querySelector('button');
eliminateBtn$$.addEventListener('click', lastElement);

function lastElement() {
    const elementOut$$ = document.querySelector('data-element');
    elementOut$$.remove();
}

// Hector

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

    document.body.appendChild(div$$);
}

const removeBtn$$ = document.querySelector('button');
removeBtn$$.addEventListener('click', removeLastElement);

function removeLastElement() {
    const LastElement$$ = document.querySelector('div[data-element="true"]:last-child')
    LastElement$$.remove();
}