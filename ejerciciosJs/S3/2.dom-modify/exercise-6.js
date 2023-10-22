const apps = [
    'Facebook',
    'Netflix',
    'Instagram',
    'Snapchat',
    'Twitter'
];

const list$$ = document.createElement('ul');
for (const app of apps) {
    const items$$ = document.createElement('li');
    items$$.textContent = app;
}