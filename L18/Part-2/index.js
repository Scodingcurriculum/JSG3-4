//Program to print first 5 odd numbers by skipping even numbers
let count = 1; // Start with the first odd number
let oddNumbersCount = 0;

console.log("First 5 odd numbers by skipping even numbers are:")
while (oddNumbersCount < 5) {
    if (count % 2 !== 0) {
        console.log(count); // Prints odd numbers
        oddNumbersCount++; // Increment count of odd numbers printed
    }
    count++; // Move to the next number
}


//This code snippet uses a while loop to check numbers and print the first 5 odd numbers by skipping even numbers.