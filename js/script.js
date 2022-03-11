let firstName = "John";
let lastName = "Doe";
let age = 21;

console.log(firstName);

console.log(`My name is ${firstName} ${lastName} and I'm ${age}yrs.`);

console.log(lastName);

console.log(`Age is ${age}.`);

console.log("My name is " + firstName + " " + lastName + " and i am " + age + " years old.");

let fruits = ["mango","apple","pineapple",
"orange","berry","banana","carrot","cocumber","pawpaw"];

let ages = [21,21,16,15];

let person = {
    firstName: "john",
    lastName: "Doe",
    age: 21,

}

console.log(fruits.length);
console.log(fruits[3]);

console.log(fruits.push("coconot"));
console.log(fruits);
console.log(fruits.pop());

console.log(fruits.unshift("pear"));
console.log(fruits);
console.log(fruits.shift());

console.log(fruits.includes("apple"));
console.log(fruits.includes("ginger"));

console.log(fruits.join("_"));