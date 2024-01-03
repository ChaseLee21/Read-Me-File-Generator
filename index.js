// Include packages needed for this application
const inqurier = require('inquirer');

// Create an array of questions for user input
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
    // WHEN I choose a license for my application from a list of options
    // TODO: THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    {
        type: 'list',
        message: 'Select a License for your project.',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        default: 'None'
    },
    // WHEN I enter my GitHub username
    // TODO: THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    {
        type: 'input',
        message: 'GitHub Username?',
        name: 'github'
    },
    // WHEN I enter my email address
    // TODO: THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    {
        type: 'input',
        message: 'Email Address?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Create a function to initialize app
function init() {
    inqurier.prompt(questions)
    .then((answers) => {
        console.log(answers);
    })
}

// Function call to initialize app
init();



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README