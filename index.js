const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt ([                                                //insert array of questions (objects)
{
    type:'input',                                                //question type is user input
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
    name:'installation'
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
    type:'list'
    message:'Select a license for your application'
    name: []
},
{
    type:'input',
    message:'What is your GitHub username?',
    name:'username'                                          // this will be added to questions section with link to GitHub profile
},
{
    type:'input',
    message:'What is your email address?',                 // this will be added to questions sections with instructions on how to reach me
    name:'email'
},

]).then(response => {
    const content = `
# ${response.name}

##
    
###


####
    `;
})

fs.writeFile('README.md', content, 
    err => {
        if (err) console.log(err);
        else console.log('success!');
});