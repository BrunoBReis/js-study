// Numbers:
let length = 16;
let weight = 7.5;

console.log(length)
console.log(weight)

// Strings:
let color = "Yellow";
let lastName = "Johnson";

console.log(color)
console.log(lastName)

// Booleans
let x = true;
let y = false;

console.log(x)
console.log(y)

// Object:
const person = {firstName:"John", lastName:"Doe"};

for (let key in person) {
    console.log(key, person[key])
}

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// One way to loop through an array
for (let object in cars) {
    console.log(object, cars[object])
}

// Even another way to loop through an array
for (let car of cars) {
    console.log(car)
}

// Another way to loop through an array
for (let i = 0; i < cars.length; i++) {
    console.log(i, cars[i])
}

// Yet another way to loop through an array
cars.forEach(function (value, index) {
    console.log(index, value)
})


console.log(cars)
// Date object:
const date = new Date("2022-03-25");

console.log(date)