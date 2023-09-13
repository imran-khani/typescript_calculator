
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleepTime = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

const welcome = async () => {
  let rainbowTitle = chalkAnimation.rainbow("Lets start the calculations...");
  await sleepTime();
  rainbowTitle.stop();
  console.log(`
_____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`);
};

await welcome();

const start = async () => {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "operator",
        message: "Please choose operator",
        choices: ["+", "-", "/", "*"],
      },

      {
        type: "number",
        name: "firstNum",
        message: "Enter first number",
      },
      {
        type: "number",
        name: "secondNum",
        message: "Enter second number",
      },
    ])
    .then((answers) => {
      switch (answers.operator) {
        case "+":
          console.log(
            chalk.green(
              `The answer is: ${answers.firstNum + answers.secondNum}`
            )
          );
          break;
        case "-":
          console.log(
            chalk.green(
              `The answer is: ${answers.firstNum - answers.secondNum}`
            )
          );
          break;
        case "*":
          console.log(
            chalk.green(
              `The answer is: ${answers.firstNum * answers.secondNum}`
            )
          );
          break;
        case "/":
          console.log(
            chalk.green(
              `The answer is: ${answers.firstNum / answers.secondNum}`
            )
          );
          break;
        default:
          console.log("Please choose a valid operator");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

await start();

const startAgain = async () => {
  await inquirer
    .prompt([
      {
        type: "confirm",
        name: "startAgain",
        message: "Do you want to start again?",
      },
    ])
    .then((answer) => {
      answer.startAgain === true ? start() : console.log(chalk.red("GoodBye!"));
    })
    .catch((error) => {
      console.log(error);
    });
};

await startAgain();
