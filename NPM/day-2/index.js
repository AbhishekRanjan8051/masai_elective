var inquirer = require("inquirer");

console.log("******************************");

console.log("Welcome to my login page of Home Page ");

console.log("******************************");

inquirer
  .prompt([
    /* Pass your questions in here */

    {
      type: "input",
      message: "Enter your User name",

      name: "username",
    },
    {
      type: "password",
      message: "Enter your password",

      name: "password",
    },
    {
      type: "password",
      message: "Confirm your password",
      mask: "*",

      name: "password2",
    },
  ])
  .then((userDetails) => {
    // Use user feedback for... whatever!!
    console.log("welcome back",userDetails.username);

    inquirer
      .prompt([
        {
          type: "confirm",
          name: "forDelivery",
          message: "do you want to pizza to be delivered?",
          default: true,
        },
        {
          type: "input",
          name: "phone",
          message: "what is your phone number?",
          validate(value) {
            const pass = value.length == 10;
            if (pass) {
              return true;
            } else {
              return "please enter valid phone number";
            }
          },
        },
        {
          type: "input",
          name: "qty",
          message: "how much do you need pizza?",
          validate(value) {
            const valid = !isNaN(parseInt(value));
            return valid || "please enter a number";
          },
          filter(value) {
            return parseInt(value);
          },
        },
        {
          type: "list",
          name: "toppings",
          message: "please select your pizza toppings",
          choices: ["chicken", "panner", "cheese and corn"],
        },
        {
          type: "list",
          name: "size",
          message: "please select your pizza size",
          choices: ["L", "M", "S"],
        },
      ])

      .then((answers) => {

        console.log("Order Details are:-")
        console.log(answers);
        console.log("username",userDetails.username)
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
