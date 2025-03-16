import readline from "readline";
import fs from "fs";

// // // // readline.createInterface for read and write data;
const lineReader = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const fileCreation = () => {
    lineReader.question("Enter your file name : ", (filename) => {
        lineReader.question(`Enter the content of your file : `, (content) => {
            fs.writeFile(`${filename}.txt`, content, (err) => {
                if(err)
                {
                    console.log(`Error occuring while creating a file : , ${err.message}`);
                }
                else
                {
                    console.log(`File ${filename}.txt created successfully !`);
                }
                lineReader.close();
            })
        })
    })    
};

fileCreation();
// // // // Here, we are getting the Output on Terminal as :-
// // // // Enter your file name : shiva
// // // // Enter the content of your file : My name is shiva Chouhan.
// // // // File shiva.txt created successfully !
// // // // Completed running 'fileCLI.js'