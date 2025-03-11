// Program to check if a key exists in an object

// Define an object called 'person' with key-value pairs
let person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};

// Check if the 'age' key exists in the 'person' object using the 'in' operator
if ('age' in person) {
  console.log('The key "age" exists in the object.');
} else {
  console.log('The key "age" does not exist in the object.');
}

// Check if the 'gender' key exists in the 'person' object using the 'in' operator
if ('gender' in person) {
  console.log('The key "gender" exists in the object.');
} else {
  console.log('The key "gender" does not exist in the object.');
}

// This code defines an object called 'person' and uses the 'in' operator to check 
// if the keys 'age' and 'gender' exist in the 'person' object. 
// It then logs whether each key exists or not in the object.
// The output of the code will be:
// The key "age" exists in the object.
// The key "gender" exists in the object.