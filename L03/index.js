//Four different ways to swap the values of two variables in JavaScript

//1. Using Destructuring Variables
// Original values
let x = 5;
let y = 10;

// Swapping using destructuring
[x, y] = [y, x];

// Displaying the swapped values
console.log("Option 1: Using Destructuring Variables");
console.log("Original values:");
console.log("x =", x);
console.log("y =", y);

// Explanation:
// - We declare two variables, x and y, with their original values.
// - We use array destructuring to swap the values of x and y. The right-hand side creates a new array [y, x],
//   and the destructuring assignment assigns the values from the array to x and y, effectively swapping them.

console.log("After swapping:");
console.log("x =", x); // New value of x (originally y)
console.log("y =", y); // New value of y (originally x)



//____________________________________________________________________________________

//2. Using Temporary Variables
// Original values
let a = 5;
let b = 10;

// Original values
let p = 5;
let q = 10;

// Using a temporary variable to swap values
let temp = p;
p = q;
q = temp;

// Displaying the swapped values
console.log("\nOption 2: Using Temporary Variables");
console.log("Original values:");
console.log("p =", p);
console.log("q =", q);

// Explanation:
// - We declare two variables, p and q, with their original values.
// - We use a temporary variable (temp) to store one of the values.
// - We then assign the value of the other variable to the first variable, effectively swapping them.
// - Finally, we assign the value stored in the temporary variable back to the second variable.

console.log("After swapping:");
console.log("p =", p); // New value of p (originally q)
console.log("q =", q); // New value of q (originally p)


//____________________________________________________________________________________

//3. Using Addition and Difference
// Original values
let m = 5;
let n = 10;

// Swapping without a temporary variable
m = m + n;
n = m - n;
m = m - n;

// Displaying the swapped values
console.log("\nOption 3: Using Addition and Difference");
console.log("Original values:");
console.log("m =", m);
console.log("n =", n);

// Explanation:
// - We declare two variables, m and n, with their original values.
// - We perform swapping without using a temporary variable.
// - We update m to be the sum of m and n, effectively storing the sum in m.
// - We update n to be the difference between the new m and the original n, effectively storing the original m in n.
// - Finally, we update m to be the difference between the new m and the updated n, which contains the original m, effectively swapping the values.

console.log("After swapping:");
console.log("m =", m); // New value of m (originally n)
console.log("n =", n); // New value of n (originally m)


//____________________________________________________________________________________

//4. Using Logic Gates (XOR)
// Original values
// Original values
let c = 5;
let d = 10;

// Swapping using XOR (^)
c = c ^ d;
d = c ^ d;
c = c ^ d;

// Displaying the swapped values
console.log("\nOption 4: Using Logic Gates (XOR)");
console.log("Original values:");
console.log("c =", c);
console.log("d =", d);

// Explanation:
// - We declare two variables, c and d, with their original values.
// - We use the XOR (^) bitwise operator to swap the values of c and d.
// - The properties of XOR allow us to swap the values without using a temporary variable.
// - After applying XOR operations, c contains the original value of d, and d contains the original value of c.

console.log("After swapping:");
console.log("c =", c); // New value of c (originally d)
console.log("d =", d); // New value of d (originally c)
