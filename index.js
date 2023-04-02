// TODO: Include packages needed for this application
const fs = reuqire ('fs');
const inquirer = require ('inquirer')

// This is imports our generateMarkDown function to write the file 
const generateMarkDown = required('./utils/generateMarkDown')

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    { type: 'input',
    message: 'What is the title of this project?',
    answer: 'Creator of README',
},
{
    type: 'input',
    message: 'Can you give a brelif description?',
    //name:"When you run and install iquirer and get it up and running youll be able to use node indexjs after typing node indexjs youll be to get some prompts and after typing them youll make a README",
    name: 'Description',

}, 
{
    type: 'list',
    message:' Choose a License from the list',
    name:"license",
    Choices:['GNU General Public License v3.0 ','MIT License', 'BSD 2-Clause "Simplified" license', 'BSD 3-CLause "new" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Unviersal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU Gerneral Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    
},
{
    type: 'input',
    message: 'what and how did you install?',
    //name: ' You needed to install inquirer using npm i -y in the terminal and make sure you have the correct file integrated in the terminal to be able to run and install it',
    name: 'installation instructions'
}, 
{ type: 'input',
message: ' whats the usage?',
name: ' to be able to create a proper README md',
// name: 'Motavtion'

}, 
{
    type: 'input',
    message: 'What is your GitHub?',
    name:'jzamorano20',
}, 
{ type: 'input',
message:'whats your email in case the user has questions or wants to reach out? ',
name: 'email',
    
},
{
    type: 'input',
    Message: 'What resources did you to build this application',
    name: 'resources',
},
]);

//Created a function to write README file
function genReadme(markdown) {
    fs.writeFile('./README.md', markdown, (err) => {
        if (err) return console.log(err);
        
        console.log('File created successfully');
    });
}

// Created a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        console.log(answers);
    });
}

// Function call to initialize app
init();
