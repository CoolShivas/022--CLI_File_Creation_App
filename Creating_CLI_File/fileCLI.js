import readline from "readline";

// // // // readline.createInterface for read and write data;
const lineReader = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const fileCreation = () => {
    console.log("\nEnter your file name : ");
    console.log("Enter the content of your file : ");
    lineReader.close(); // // Closing the interface now;
};

fileCreation();
// // // // Here, we are getting the Output on Terminal as :-
// // // // Enter your file name : 
// // // // Enter the content of your file : 
// // // // Completed running 'fileCLI.js'