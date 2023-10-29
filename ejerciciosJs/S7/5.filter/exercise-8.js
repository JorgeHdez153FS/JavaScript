const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const btn$$ = document.querySelector('[data-function="toFilterStreamers"]')
btn$$.addEventListener('click', showStreamers);

function showStreamers() {
    const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
    const inputValue = input$$.value;
    const filteredStreamers = streamers.filter(function(streamer) {
        return streamer.name.includes(inputValue);
    });
}