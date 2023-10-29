function rollSide(sides) {
    return math.floor(math.random() * sides) + 1;
}

for (let i = 0; i < 6; i++) {
    console.log(rollSide(6));
}