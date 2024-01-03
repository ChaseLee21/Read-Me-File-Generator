// TODO: Include packages needed for this application
const inqurier = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    // WHEN I enter my project title
    // TODO: THEN this is displayed as the title of the README
    {
    type: 'input',
    message: 'Project Name? This will be the title of your README.',
    name: 'title'
    },
    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    // TODO: THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    {
        type: 'input',
        message: 'Installing Instructions?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Usage Information?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Contribution Guidelines?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Test Instructions?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Project Description?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Choose a license?',
        name: 'title'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README