const inquirer = require('inquirer'); // import the inquirer.js library

// accepts the prompt text and an array of question objects, which will display as a list of choices. 
const  promptList = function (message, choices) {
    return inquirer.prompt([{
        name: "val",
        type: "list",
        message: message,  
        choices: choices,  
        pageSize: 10,
    }])
    .then(answer => answer.val); // user choice
}

module.exports = promptList; 