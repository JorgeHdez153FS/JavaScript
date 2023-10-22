const input$$ = document.querySelector('input');

function checkvalue(e) {
    console.log(this.value);
}

input$$.addEventListener('focus', checkvalue)