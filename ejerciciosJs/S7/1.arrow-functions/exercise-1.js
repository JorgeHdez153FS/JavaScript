let a = 10;
let b = 5;

const all = (a, b) => {
    console.log(a + b);
};

// Hector

const showAll = (a = 10, b = 5) => {
    console.log(a + b);
}

showAll();
showAll(3);
showAll(1, 2);