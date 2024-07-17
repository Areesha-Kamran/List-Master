#! /usr/bin/env node

import inquirer from "inquirer"

import chalk from "chalk";

import chalkAnimation from "chalk-animation";

async function welcome () {
    let title = chalkAnimation.rainbow("\t\t\t\tWelcome to ListMaster!")
    await new Promise((resolve) => {
        setTimeout(resolve,3000);
    });
    title.stop();
}

await welcome()


let todos = [];
let condition = true;

while(condition)
    {
let addTask = await inquirer.prompt(
    [
        {
            name:"todo",
            type:"input",
            message:(chalk.cyan("What do you want to add in your ToDos?"))
        },
        {
            name:"addmore",
            type:"confirm",
            message:(chalk.yellowBright("Do you want to add more?")),
            default:false
        }
    ]
);
todos.push(addTask.todo)
condition = addTask.addmore
console.log(chalk.green(todos))
}
