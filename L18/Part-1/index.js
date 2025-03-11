//Imagine you're playing a game or doing a puzzle, and sometimes you want to stop or skip parts of the game to do something else. That's what break and continue do in programming!

//break:
//Break is like saying, "I want to stop the game now, I'm done!"
//For example, if you're counting numbers from 1 to 10 and you reach 5, but then you say, "I want to stop now," that's using break.

// Using break in a game of counting
console.log("Using break in a game of counting:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("I'm tired, let's stop at 5!");
        break; // I'm tired, let's stop at 5!
    }
    console.log(i); // Prints numbers from 1 to 5
}


//continue:
//Continue is when you want to skip just one step and move on to the next.
//For instance, if you're counting from 1 to 10 but decide to skip number 5, you're using continue.


// Using continue in a counting game
console.log("\nUsing continue in a counting game:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping number 5!");
        continue; // Skipping number 5!
    }
    console.log(i); // Prints numbers from 1 to 10 but skips 5
}