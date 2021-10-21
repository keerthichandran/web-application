// This is my first javascript code.
console.log('Helow world');

// ------------------------------- Javascript variables ---------------------------- //

// let variable decleration
// let name = 'Saran';
// console.log(name);

// const variable decleration
// const interestRate = 0.5;
// console.log(interestRate);

// let firstName = 'Saran';
// let lastName = 'Kumar';

// Cannot be a reserved keyword
// should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphne (-)
// Are case-sensitive

// ------------------------------- Premitive type ----------------------------------- //
// let name = 'Saran'; // String Literal
// let age = 26; // Number Literal
// let isApproved = true // Boolean Literal
// let firstName = undefined;
// let selectedColor = null;


// ------------------------------- Dynamic typing ----------------------------------- //

// If checking browser console to used 'typeof' keyword

// let name = 'Saran'; // String Literal
// let age = 26; // Number Literal
// let isApproved = true // Boolean Literal
// let firstName = undefined;
// let selectedColor = null;

// ------------------------------- Reference type ----------------------------------- //

let person = {
    name: 'Kumar',
    age: 26
};

// Dot notation
person.name = 'raj';

// Bracket Notaion
let selection = 'name';
person[selection] = 'saran';

console.log(person);

// ------------------------------- Array type ----------------------------------- //

let selectedColor = ['red', 'blue'];
selectedColor[2] = 'green';
console.log(selectedColor.length);

// ------------------------------- Javascript Functions ----------------------------------- //

// Performing task
function greet (name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Saran', 'Kumar');

// Calculating  a value
function square (number) {
    return number * number;
}

console.log(square(2));