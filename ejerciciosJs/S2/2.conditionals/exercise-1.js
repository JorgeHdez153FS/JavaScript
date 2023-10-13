const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Abel Cabeza', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
];

const ActAlumns = alumns.map(alumn => {
    const trimestersApproved = [alumn.T1, alumn.T2, alumn.T3].filter(approved => approved);
    alumn.isApproved = trimestersApproved.length >= 2;
    return alumn;
});

console.log(ActAlumns);