const animalFunction = () => {
    return {
        name: 'Bengal Tiger',
        race: 'Tiger'
    }
};

let { name, race } = animalFunction();

console.log(name);
console.log(race);


// Hector
let { name: animalName, race2 } = animalFunction();

console.log(aninmalName);
console.log(race2);