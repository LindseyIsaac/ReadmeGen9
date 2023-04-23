// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 
//conditionals
function renderLicenseBadge(license) {
  if (license !== 'none');{
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blueviolet.svg)`;
}
return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  return ""}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "none") {
  return `
  ## License
    Using the ${license} license.
    `;
}
return "";
}
// TODO: Create a function to generate markdown for README
// this makes it
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
##Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Contribute](#contribute)
* [Test](#test)
* [Questions](#questions)

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

## Questions

*Contact Email: ${data.email} 
*Link to Github: ${data.github}
`;
}

module.exports = generateMarkdown;