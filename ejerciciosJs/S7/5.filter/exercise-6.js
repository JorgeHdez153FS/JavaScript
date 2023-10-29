const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const legends = streamers.filter(function(streamer) {
    if (streamer.gameMorePlayed.includes('Legends')) {
        if (streamer.age > 35) {
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        }
        return streamer;
    }
})

//Hector

const lol = streamers.filter(function(streamer) {
    const league = streamer.gameMorePlayed.includes('League');
    if (league) {
        if (streamer.age > 35) {
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        }
        return true;
    }
    return false;
});

// Hector2

const streamerLOL2 = streamers.filter(streamer => {
    if (streamer.gameMorePlayed.includes('Legends')) {
        if (streamer.age > 35) {
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        }
        return true;
    }
    return false;
});