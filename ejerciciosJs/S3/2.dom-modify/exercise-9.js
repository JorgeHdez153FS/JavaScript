const divInsert$$ = document.querySelectorAll('div .fn-insert-here')

for (const div$$ of divInsert$$) {
    const p$$ = document.createElement('p');
    p$$.textContent = 'Voy dentro!'
    div$$.appendChild(clonedP$$)
}