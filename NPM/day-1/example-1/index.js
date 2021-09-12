// let QRCode = require("qrcode");

// // QRCode.toDataURL("I am a pony!", function (err, url) {
// //   console.log(url);
// // });

// QRCode.toString("I am a pony!", { type: "terminal" }, function (err, url) {
//   console.log(url);
// });

/*
let { Command } = require("commander");
let program = new Command();
program.version("0.0.1");

program
  .option("-d, --debug", "output extra debugging")
  .option("-s, --small", "small pizza size")
  .option("-p, --pizza-type <type>", "flavour of pizza");

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log("pizza details:");
if (options.small) console.log("- small pizza size");
if (options.pizzaType) console.log(`- ${options.pizzaType}`);
*/

// Another Way

/*
let { Command } = require("commander");
let program = new Command();
program.version("0.0.1");

program
  .argument("<username>", "user login detail")
  .argument("[password]", "password for user , if needed", "default")
  .action((username, password) => {
    console.log("username:", username);
    console.log("password:", password);
  });

program.parse(process.argv);

*/

//Another way

let { Command } = require("commander");
let program = new Command();
program.version("0.0.1");

program
  .argument("<name>", "name to print")
  .argument("[number]", "number of times to print", 1)

  .action((name, number) => {
    for (let i = 0; i < number; i++) {
      console.log("name:", name);
    }
  });
program.parse(process.argv);
