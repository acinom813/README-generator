const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt ([                                                
{
    type:'input',                                                
    message:'What is the title of your project?',                
    name: 'title'
},
{
    type: 'input',
    message: 'Give a description of your project.',
    name:'description'
},
{
    type: 'input',
    message: 'What are the installation instructions?',
    name:'installation',
    default: ('npm i')
},
{
    type: 'input',
    message: 'What usage inforamtion would helpful?',
    name:'usage'
},
{
    type: 'input',
    message: 'What are the contribution guidelines?',
    name:'contributing'
},
{
    type: 'input',
    message: 'What are the test instructions?',
    name:'tests'
},
{
    type:'list',
    message:'Select a license for your application',
    choices:['Apache-2.0', 'MIT', 'ISC', 'AAL'] ,
    name:'license'
},
{
    type:'input',
    message:'What is your GitHub username?',
    name:'username'                                          
},
{
    type:'input',
    message:'What is your email address?',                 
    name:'email'
},

]).then((response) => {
    const content = `
# ${response.title}

#### ${response.description}
    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:

\`\`\`
# ${response.installation}
\`\`\`
## Usage
Prior to using this repo, signup for an API key with:
#### ${response.usage}

## Contributing
#### ${response.contributing}

## Tests
#### ${response.tests}

## License
The following license is required to run this app:
#### ${response.license} 

## Questions

#### ${response.username}

If you have questions regarding the use or functionality of this app, please direct all correspondence to:
#### ${response.email}

    `;


fs.writeFile('README.md', content, 
    err => {
        if (err) console.log(err);
        else console.log('success!');
    })
});