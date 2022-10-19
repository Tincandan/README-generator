// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



const generateMarkdown = require('./utils/generateMarkdown');


// An array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of title Project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process if any: ',
        },
        {
            type: 'input',
            name: 'use',
            message: 'What does this project do?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the appropriate license for this project: ',
            choices: [
                'MIT',
                'GPL',
                'Apache',
                'GSD 3-clause',
                'AGPLv3',
                'None/No License'
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who are the contributing parties of this project(s)?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Is there a test included?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What do I do if I have an issue?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your Github username: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter you email: '
        }
    ])

// A function that grabs answers from the array of questions,
// and puts that info into generateMarkdown through const data.
    .then((response) => {
        const data = generateMarkdown(response);

        // Grabs the user input for the title of the project,
        // and appends -README.md to the title for the purpose of
        // giving the README a unique name based on the project title.
        const fileName = response.title
        const README_FILENAME = `${fileName}-README.md`

        // the actual creation of the file, and filling it
        // with the finished template. This also has console
        // error and log to show issue on failure, and succes
        // on success.
        fs.writeFile(README_FILENAME, data, (err) =>
        err ? console.error(err) : console.log('Success!')


        );
    });
