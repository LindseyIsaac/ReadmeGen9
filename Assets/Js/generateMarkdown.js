// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 
//conditionals
function renderLicenseBadge(license) {
  if (license !== "none");
  else if (boot = bot);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// this makes it
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [How to Contribute](#howtocontribute)
* [Test](#test)

* [Contact](#contact)

`;
}

module.exports = generateMarkdown;



// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license !== "none") {
//     return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
//   }
//   return "";
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license !== "none") {
//     return `\n* [License](#license)\n`;
//   return ""}
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license !== "none") {
//     return `
//     ## License
//       Using the ${license} license.
//       `;
//   }
//   return "";
// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
// ${renderLicenseBadge(data.license)}
// ## Table of Contents
// * [Description](#description)
// * [Installation](#installation)
// * [Usage](#usage)
// * [Contact-Me](#contact-me)
// * [Credits](#credits)
// * [Features](#features)
// * [Contributors](#contributors)
// * [test](#test)
// ${renderLicenseLink(data.license)}
// ## Description
// ${data.description}
// ## Installation
// ${data.installation}
// ## Usage
// ${data.usage}
// ## Contact-me
// * Name - ${data.name}
// * Email - ${data.email}
// * GitHub - [${data.creator}](https://github.com/${data.creator}/)
// ## Credits
// ${data.credits}
// ## Features
// ${data.features}
// ## Contributors
// ${data.contributors}
// ## Test
// ${data.test}
// ${renderLicenseSection(data.license)}
// `;
// }

// module.exports = generateMarkdown;
