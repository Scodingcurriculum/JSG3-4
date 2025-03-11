// Function to count the number of vowels in a string
function countVowels(str) {
  // Convert the input string to lowercase to handle both uppercase and lowercase vowels
  const lowerCaseStr = str.toLowerCase();

  // Convert the string into an array of characters using split('')
  const characters = lowerCaseStr.split('');

  // Use filter to create a new array containing only vowels ('a', 'e', 'i', 'o', 'u')
  const vowelsArray = characters.filter(char => 'aeiou'.includes(char));

  // Count the number of elements in the filtered array, which represents the number of vowels
  const vowelsCount = vowelsArray.length;

  return vowelsCount; // Return the count of vowels in the string
}

// Example usage:
const inputString = "Hello, World!"; 
const vowelsCount = countVowels(inputString);
console.log(`The number of vowels in "${inputString}" is: ${vowelsCount}`);


//explanation of the code:

//countVowels is a function that takes a string (str) as an argument.
//It converts the input string to lowercase to ensure that both uppercase and lowercase vowels are counted correctly.
//The string is then converted into an array of characters using split('').
//filter() is used to create a new array containing only the vowels present in the string.
//The number of elements in the filtered array represents the count of vowels in the string.
//Finally, the function returns the count of vowels.
//The example usage demonstrates how to call the countVowels function with a string, and it displays the count of vowels in that string.
