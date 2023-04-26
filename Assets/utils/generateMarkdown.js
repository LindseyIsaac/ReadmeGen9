// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 
//conditionals
function renderLicenseBadge(license) {
  if(license == "none") {
    return""
  } else {
    return `![Badge](https://img.shields.io/badge/License-${license}-blueviolet.svg)`;
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if(license == "None") {
  return""
 } else {
  return '\n* [$(license)License](#license)\n';
 }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if(license == "None") {
  return ""
 } else {
  return 'This project is covered under the ${license} license.'
 };
}
// TODO: Create a function to generate markdown for README
// this makes it
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Contribute](#contribute)
* [Test](#test)
* [Contact](#contact)
* [Github](#github)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Credits
${data.credits}

## Contribute
${data.contribute}

## Test
${data.test}

## Contact
${data.contact} 

## Github
${data.github}
`;
}

module.exports = generateMarkdown;