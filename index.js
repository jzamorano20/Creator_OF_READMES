// TODO: Include packages needed for this application
const fs = require('fs');
const { prompt } = require('inquirer')
// This is imports our generateMarkDown function to write the file 
const generateMarkDown = require('./utils/generateMarkDown')

// TODO: Create an array of questions for user input
const questions = ([
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Can you give a brelif description of the project?',
        //name:"When you run and install iquirer and get it up and running youll be able to use node indexjs after typing node indexjs youll be to get some prompts and after typing them youll make a README",
        name: 'Description',

    },
    {
        type: 'list',
        message: ' Choose a License from the list',
        name: "License",
        choices: ["MIT License", "Apache License 2.0", "GNU General Puplic License v3.0", "Mozilla Public License 2.0", "None"]
    },
    {
        type: 'input',
        message: 'what and how did you install?',
        //name: ' You needed to install inquirer using npm i -y in the terminal and make sure you have the correct file integrated in the terminal to be able to run and install it',
        name: 'Installation'
    },
    {
        type: 'input',
        message: ' whats the usage?',
        name: 'Usage',

    },
    {
        type: "input",
        name: "Contribution",
        message: "Explain the guidelines for contributing to this project?",
    },
    {
        type: "input",
        name: "Test",
        message: "Explain the necessary steps to run the tests for your project?",

    },
    {
        type: "input",
        name: "Github",
        message: "Please, enter your GitHub Profile Link:",
    },
    {
        type: "input",
        name: "Email",
        message: "Please, enter your email address:",
    }
]);

//Created a function to write README file
function genReadme(markdown) {
    fs.writeFile('./dist/README.md', markdown, (err) => {
        if (err) return console.log(err);

        console.log('File created successfully');
    });
}

// Created a function to initialize app
function init() {
    prompt(questions).then(function (answers) {
        console.log(answers);
        const generatedMarkdown = generateMarkDown(answers)
        genReadme(generatedMarkdown)

    });
}

// Function call to initialize app
init();
