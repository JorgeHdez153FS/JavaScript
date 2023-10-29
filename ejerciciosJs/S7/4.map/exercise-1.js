const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

const names = users.map(user => user.name);

console.log(names);

// Hector

const userNames = users.map(function(user) {
    return user.name;
});

console.log(userNames);