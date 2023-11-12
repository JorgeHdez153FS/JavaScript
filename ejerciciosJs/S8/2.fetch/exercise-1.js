fetch('https://api.agify.io?name=michael')
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(json) {
        console.log(json);
    })

// Hector
const getData = async() => {
    const response = await fetch('https://api.agify.io?name=michael');
    const json = await response.json();
}