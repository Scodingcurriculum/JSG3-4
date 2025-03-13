//______________________________________________________________________________________________________________________________
//Conditional statements are a way to make decisions in a computer program, like when you make choices in your everyday life. Think of them like this:
//If it is raining, you should bring an umbrella.
//If it is not raining, you should not bring an umbrella.


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

// If-else statement
if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's not a hot day."); // This code block executes if the condition is false.
}

// If-else if-else statement
if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("It's a pleasant day."); // This code block executes if the previous condition is false and this one is true.
} else {
  console.log("It's a cold day."); // This code block executes if all previous conditions are false.
}

console.log("\n")
//_______________________________________________________________________________________________________________________________
//Program to find out if someone is allowed to watch movie or not based on their age.
console.log("Program to find out if someone is allowed to watch movie or not based on their age")
const age = 16; // Change this to the person's age
console.log("Entered age " + age);
if (age >= 18) {
  console.log("You are allowed to watch the movie.");
} else {
  console.log("Sorry, you are not allowed to watch the movie. It's for adults only.");
}
