const userAnwsers = [];

function confirmExample(description) {
    const tilte$$ = document.querySelector('title');
    tilte$$.innerHTML = description;
    return confirm(description)
}

function promptExample(description) {
    const tilte$$ = document.querySelector('title');
    tilte$$.innerHTML = description;
    return propmt(description)
}

function father(description, callback) {
    userAnwsers.push(callback(description));
}