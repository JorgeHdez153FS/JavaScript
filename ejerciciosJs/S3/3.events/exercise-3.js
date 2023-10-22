const input$$ = document.querySelector('input');

function getValue(e) {
    console.log(this.Value);
}

input$$.addEventListener('input', getValue);