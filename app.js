//ASSIGNMENT1
// 1. Create an empty array called "fruits".
let fruits = [];

//2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".
fruits.push("apple");
fruits.push("banana");
fruits.push("orange");

//3. Remove the first fruit from the array.
//spice syntax = array.splice(start, deleteCount, item1, item2, ...);
fruits.splice(0,1);

// 4. Add "grape" to the end of the array.
fruits.push("grape");

// 5. Update the second fruit in the array to "pear".
fruits.splice(1, 1 ,"pear");

// 6. Print the final "fruits" array after performing the above operations.

console.log(fruits);

//ASSIGNMENT 2

// 1. Create an empty object called "person".

let person = {};

// 2. Add the following properties to the "person" object.
person.name = "John";
person.age = 30;
person.city = "New York";

// 3. Remove the "age" property from the "person" object.
delete person.age;

// 4. Add a new property called "job" with the value "Engineer" to the "person" object.

person.job = "Engineer";

// 5. Update the "city" property of the "person" object to "San Francisco".
person.city = "San Francisco";

// 6. Print the final "person" object after performing the above operations.

console.log(person);

