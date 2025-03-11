//Program to print date and time according to timezone

//To display the date and time according to a specific timezone, you can use the toLocaleString() method in conjunction with the timeZone option. Here's an example:

// Define the target timezone (e.g., "America/New_York")
const targetTimezone = "America/New_York";

// Get the current date and time in the target timezone
const options = { timeZone: targetTimezone };
const currentTime = new Date().toLocaleString('en-US', options);

// Display the date and time in the target timezone
console.log(`Current date and time in ${targetTimezone}: ${currentTime}`);

//Replace "America/New_York" with your desired timezone (you can use timezone names like "America/Los_Angeles", "Europe/London", etc.).

//This code snippet uses the toLocaleString() method along with the timeZone option to get the current date and time for a specific timezone and then logs the result to the console. Adjust the targetTimezone variable to the timezone you want to display.
