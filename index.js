#! /usr/bin/env node
import inquirer from "inquirer";
//divide project on smalll chunks
//computer will generate a random number
//user input for guessing number
// compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 7);
// console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    }
]);
//Conditional statment
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You Guessed the Right Number.");
}
else {
    console.log("Ooopps, You Guessed the Wrong Number");
}
