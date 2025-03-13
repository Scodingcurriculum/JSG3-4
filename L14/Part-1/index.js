//Boolean
//In the world of computers, we have something called "booleans," and they are like magic spells that can give you a "yes" or a "no" answer.
//Imagine you have a magic crystal ball, and you can ask it questions. It can either say "yes" (true) or "no" (false).
//In JavaScript, a boolean is a data type that represents one of two values: true or false. 

// Boolean() function determines if an expression is true or false.
console.log("Boolean() function to find out if an expression is true or false.");
console.log(Boolean(10 > 20)); // Outputs: false (10 is not greater than 20)

console.log("\n");

// Explanation: Booleans are obtained when comparing values using comparison operators.
console.log("Booleans obtained from comparison operators:");
console.log("5 is equal to 5, which is true");
let isEqual = 5 === 5; // isEqual will be true
console.log(isEqual);

// Similar comparisons for inequality, greater than, less than, etc.
console.log("5 is not equal to 5, which is false");
let isNotEqual = 5 !== 5; // isNotEqual will be false
console.log(isNotEqual);

// ... (additional comparisons explained with comments)

console.log("\n");

// Explanation: Different values have different Boolean representations.
console.log("Boolean values of different data types:");
var k = 20;
console.log(Boolean(k)); // true (any non-zero number is true)

var j = 0;
console.log(Boolean(j)); // false (zero is false)

var x = 10 / "J";
console.log(Boolean(x)); // false (NaN results in false)

var y = null;
console.log(Boolean(y)); // false (null is false)

var z = false;
console.log(Boolean(z)); // false (false is false)

var s = "";
console.log(Boolean(s)); // false (empty string is false)

console.log("\n");
//___________________________________________________________________________________



// Comparison Operators and their Outputs
console.log("Comparison Operators and their Outputs");
// Explanation: Equality Operator (==)
console.log("Equality Operator (==):");
console.log("5 is equal to '5' when using the equality operator, which is true because type coercion happens");
console.log(5 == '5'); // Outputs: true (equality without checking data type)

console.log("\n");

// Explanation: Strict Equality Operator (===)
console.log("Strict Equality Operator (===):");
console.log("5 is not strictly equal to '5' as it checks both value and data type, which is false");
console.log(5 === '5'); // Outputs: false (strict equality checks both value and data type)

console.log("\n");

// Explanation: Inequality Operator (!=)
console.log("Inequality Operator (!=):");
console.log("5 is not equal to 10, which is true");
console.log(5 != 10); // Outputs: true (checks if values are not equal)

console.log("\n");

// Explanation: Strict Inequality Operator (!==)
console.log("Strict Inequality Operator (!==):");
console.log("5 is strictly not equal to '5', which is true");
console.log(5 !== '5'); // Outputs: true (strict inequality checks both value and data type)

console.log("\n");

// Explanation: Greater Than Operator (>)
console.log("Greater Than Operator (>):");
console.log("5 is greater than 3, which is true");
console.log(5 > 3); // Outputs: true (checks if the left side is greater than the right side)

console.log("\n");

// Explanation: Less Than Operator (<)
console.log("Less Than Operator (<):");
console.log("5 is less than 10, which is true");
console.log(5 < 10); // Outputs: true (checks if the left side is less than the right side)

console.log("\n");

// Explanation: Greater Than or Equal To Operator (>=)
console.log("Greater Than or Equal To Operator (>=):");
console.log("5 is greater than or equal to 5, which is true");
console.log(5 >= 5); // Outputs: true (checks if the left side is greater than or equal to the right side)

console.log("\n");

// Explanation: Less Than or Equal To Operator (<=)
console.log("Less Than or Equal To Operator (<=):");
console.log("5 is less than or equal to 5, which is true");
console.log(5 <= 5); // Outputs: true (checks if the left side is less than or equal to the right side)

console.log("\n");
//___________________________________________________________________________________

console.log("Logical Operators and their Outputs");
// Logical Operators and their Outputs

// Explanation: Logical AND (&&)
console.log("Logical AND (&&):");
console.log("Both conditions 5 > 3 and 10 > 5 are true, which results in true");
console.log(5 > 3 && 10 > 5); // Outputs: true (both conditions must be true for the entire expression to be true)

console.log("\n");

// Explanation: Logical OR (||)
console.log("Logical OR (||):");
console.log("At least one condition 5 > 3 or 10 < 5 is true, which results in true");
console.log(5 > 3 || 10 < 5); // Outputs: true (at least one condition must be true for the entire expression to be true)

console.log("\n");

// Explanation: Logical NOT (!)
console.log("Logical NOT (!):");
console.log("The condition !(5 === 5) is false because the original condition is true");
console.log(!(5 === 5)); // Outputs: false (negates the result; true becomes false and vice versa)

console.log("\n");





