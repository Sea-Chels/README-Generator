// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const infoREADME = () => {
    return inquirer.prompt([
      {
          type: 'input',
          message: 'What is the title of your project?',
          name: 'title',
      },
      {
          type: 'input',
          message: 'Describe your project',
          name: 'description',
      },
      {
          type: 'input',
          message: 'Are there any special packages that need installing for this project?',
          name: 'installation',
      },
      {
          type: 'input',
          message: 'Give basic instructions on how to use this project.',
          name: 'usage',
     },
     {
          type: 'input',
          message: 'Did anyone or anything specifically help you complete this project?',
          name: 'credits',
     },
      {
          type: 'checkbox',
          message: 'Add a license',
          name: 'license',
          choices: ['MIT', 'Generic', 'Public', 'None']
      }
    ]);
  };

  const generateREADME = (answers) => readmeDoc = `
  # ${answers.title}
  ## Description
  ${answers.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Credits
  ${answers.credits}
  ## License
  ${answers.license}
  ---
    `

  const init = () => {
   infoREADME()
    // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();