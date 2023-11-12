const baseUrl = 'https://api.nationalize.io?name=';
const btn$$ = document.querySelector('button');
btn$$ = addEventListener('click', consult);

async function consult() {
    const inpu$$ = document.querySelector('input');
    const value = inpu$$.value;
    const response = await fetch(baseUrl + value);
    const json = await response.json();
    return json;
}