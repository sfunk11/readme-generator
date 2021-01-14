const inquirer = require("inquirer");
const fs = require("fs");
const md = require("./generateMarkdown.js");
const generateMarkdown = require("./generateMarkdown");
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project."
    } ,
    {
        type: "input",
        name: "installation",
        message: "How is your application installed?",
    },
    {
        type: "input",
        name: "picturefile",
        message: "Please give the filename for a screenshot or video of your app in action",
    },
    {
        type: "input",
        name: "usage",
        message: "Please give me details on how to use your app.",
    },
    {
        type: "input",
        name: "license",
        message: "What type of license are you using?",
    },
    {
        type: "input",
        name: "contribute",
        message: "Please enter instructions for contributing to your repository.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter your test information.",
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github profile link?",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    }  
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!'))
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => writeToFile("README.md", generateMarkdown(response)));
}

// function call to initialize program
init();
