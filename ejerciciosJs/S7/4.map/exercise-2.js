const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];

const names = users.map(user => {
    if (user.name.charAt(0) === 'A') {
        user.name = 'Anacleto';
    }
    return user.name;
});

console.log(names);

// Hector

const names2 = user.map(function(user) {
    const userNames = user.name;
    if (userNames.charAt(0) === 'A') {
        user.name = 'Anacleto';
    }
    return user.name;
});
console.log(names2);