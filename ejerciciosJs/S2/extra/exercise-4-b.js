function findArrayIndex(array, text) {
    return array.indexOf(text);
}

let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index > -1) {
        array.splice(index, 1);
        return array;
    }
}