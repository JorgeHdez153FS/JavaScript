const numbers = [
    32,
    21,
    63,
    95,
    100,
    67,
    43
];

const findNumbers = numbers.find(function(number) {
    return number === 100;
});

//Hector

const number2 = numbers.find(numbers => number === 100);