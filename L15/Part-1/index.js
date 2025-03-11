//typeof operator
//typeof is like a detective tool in JavaScript. It helps us find out what kind of thing we're dealing with in our code. It tells us if something is a number, a word (also known as a "string"), or a true/false value (called a "boolean").

//It's similar to when you're playing with different toys and you want to know if it's a car, a doll, or maybe a ball. typeof does that for us in our coding world!

// Using the typeof operator to check the data type of different variables

let num = 10; // Define a variable 'num' and assign it a numeric value 10
let text = "Hello, world!"; // Define a variable 'text' and assign it a string value "Hello, world!"
let isTrue = true; // Define a variable 'isTrue' and assign it a boolean value true
let fruits = ["apple", "banana", "orange"]; // Define a variable 'fruits' and assign it an array of strings

// Output the data types of the variables using the typeof operator and console.log
console.log(num+" is a "+typeof num); // Output: "number" - displays the data type of 'num' (number)
console.log(text+" is a "+typeof text); // Output: "string" - displays the data type of 'text' (string)
console.log(isTrue+" is a "+typeof isTrue); // Output: "boolean" - displays the data type of 'isTrue' (boolean)
console.log(fruits+" are  "+typeof fruits); // Output: "object" - displays the data type of 'fruits' (array)

// Note: The typeof operator is used to determine the data type of a variable or an expression. It returns a string indicating the type of the operand.
// It can be useful for debugging or conditional checks based on variable types.

//In the provided code:

//typeof num returns "number" because num is a numeric variable.
//typeof text returns "string" because text is a string variable.
//typeof isTrue returns "boolean" because isTrue is a boolean variable.
//typeof fruits returns "object" because fruits is an array, which is of type object in JavaScript.

//____________________________________________________________________________________
console.log("\n")


console.log("Type Conversion")
// Type Conversion in JavaScript

// 1. Number to String Conversion
let number = 42; // Define a number
let stringFromNumber = String(number); // Convert number to string
console.log(`Number to String: ${stringFromNumber}`); // Print the converted string

// 2. String to Number Conversion
let string = "123"; // Define a string
let numberFromString = Number(string); // Convert string to number
console.log(`String to Number: ${numberFromString}`); // Print the converted number

// 3. Boolean to String Conversion
let booleanValue = true; // Define a boolean
let stringFromBoolean = String(booleanValue); // Convert boolean to string
console.log(`Boolean to String: ${stringFromBoolean}`); // Print the converted string

// 4. String to Boolean Conversion
let anotherString = "false"; // Define a string
let booleanFromString = Boolean(anotherString); // Convert string to boolean
console.log(`String to Boolean: ${booleanFromString}`); // Print the converted boolean

// 5. Number to Boolean Conversion
let anotherNumber = 0; // Define a number
let booleanFromNumber = Boolean(anotherNumber); // Convert number to boolean
console.log(`Number to Boolean: ${booleanFromNumber}`); // Print the converted boolean

// 6. Boolean to Number Conversion
let anotherBoolean = false; // Define a boolean
let numberFromBoolean = Number(anotherBoolean); // Convert boolean to number
console.log(`Boolean to Number: ${numberFromBoolean}`); // Print the converted number
