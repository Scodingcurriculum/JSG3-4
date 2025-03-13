//Switch Statements
//Imagine you have a box of different toys, and you want to pick one toy to play with based on the day of the week. The switch statement in JavaScript is a bit like that. It helps you choose different actions or toys based on a specific condition.

//Let's pretend each day of the week is like a different toy in your toy box. When you check which day it is, you can use the switch statement to decide which toy (or action) to play with for that day.

// Define a variable 'day' representing a day of the week
let day = "Wednesday"; // Change the day to see different outputs

// Start of the switch statement
switch (day) {
  // Case for Monday
  case "Monday":
    console.log("Let's play with building blocks!"); // Output if day is Monday
    break; // Break to exit the switch statement once the case is matched

  // Case for Tuesday
  case "Tuesday":
    console.log("How about painting a picture today?"); // Output if day is Tuesday
    break; // Break to exit the switch statement once the case is matched

  // Case for Wednesday
  case "Wednesday":
    console.log("Time to read an exciting storybook!"); // Output if day is Wednesday
    break; // Break to exit the switch statement once the case is matched

  // Case for Thursday
  case "Thursday":
    console.log("Let's have fun with some puzzles!"); // Output if day is Thursday
    break; // Break to exit the switch statement once the case is matched

  // Case for Friday
  case "Friday":
    console.log("Yay! It's game day today!"); // Output if day is Friday
    break; // Break to exit the switch statement once the case is matched

  // Case for Saturday
  case "Saturday":
    console.log("Time for outdoor adventures!"); // Output if day is Saturday
    break; // Break to exit the switch statement once the case is matched

  // Case for Sunday
  case "Sunday":
    console.log("Relax and enjoy some family time!"); // Output if day is Sunday
    break; // Break to exit the switch statement once the case is matched

  // Default case for any other day not specified above
  default:
    console.log("Hmm, let's do something fun today!"); // Output for any other day
    break; // Break to exit the switch statement once the default case is reached
}



//n this case:

//The switch statement checks what day it is.
//Based on the day, it picks a specific activity (or toy) to enjoy.
//If it's a day not mentioned in the switch cases, it suggests doing something fun without a specific toy in mind.
//Just like picking a toy from your box that matches the day you have, the switch statement selects a specific action or code to run based on the day it finds.
//The break statement is used within loops or switch statements to control the flow of execution. Specifically in a switch statement, break is used to stop the code from executing further once a particular condition (a case) is satisfied.