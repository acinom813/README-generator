const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt ([                          //insert array of questions (objects)
{
    type:
    message:
    name:
},
{
    type:
    message:
    name:
},
{
    type:
    message:
    name:
},
{
    type:
    message:
    name:
},
{
    type:
    message:
    name:
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