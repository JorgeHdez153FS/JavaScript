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

    const h4$$ = document.createElement('h4');
    h4$$.textContent = country.title;
    div$$.appendChild(h4$$);

    const img$$ = document.createElement('img');
    img$$.textContent = country.imgUrl;
    div$$.appendChild(img$$);
}
document.body.appendChild(div$$)

// Hector

for (const country of countries) {
    const div$$ = document.createElement('div');

    const title$$ = document.createElement('h4');
    title$$.textContent = country.title;
    div$$.appendChild(title$$);

    const img$$ = document.createElement('img');
    img$$.src = country.imgUrl;
    img$$.alt = 'Imagen de ' + country.title;
    div$$.appendChild(img$$);

    document.body.appendChild(div$$);
}