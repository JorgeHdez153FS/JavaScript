const fruits = [
    'Strawberry',
    'Banana',
    'Orange',
    'Apple'
];
const foodSchedule = [
    { name: "Salad", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true }
];

let fruitsIndex = 0;
for (let i = 0; i < foodSchedule.length; i++); {
    let food = foodSchedule[i];
    if (!food.isVegan) {
        foodSchedule[i].name = fruits[fruitsIndex];
        foodSchedule[i].isVegan = true;
        fruitsIndex++;
    }
}