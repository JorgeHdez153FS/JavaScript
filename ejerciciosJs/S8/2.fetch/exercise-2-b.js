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
        p$$.textContent = 'El nombre ' + data.name + ' tiene un ' + percentage + 'porciento de ser de' + country.country_id;
    }
}