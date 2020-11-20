// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    // Assistance with learning Inquirer: https://bit.ly/3nzs1O2
        {
            name: "title",
            type: "input",
            message: "What would you like the title to be?"
        },
        {
            name: "description",
            type: "input",
            message: "Write a description of what your project does."
        },
        {
            name: "link",
            type: "input",
            message: "Include the live link to the deployed app:"
        },
        {
            name: "installation",
            type: "input",
            message: "Write the steps required to install your project."
        },
        {
            name: "usage",
            type: "input",
            message: "Provide instructions on how to use your project."
        },
        {
            name: "collaborators",
            type: "input",
            message: "Include any collaborators, as well as their GitHubs and emails, here (skip if none):"
        },
        {
            name: "third-party",
            type: "input",
            message: "Include any third-parties that require attribution (skip if none):"
        },
        {
            name: "tutorials",
            type: "input",
            message: "Include any tutorial links here (skip if none):"
        },
        {
            name: "license",
            type: "list",
            message: "Please choose the license for this project.",
            choices: ["MIT", "ISC", "Apache-2.0", "N/A"]
        },
        {
            name: "github",
            type: "input",
            message: "What is your GitHub username?"
        },
        {
            name: "email",
            type: "input",
            message: "What is your email address?"
        },
        {
            name: "phone",
            type: "input",
            message: "What is your phone number? (xxx-xxx-xxxx)"
        },
]

// function to write README file
function writeToFile() {

}

// function to initialize program
function init() {
    inquirer
    .prompt([questions])
}

// function call to initialize program
init();
