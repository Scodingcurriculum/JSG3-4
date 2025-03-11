//String property
console.log("length: Returns the number of characters in the string.")
//length: Returns the number of characters in the string.
const text = "Hello, World!";
const length = text.length; // 13
console.log(length)

//String methods
console.log("charAt(index): Returns the character at the specified index.")
//charAt(index): Returns the character at the specified index.
const b = "Coding";
const char = b.charAt(3); // "i"
console.log(char)

//substring(start, end): Extracts and returns a portion of the string between the specified start and end indices.
console.log("substring(start, end): Extracts and returns a portion of the string between the specified start and end indices.")
const sentence = "This is a sample sentence.";
const part = sentence.substring(5, 7); // "is"
console.log(part)

console.log("toUpperCase(): Converts all characters in the string to uppercase.")
//toUpperCase(): Converts all characters in the string to uppercase.
const text8 = "Hello, World!";
const uppercaseText = text8.toUpperCase(); // "HELLO, WORLD!"
console.log(uppercaseText)

console.log("toLowerCase(): Converts all characters in the string to lowercase.")
//toLowerCase(): Converts all characters in the string to lowercase.
const text3 = "Hello, World!";
const lowercaseText = text3.toLowerCase(); // "hello, world!"
console.log(lowercaseText)

console.log("concat(string): Joins two or more strings.")
//concat(string): Combines two strings.
const text1 = "Hello";
const text2 = "World";
const combinedText = text1.concat(" ", text2); // "Hello World"
console.log(combinedText)

console.log("includes(string): Returns true if the string contains the specified string.")
//includes(string): Returns true if the string contains the specified string.
const text10 = "Hello, World!";
const includesText = text10.includes("World"); // true
console.log(includesText)

console.log("indexOf(string): Returns the index of the first occurrence of the specified string.")
//indexOf(string): Returns the index of the first occurrence of the specified string.
const text11 = "Hello, World!";
const index = text11.indexOf("World"); // 7
console.log(index)

console.log("lastIndexOf(string): Returns the index of the last occurrence of the specified string.")
//lastIndexOf(string): Returns the index of the last occurrence of the specified string.
const text12 = "Hello, World!";
const indexx = text12.lastIndexOf("World"); // 7
console.log(indexx)

console.log("replace(string1, string2): Replaces the first occurrence of the specified string with the specified replacement string.")
//replace(string1, string2): Replaces the first occurrence of the specified string with the specified replacement string.
const text13 = "Hello, World!";
const replacedText = text13.replace("World", "JavaScript"); // "Hello, JavaScript!"
console.log(replacedText)

console.log("slice(start, end): Extracts a section of a string and returns it as a new string.")
//slice(start, end): Extracts a section of a string and returns it as a new string.
const text14 = "Hello, World!";
const slicedText = text14.slice(6, 11); // " Worl"
console.log(slicedText)

console.log("split(separator): Splits a string into an array of substrings by the specified separator.")
//split(separator): Splits a string into an array of substrings by the specified separator.
const text15 = "Hello, World!";
const splitText = text15.split(","); // ["Hello", " World!"]
console.log(splitText)

console.log("startsWith(string): Returns true if the string starts with the specified string.")
//startsWith(string): Returns true if the string starts with the specified string.
const text16 = "Hello, World!";
const startsWithText = text16.startsWith("Hello"); // true
console.log(startsWithText)

console.log("endsWith(string): Returns true if the string ends with the specified string.")
//endsWith(string): Returns true if the string ends with the specified string.
const text17 = "Hello,World!";
const endsWithText = text17.endsWith("World"); // false
console.log(endsWithText)

console.log("trim(): Removes whitespace from both ends of a string.")
//trim(): Removes whitespace from both ends of a string.
const text18 = "  Hello, World!  ";
const trimmedText = text18.trim(); // "Hello, World!"
console.log(trimmedText)

