
//Loops are like when you're playing with your toy car and you push it around the track again and again. You keep going until you're satisfied or until someone says stop. In computer programs, loops help us repeat actions, like printing your name multiple times or drawing a pattern, so we don't have to do it manually each time.

//Types of Loops:
//For Loop: Used for repeating a task a specific number of times.

//While Loop: Repeats a task while a condition is true.

//Do-While Loop: Like a while loop but guarantees at least one execution.

//________________________________________________________________________________________________________________

//For Loop
//For loop is like when you want to count from 1 to 10 while playing a game. You start at 1, and you count up one by one until you reach 10. It's like taking small steps to finish a race. In computer programs, we use 'for' loops to do things over and over again for a specific number of times, just like counting from 1 to 10, but we can do it quickly! It consists of three parts: initialization, condition, and increment or decrement.

//Syntax
//for (initialization; condition; iteration) {
    // Code to be executed in each iteration }
// Here's a breakdown of each part of the for loop syntax:

//initialization: This is where you initialize a loop control variable. It typically starts with setting a variable, but it can include multiple variables separated by commas. This part is executed only once at the beginning of the loop.

//condition: This is a condition that is checked before each iteration. If the condition is true, the loop continues to run; if it's false, the loop stops.

//iteration: This is an expression that is evaluated at the end of each iteration. It's usually used to update the loop control variable.

//Inside the curly braces {} are the statements or code that you want to execute in each iteration of the loop.

//Instead of writing

console.log("Numbers from 1-10  without using loop")
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

//You can write it like this using loop:
//Here's a for-loop example that prints numbers from 1 to 10:
console.log("\n")
console.log("Here's a for-loop example that prints numbers from 1 to 10:")
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
 //Explanation: Initialization: let i = 1 set up a variable i and initialize it to 1. This is done once before the loop starts.
//Condition: i <= 10 defines the condition for the loop to run. The loop will continue as long as i is less than or equal to 10.
//Increment: i++ is executed at the end of each iteration, increasing the value of i by 1. This is done after each iteration.
//The loop will continue until the condition is false.

console.log("\n")
//______________________

//A while loop is like a game where you have a rule, and you keep playing the game as long as the rule is true. 
//For example, imagine you want to jump as high as you can. You start jumping, and while you can jump higher, you keep going. But when you can't jump any higher, you stop.

// A while loop in JavaScript is used to repeatedly execute a code block as long as a specified condition is true. It's like saying, "Keep doing this as long as something is true." Here's the basic structure of a while loop in JavaScript:
// while (condition) {
  // Code to be executed as long as the condition is true
//Code updation
// }

//Example
console.log("While loop \n")
console.log("Here's a while loop example that prints numbers from 0 to 9:")
var i = 0; // Initialize a counter variable 'i'

while (i < 10) { // Start a while loop that runs as long as 'i' is less than 10
  var text = "The number is " + i; // Create a text string with the current number
  console.log(text); // Print the text to the console
  i++; // Increment the counter variable 'i' for the next iteration
}

//Note: It is very important to set a condition that will become false otherwise, the code editor will crash. 

// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4
// The number is 5
// The number is 6
// The number is 7
// The number is 8
// The number is 9


//__________________________________________________________________________________________________________
console.log("\n")
console.log("Here's a do while loop example that prints numbers from 0 to 9:")
//do while loop
//A `do...while` loop is like playing a game where you do something, and then you check if you should do it again. You keep doing it until the rule says you can stop. It's like eating cookies from a jar – you eat one, then check for more cookies, and if there are more, you keep eating.
// A do-while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. Here's the basic structure of a do-while loop in JavaScript:
// do {
  // Code to be executed
// }
// while (condition);

//In this structure:
//The code inside the do block is executed first.
//After executing the code, the condition is checked.
//If the condition is true, the loop continues, and the code block is executed again.
//If the condition is false, the loop stops.

console.log("do while loop \n"); // Print a message indicating the use of a do...while loop

var i = 0; // Initialize a counter variable 'i'

do {
  var text = "The number is " + i; // Create a text string with the current number
  console.log(text); // Print the text to the console
  i++; // Increment the counter variable 'i' for the next iteration
} while (i < 10); // Continue the loop until 'i' is less than 10

//Note: It is very important to set a condition that will become false otherwise code editor will crash. 
