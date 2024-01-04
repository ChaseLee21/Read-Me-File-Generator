// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }

  // Creates a markdown image link for the license badge based on the license selected
  // This only works if the license name is the same as the badge name on shields.io
  // and if the license name is the same as the license name on opensource.org
  // and if the license name has no spaces
  // TODO: rework this to a switch statement to meet the criteria for the project
  const licenseBadge = `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  console.log(licenseBadge);
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// PARAMETER: user inputed data from inquirer
// RETURNS: data formatted into a README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.testInstructions}
  ## License
  ${data.license}
  ## Questions
  For any questions feel free to connect with me on github or by email.
  ### Contact
  GitHub: ${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
