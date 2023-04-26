// TODO: Include packages needed for this application
//Does the order here matter?
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// things a README needs
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects name?',
      },      

      
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description.',
      },
  
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
    {
        type: 'input',
        name: 'usage',
        message: 'Include instructions and screenshots for examples of use.',
      },
      //List or checkbox? choices from github recommended to use by classmate 
      {
        type: 'list',
        name: 'license',
        message: 'Please select your License.',
        choices: ['None', 'Apache-License-2.0', 'GNUGeneral-Public-License-v3.0', 'MIT', 'BSD_2-Clause_Simplified_License', 'BSD_3-Clause_New_or_Revised_License', 'Boost-Software-License-1.0', 'Creative-Commons-Zero-v1.0-Universal', 'Eclipse-Public-License-2.0', 'GNU-Affero-General-Public-License-v3.0', 'GNU-General-Public-License-v2.0', 'GNU-Lesser-General-Public-License-v2.1', 'Mozilla-Public-License-2.0', 'The-Unlicense'],
      },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators and link their GitHub profiles, tutorials used, and all third-party assets.',    
      },

    {
        type: 'input',
        name: 'contribute',
        message: 'If you want other developers to be able to contribute please add your guidelines on how to here.'
     },
     //WHAT ARE YOU?????
     {
        type: 'input',
        name: 'test',
        message: 'Provide tests to be included.',
      },
      //this is for the user to reach you with additional questions
      {
        type: 'input',
        name: 'contact',
        message: 'Please input a valid Email',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please input a valid github link',
      },
];


//found that this code is not needed to work kept for learning purposes.
// TODO: Create a function to write README file
// generates the readme?
//NEEDS TO MAKE A PATH I THINK????
// function writeToFile(fileName, data) {
//   return fs.writeFile(fileName, data); {
//   }
// }  
// TODO: Create a function to initialize app
// this will start the creation of the readme I think

function init() {
  inquirer.prompt(questions).then((data) => {
      fs.writeFile("./output/README.md", generateMarkdown(data), () => {
      console.log("Yay! Your README has been created!")
      })
    }
  )}
// Function call to initialize app 
//DO I need to write any code here?
 init();
