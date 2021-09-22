var inquirer = require("inquirer");

console.log("==============================");

console.log("-------Welcome to product page-------");

console.log("==============================");

const questions = [
  {
    type: "confirm",
    name: "forDelivery",
    message: "Do you want to deliver products?",
    default: true,
  },
  {
    type: "input",
    name: "username",
    message: "Please Enter your username",
    validate(name) {
      const user = name.length > 2;
      if (user) {
        return true;
      } else {
        return "please provide correct username";
      }
    },
  },
  {
    type: "input",
    name: "address",
    message: "Please Proide full address",
    validate(address) {
      const add = address.length > 5;
      if (add) {
        return true;
      } else {
        return "please provide a full address";
      }
    },
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
    type: "list",
    name: "product",
    message: "please select your product",
    choices: ["dal", "panner", "cheese", "corn", "onion"],
  },
  {
    type: "input",
    name: "quantity",
    message: "please provide product quantity",
    validate(value) {
      var valid = !isNaN(parseInt(value));
      return valid || "please enter a number";
    },
    filter(value) {
      return parseInt(value);
    },
  },
];
inquirer.prompt(questions).then((answers) => {
  const qty = answers.quantity;
  const products = answers.product;

  if (products == "dal") {
    const totalPrice = qty * 25;
    console.log("totalPrice:", totalPrice);
  } else if (products == "panner") {
    const totalPrice = qty * 50;
    console.log("totalPrice:", totalPrice);
  } else if (products == "cheese") {
    const totalPrice = qty * 85;
    console.log("totalPrice:", totalPrice);
  } else if (products == "corn") {
    const totalPrice = qty * 15;
    console.log("totalPrice:", totalPrice);
  } else if (products == "onion") {
    const totalPrice = qty * 55;
    console.log("totalPrice:", totalPrice);
  }
  console.log("Thank you purchasing from our website" + " " + answers.username);
});
