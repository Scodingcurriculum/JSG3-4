//Program to get all even numbers upto a number n using while loop.

let n = 20; // Change this number to set the limit
let i = 1;

console.log(`Even numbers up to ${n}:`);

while (i <= n) {
    if (i % 2 === 0) { // Check if the current number i is even
        console.log(i); // If it's even, print the number
    }
    i++; // Increment i for the next iteration
}
