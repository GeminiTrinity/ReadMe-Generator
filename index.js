// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

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
            message: "Include the live link to the deployed app (start with http://):"
        },
        {
            name: "installationOne",
            type: "input",
            message: "First step to install your project. (skip if none)"
        },
        {
            name: "installationTwo",
            type: "input",
            message: "Second step to install your project. (skip if none)"
        },
        {
            name: "installationThree",
            type: "input",
            message: "Third step to install your project. (skip if none)"
        },
        {
            name: "installationFour",
            type: "input",
            message: "Fourth step to install your project. (skip if none)"
        },
        {
            name: "installationFive",
            type: "input",
            message: "Fifth step to install your project. (skip if none)"
        },
        {
            name: "usage",
            type: "input",
            message: "Provide instructions on how to use your project."
        },
        {
            name: "collaborators",
            type: "input",
            message: "Include any collaborators, as well as their GitHubs and emails. (skip if none):"
        },
        {
            name: "thirdParty",
            type: "input",
            message: "Include any third-parties and their links that require attribution. (skip if none):"
        },
        {
            name: "tutorials",
            type: "input",
            message: "Include any tutorial links here. (skip if none):"
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
            message: "Include your GitHub Link (start with http://)"
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
// function writeToFile(filename, data) {
//     return fs.writeFileSync(filename, data)
// }

// function to initialize program
function init() {
    inquirer
    .prompt(questions).then((answer) => {
        fs.writeFileSync("README.md", generateMarkdown(answer))
    })
}

// function call to initialize program
init();
