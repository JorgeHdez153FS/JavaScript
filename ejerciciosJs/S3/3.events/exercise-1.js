const btn$$ = document.querySelector('#btnToClick');

function evento(e) {
    console.log(e);
}

btn$$.addEventListener('click', evento)