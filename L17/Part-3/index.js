//Program to reverse a string 

// Function to reverse a string
function reverseString(str) {
  // Split the string into an array of characters
  const arrayOfChars = str.split(''); 

  // Reverse the array of characters
  const reversedArray = arrayOfChars.reverse(); 

  // Join the reversed array back into a string
  const reversedStr = reversedArray.join(''); 

  // Return the reversed string
  return reversedStr; 
}

// Example usage:
const inputString = "Hello, World!";
// Call the reverseString function with inputString and store the result
const reversed = reverseString(inputString); 
// Display the original and reversed strings
console.log(`Original string: "${inputString}"`);
console.log(`Reversed string: "${reversed}"`);


//Explanation of the code:

//reverseString is a function that takes a string (str) as an argument.
//split('') breaks the string into an array of characters.
//reverse() reverses the order of the elements in the array.
//join('') combines the elements of the array back into a string.
//The function returns the reversed string.
//The example usage demonstrates how to use the reverseString function with a string and display both the original and reversed strings.