const { error } = require('console');
const generateMarkdown = require ('./utils/generateMarkdown')
const fs = require('fs')
const inquirer = require('inquirer')

const questions  = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions for your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information for your project',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines for your project',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions for your project',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    },
    {
      type: 'input',
      name: 'username',
      message: 'Provide your GitHub username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Provide your email address',
    },
  ];

  function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, (err) => 
    err ? console.error(err) : console.log ('the readme file has been created succesfully!!!' )
    );
  }
  
  function init() {
     inquirer.prompt(questions).then((answers) => {
      const markdown = generateMarkDown (answers);
      writeToFile('README.md', markdown);
     });
  
   }
  

  init();