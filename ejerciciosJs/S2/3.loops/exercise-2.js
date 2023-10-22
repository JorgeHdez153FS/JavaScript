const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (let aliens in alien) {
    console.log(aliens + ':' + alien[aliens]);
}