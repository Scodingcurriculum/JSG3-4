//JavaScript Date object represents a date and time, providing various methods to work with dates and times. Here are some common properties and methods of the Date object:

//Properties:
//Date.now(): Returns the numeric value of the current timestamp in milliseconds since the Unix Epoch (January 1, 1970, 00:00:00 UTC).
//getFullYear(): Returns the year (four digits) of the specified date according to local time.
//getMonth(): Returns the month (from 0 to 11) for the specified date, according to local time.
//getDate(): Returns the day of the month (from 1 to 31) for the specified date, according to local time.
//getDay(): Returns the day of the week (from 0 for Sunday to 6 for Saturday) for the specified date, according to local time.
//getHours(): Returns the hour (from 0 to 23) for the specified date, according to local time.
//getMinutes(): Returns the minutes (from 0 to 59) for the specified date, according to local time.
//getSeconds(): Returns the seconds (from 0 to 59) for the specified date, according to local time.
//getMilliseconds(): Returns the milliseconds (from 0 to 999) for the specified date, according to local time.
//getTimezoneOffset(): Returns the time-zone offset in minutes for the current locale.

console
//Methods:
//new Date(): Creates a new Date object set to the current date and time.
//getDate(): Returns the day of the month for a specified date.
//getMonth(): Returns the month for a specified date (0-11).
//getFullYear(): Returns the year for a specified date.
//getHours(): Returns the hour for a specified date (0-23).
//getMinutes(): Returns the minutes for a specified date (0-59).
//getSeconds(): Returns the seconds for a specified date (0-59).
//toString(): Returns a string representation of the Date object.
//toUTCString(): Converts a date to a string, using the UTC time zone.

//Here's an example demonstrating some of these properties and methods:

// Create a new Date object
let today = new Date();

// Getting various date components
let year = today.getFullYear();
let month = today.getMonth(); // Note: Months are zero-based (0-11)
let day = today.getDate();
let dayOfWeek = today.getDay();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let milliseconds = today.getMilliseconds();
let timezoneOffset = today.getTimezoneOffset();

// Displaying date components
console.log(`Current Date: ${year}-${month + 1}-${day}`);
console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
console.log(`Timezone Offset: ${timezoneOffset} minutes`);
