// Importing packages needed for this application
// inquirer for user input
// fs to write file
// generateMarkdown to create the README
const inqurier = require('inquirer');
const fs = require('fs');
const gm = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'Project Name? This will be the title of your README.',
    name: 'title'
    },
    {
        type: 'input',
        message: 'Project Description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Usage Information?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution Guidelines?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Test Instructions?',
        name: 'testInstructions'
    },
    {
        type: 'input',
        message: 'Installing Instructions?',
        name: 'install'
    },
    {
        type: 'list',
        message: 'Select a License for your project.',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        default: 'None'
    },
    {
        type: 'input',
        message: 'GitHub Username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Email Address?',
        name: 'email'
    }
];

// PARAMETERS: fileName, data
// fileName is the name of the file to be written to 
// data is the content to be written to the file
// RESULT: a file generated with passed in fileName and content
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
}

// RESULT: initializes the application
function init() {
    inqurier.prompt(questions)
    .then((answers) => {
        let content = gm(answers);
        writeToFile('export/README.md', content);
    })
}

// Function call to initialize app
init();