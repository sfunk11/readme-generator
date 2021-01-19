// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ![License](https://img.shields.io/badge/license-${data.license}-success)
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ![Screenshot](${data.picturefile})
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contribute}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please send them to me through GitHub or email.

  [Github Username](${data.github})
  
  [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
