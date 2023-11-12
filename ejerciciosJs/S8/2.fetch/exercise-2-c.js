const baseUrl = 'https://api.nationalize.io?name=';
const btn$$ = document.querySelector('button');
btn$$ = addEventListener('click', consult);

async function consult() {
    const inpu$$ = document.querySelector('input');
    const value = inpu$$.value;
    const response = await fetch(baseUrl + value);
    const json = await response.json();
    console.log(json);
    elements(json);
}

function elements(data) {
    for (const country of data.country) {
        const p$$ = document.createElement('p');
        p$$.textContent = 'El nombre ' + data.name + ' tiene un ' + country.propability + 'porciento de ser de' + country.country_id;

        const removeBtn$$ = document.createElement('button');
        removeBtn$$.textContent = 'X';
        removeBtn$$.addEventListener('click', byeLine)

        p$$.appendChild(removeBtn$$);

    }
}

function byeLine() {
    this.parentNode.remove();
}

// Hector

function createElements(data) {
    const container$$ = document.querySelector('#container');
    container$$.innerHTML = '';
    for (const country of data.country) {
        const p$$ = document.createElement('p');
        p$$.setAttribute('data-item', 'true')
        const percentage = country.propability * 100;
        p$$.textContent = 'El nombre ' + data.name + ' tiene un ' + percentage + 'porciento de ser de' + country.country_id;

        const removeBtn$$ = document.createElement('button');
        removeBtn$$.textContent = 'X';
        removeBtn$$.addEventListener('click', removeLine);
        span$$ = appendChild(removeBtn$$);
        p$$.appendChild(span$$);

        container$$.appendChild(p$$)
    }
}

function removeLine() {
    this.closest('[data-item="true"]').remove();
}