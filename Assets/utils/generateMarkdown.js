// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 
//conditionals
function renderLicenseBadge(license) {

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

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
${data.email} 

## Github
${data.github}
`;
}

module.exports = generateMarkdown;