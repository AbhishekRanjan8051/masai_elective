var inquirer = require("inquirer");

console.log("================================");

console.log("==Welcome to our login page==");

console.log("================================");

inquirer
  .prompt([
    /* Pass your questions in here */

    {
      type: "input",
      message: "Enter your Username",

      name: "username",
    },
    {
      type: "password",
      message: "Enter your password",
      mask: "*",

      name: "password",
    },
    {
      type: "password",
      message: "Confirm your password",
      mask: "#",
      name: "confirmPassword",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
