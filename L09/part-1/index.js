//Functions
//Functions are like your favourite superhero who can do amazing things. Just like Spider-Man can swing from building to building or shoot webs, a function can perform its own special 'superpower' tasks. You can ask your superhero (function) to use their powers by calling their name. They help you with different tasks, like solving math problems, drawing pictures, or playing your favourite song. Functions make your computer programs smart and do what you want

// Functions are declared using the function keyword. Functions can be assigned to variables. Functions can be passed as arguments to other functions. Functions can be returned from other functions.

// Syntax
// function functionName(parameters) {
  // Code to be executed
  // You can use the 'parameters' as input
  // }


//Example1
console.log("Function Example")
function sayHello() {
  console.log("Hello, World!");
}
sayHello(); // Call the function to display the message "Hello, World!"
//In this example, the sayHello function doesn't take any input values but instead directly displays the message "Hello, World!" when called. 


console.log("\n")

//_______________________________________________________________________________________________________________

//Example2
console.log("Example 2")

function addNumbers() {
  const num1 = 5;
  const num2 = 3;
  const sum = num1 + num2;
  console.log('The sum of '+num1+" and "+num2+ " is "+sum)
}

addNumbers();
console.log("\n"); // Add a new line after the output


//In this example, the addNumbers function doesn't take any input values but instead uses fixed numbers (num1 and num2) to calculate their sum. When you call the function, it will always calculate the sum of 5 and 3.



//_______________________________________________________________________________________________________________
//function return
// Function can do a special job and give you a special gift. When it's done with the job, it can say, "Here's your gift!" The "return" is like the function's way of giving you the gift it made. For example, a function can double a number and give you the doubled number as a gift.

 //Example3
console.log("Function Return Example")

// Let's create a function that doubles a number and gives it back as a gift
function doubleNumber(number) {
  var doubled = number * 2; // Do the magic to double the number
  return doubled; // Return the doubled number as a gift
}

var result = doubleNumber(5); // Put the number 5 into the function
console.log(result); // Get the doubled number as a gift and print it

// In this code:
// We have a function called doubleNumber that takes a number as input.
// The function doubles the number and gives it back as a gift using the return statement.
// When we call the function with doubleNumber(5), it's like giving the function the number 5 to double.
// The function does the magic, doubles the number, and gives it back.
// We store the gift (the doubled number) in the result variable.
// Finally, we print the doubled number, which is 10, to the console.
console.log("\n")

