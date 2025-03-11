// Multiplication Table using a for loop

let number = 9; // Change this number for different tables

// Display the multiplication table heading
console.log(`Multiplication Table of ${number}:`);

// Loop through and display the multiplication table
for (let i = 1; i <= 10; i++) {
    let product = number * i; // Calculate the product
    console.log(`${number} * ${i} = ${product}`);
}
