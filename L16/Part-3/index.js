//Program to convert any dates to numbers

// Program to convert a manually input date to a number

// Manual input of the date (year, month (zero-based), day, hours, minutes, seconds, milliseconds)
let manualDate = new Date(2023, 10, 15, 12, 30, 0, 0); // November 15, 2023, 12:30:00

// Get the number of milliseconds since January 1, 1970, UTC
let dateAsNumber = manualDate.getTime();

console.log(`The manually input date as a number: ${dateAsNumber}`);


//This code snippet creates a Date object for November 15, 2023, at 12:30:00 and converts it to a number representing the number of milliseconds since January 1, 1970, UTC. You can adjust the date and time by modifying the arguments passed to the Date constructor.





