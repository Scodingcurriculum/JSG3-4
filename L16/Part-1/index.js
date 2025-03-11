// Number Methods and Properties Explanation

// 1. toFixed(): Formats a number using fixed-point notation.
let num1 = 10.3456;
let fixedNum = num1.toFixed(2); // Rounds to 2 decimal places
console.log("toFixed():", fixedNum); // Output: 10.35

// 2. toPrecision(): Formats a number to a specified length.
let precisionNum = num1.toPrecision(3); // Formats to 3 significant digits
console.log("toPrecision():", precisionNum); // Output: 10.3

// 3. toString(): Converts a number to a string.
let strNum = num1.toString();
console.log("toString():", strNum); // Output: "10.3456"

// 4. parseInt(): Parses a string and returns an integer.
let intNum = parseInt("10");
console.log("parseInt():", intNum); // Output: 10

// 5. parseFloat(): Parses a string and returns a floating-point number.
let floatNum = parseFloat("10.3456");
console.log("parseFloat():", floatNum); // Output: 10.3456

// Number Properties
// 1. MAX_VALUE: Returns the largest representable number in JavaScript.
console.log("MAX_VALUE:", Number.MAX_VALUE); // Output: 1.7976931348623157e+308

// 2. MIN_VALUE: Returns the smallest representable number in JavaScript.
console.log("MIN_VALUE:", Number.MIN_VALUE); // Output: 5e-324

// 3. NaN: Represents "Not-a-Number" value.
console.log("NaN:", Number.NaN); // Output: NaN

// 4. POSITIVE_INFINITY: Represents positive infinity.
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY); // Output: Infinity

// 5. NEGATIVE_INFINITY: Represents negative infinity.
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY); // Output: -Infinity
