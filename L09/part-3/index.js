//Write a program to convert the temperature (Celsius to Fahrenheit)


// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32; // Formula to convert Celsius to Fahrenheit
  return fahrenheit; // Return the converted temperature in Fahrenheit
}

// Define a temperature in Celsius
let celsiusTemp = 25;

// Call the function and store the converted temperature in Fahrenheit
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);

// Display the converted temperature in Fahrenheit
console.log(celsiusTemp + " degrees Celsius is equal to " + fahrenheitTemp + " degrees Fahrenheit.");
