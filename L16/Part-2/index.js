//Program to find exponential number using exponential method

// Program to find exponential number using Math.exp()

let base = 2; // Base number
let exponent = 3; // Exponent

// Calculating the result of 'e' raised to the power of 'exponent'
let result = Math.exp(exponent * Math.log(base));

console.log(`The result of ${base} raised to the power of ${exponent} using Math.exp():`, result);

//Math.exp() calculates 'e' raised to the power of a given number.
//In the code, we first calculate the natural logarithm of the base number (Math.log(base)).
//Then, we multiply the natural logarithm by the exponent and use Math.exp() to compute the result.
//This code demonstrates how to find the exponential number using the Math.exp() method in JavaScript. Adjust the base and exponent variables to find the exponential value for different numbers.