// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // takes input from inquirer prompt, and in case answer matches, will return link held in ''
  switch (license) {
    case 'MIT':
      return 'https://img.shields.io/badge/license-MIT-red';

    case 'GPL':
      return 'https://img.shields.io/badge/license-GPL-green'

      case 'Apache':
        return 'https://img.shields.io/badge/license-Apache-yellow';
  
      case 'BSD 3-clause':
        return 'https://img.shields.io/badge/license-BSD_3--clause-blue';
  
      case 'AGPLv3':
        return 'https://img.shields.io/badge/license-AGPLv3-orange';
  
      case 'None/No License':
        return ''

      default:
        return '';
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';

    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html'

      case 'Apache':
        return 'https://www.apache.org/licenses/LICENSE-2.0';
  
      case 'BSD 3-clause':
        return 'https://opensource.org/licenses/BSD-3-Clause';
  
      case 'AGPLv3':
        return 'https://www.gnu.org/licenses/agpl-3.0.html';

      case 'None/No License':
        return ''
  
      default:
        return '';
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return ` # License
              This project's license is under the ${license} license`;

    case 'GPL':
      return ` # License
              This project's license is under the ${license} license`;

    case 'Apache':
      return ` # License
                This project's license is under the ${license} license`;
  
    case 'BSD 3-clause':
      return ` # License
                This project's license is under the ${license} license`;
  
    case 'AGPLv3':
      return ` # License
                This project's license is under the ${license} license`;

    case 'None/No License':
      return ``
  
    default:
      return '';
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## DESCRIPTION
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage] (#use)
  ${renderLicenseLink(data.license)}
  * [Contributing Parties] (#contributing)
  * [Tests] (#tests)
  * [Questions] (#questions)
   
  ## Installation
    ${data.installation}

  ## Usage
    ${data.use}

  ${renderLicenseSection(data.license)}

  ## Contributing
    ${data.contributing}

  ## Tests
    ${data.tests}

  ## Questions
  
    If you have any questions regarding the repo, please contact me at my ${data.email},
    If you would like to see more of my work,
    please visit my github repositories at ${data.username}

`;
}

module.exports = generateMarkdown;
