const movies = [
    { name: "Your Name", durationInMinutes: 130 },
    { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
    { name: "Origen", durationInMinutes: 165 },
    { name: "El señor de los anillos", durationInMinutes: 967 },
    { name: "Solo en casa", durationInMinutes: 214 },
    { name: "El jardin de las palabras", durationInMinutes: 40 }
];

let ShortFilms = [];
let MediumFilms = [];
let LongFilms = [];

for (let movie of movies) {
    if (movie.durationInMinutes < 100) {
        ShortFilms.push(movie);
    } else if (movie.durationInMinutes < 200) {
        MediumFilms.push(movie);
    } else {
        LongFilms.push(movie)
    }
}

console.log(ShortFilms, MediumFilms, LongFilms);