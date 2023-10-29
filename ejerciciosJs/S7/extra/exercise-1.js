const videogames = [
    { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
    { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
    { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
    { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
    { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
    { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10 },
];

const rpgGames2 = videogames.filter(function(videogame) {
    const genders = videogame.genders;
    const rpgGender = genders.find(gender => gender === 'RPG');
    return rpgGender != null;
});

const totalScore2 = rpgGames2.reduce((acc, videogame) => acc + videogame.score, 0);

const avgScore2 = totalScore2 / rpgGames2.length;

// Hector

const rpgGames = videogames.filter(videogame => videogame.genders.includes('RPG'));

const totalScore = rpgGames.reduce((acc, videogame) => acc + videogame.score, 0);

const avgScore = totalScore / rpgGames.length;