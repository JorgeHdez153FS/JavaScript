const colors = [
    'rojo',
    'azul',
    'amarillo',
    'verde',
    'naranja'
];
colors.slice(1, 1);
const newColors = [...colors];

// Hector

const color2 = [...colors.slice(0, 2), ...colors.slice(3)];