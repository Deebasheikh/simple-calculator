#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(chalk.bgBlue.bold.white.italic(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.bgGreen.bold.white.italic(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.bgMagenta.bold.white.italic(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.bgCyan.bold.white.italic(answer.firstNumber / answer.secondNumber));
}
else {
    console.log(chalk.bgRed.bold.white.italic("Please select valid operator."));
}
