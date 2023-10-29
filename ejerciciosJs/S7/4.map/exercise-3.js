const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
];

const visitedCities = cities.map((city) => {
    if (city.isVisited) {
        return `${city.name} Visitado`;
    }
    return city.name;
});

console.log(visitedCities);

// Hector

const citiesNames = cities.map(function(city) {
    const cityName = city.name;
    if (city.isVisited) {
        cityName += cityName + ' (Visitado)';
    }
    return cityName;
});

// Hector2
const citiesNames3 = cities.map(city => city.isVisited ? city.name + '(visitado)' : city.name);