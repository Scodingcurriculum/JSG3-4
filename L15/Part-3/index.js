//Program that calculates the sum of all natural numbers up to a given value using recursion

// Function to calculate the sum of natural numbers using recursion
function sumNaturalNumbers(n) {
  // Base case: if n is 1 or less, return n
  if (n <= 1) {
      return n;
  } else {
      // Recursive case: add current number and call the function recursively with n-1
      return n + sumNaturalNumbers(n - 1);
  }
}

// Define the number up to which you want to find the sum of natural numbers
let number = 5; // Change this number to find the sum of natural numbers up to a different value

// Call the function and store the result
let result = sumNaturalNumbers(number);

// Display the result in the console
console.log(`Sum of natural numbers up to ${number} is ${result}`);

//sumNaturalNumbers is a recursive function that computes the sum of natural numbers up to n.
//The base case checks if n is less than or equal to 1. If true, it returns n.
//In the recursive case, the function calculates the sum by adding the current number n with the result of sumNaturalNumbers(n - 1) (i.e., sum of natural numbers up to n - 1).
//This code calculates the sum of natural numbers from 1 up to the specified value (number) using recursion and displays the result in the console. Adjust the value of number variable to find the sum up to a different value.
