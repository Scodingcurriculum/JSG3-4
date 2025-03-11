// Conditional statements
// Imagine you have a decision to make. You look outside and see if it's sunny. If it's sunny, you'll go out to play; otherwise, you'll stay indoors and read a book.

//A conditional statement in programming works similarly. It's like asking a computer a question and giving it instructions based on the answer. 

//Conditional Statements
//if (condition) {
//  // code to execute if condition is true
//} else {
//  // code to execute if condition is false
//}

const temperature = 25;

// If statement
if (temperature > 30) {
  console.log("It's a hot day!"); // This code block executes if the condition is true.
}

console.log("\n")
console.log("If-else statement")
// If-else statement
if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's not a hot day."); // This code block executes if the condition is false.
}

console.log("\n")
console.log("If - else if - else statement")
// If-else if-else statement
if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("It's a pleasant day."); // This code block executes if the previous condition is false and this one is true.
} else {
  console.log("It's a cold day."); // This code block executes if all previous conditions are false.
}
// Output: It's a hot day!