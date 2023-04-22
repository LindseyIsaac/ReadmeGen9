// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Make/generateMarkdown');

// TODO: Create an array of questions for user input
// things a README needs
const questions = [
    {
        type: 'input',
        name: 'project name',
        message: 'What is your projects name?',
      },      

      
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description.',
      },
  
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?',
      },
    {
        type: 'input',
        name: 'Usage',
        message: 'Include instructions and screenshots for examples of use.',
      },
      //List or checkbox? copied from github as suggested by classmate
      {
        type: 'list',
        name: 'License',
        message: 'Please select your License.',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
      },
    {
        type: 'input',
        name: 'Credits',
        message: 'List your collaborators and link their GitHub profiles, tutorials used, and all third-party assets.',    
      },

    {
        type: 'input',
        name: 'How to Contribute?',
        message: 'If you want other developers to be able to contribute please add your guidelines on how to here.'
     },
     //WHAT ARE YOU?????
     {
        type: 'input',
        name: 'Test',
        message: 'Provide tests to be included.',
      },
      //this is for the user to reach you with additional questions
      {
        type: 'input',
        name: 'Contact',
        message: 'Please input a valid Email and github name ',
      },
];

// TODO: Create a function to write README file
// generates the readme?
//NEEDS TO MAKE A PATH I THINK????
// data.answers for the readme 
function writeToFile(fileName, data) {
  fs.writeFile('README.md', generateMarkdown(data), function (err) {
      if (err) {
          return console.log(err);
      }
  });
}
  
      
// TODO: Create a function to initialize app
// this will start the creation of the readme I think

function init() {
  inquirer.prompt(questions).then((answers) => {
      writeToFile("../Make/README.md", generateMarkdown(answers));
      console.log('answers');
  });
}
// Function call to initialize app 
//DO I need to write any code here?
 init();
