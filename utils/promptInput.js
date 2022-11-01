const inquirer = require('inquirer'); // import the inquirer.js library

// accepts the prompt text to display on the command line, and a flag to make input required 
const promptInput = function (message, required = false) {
    return inquirer.prompt([{
        name: "val",
        type: "input",
        message: message,
        // Inquirer will prompt user again if a string is returned, otherwise it should return true
        validate: input => (input.length > 0 || !required) ||  'This field is required. Please try again...' 
    }])
    .then(answer => answer.val);  // user input data
}


module.exports = promptInput;  