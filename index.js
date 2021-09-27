// User prompt - Asking name

var readlineSync = require("readline-sync");

var score = 0;

const chalk = require('chalk');

var userPrompt = readlineSync.question("What is your name ? ");

console.log(chalk.blue("Welcome to India quiz "+ userPrompt+"!!"+"Answer few questions to know your score"));

// array objects

var question =[
  {question:"What is our national animal ? ",answer:"tiger"},
  {question:"What is our national sport ",answer:"hockey"},{question:"what is our currency called ",answer:"rupee"},{question:"What is the capital of India? ",answer:"New Delhi"},{question:"Name of our biggest film industry ? ", answer:"bollywood"},
  ];



//quiz function

function quiz(question,answer) {
  var userAns = readlineSync.question(question)
    if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Your answer is correct"))
    score++
    } 
    else 
    {
    console.log(chalk.red("You answer is wrong"))
    }
  console.log(chalk.yellow("Your total score is ",score))
  console.log(chalk.blue("____________________________"))
}



for (i=0;i<question.length;i++){
  var currentQuestion = question[i]
  quiz(currentQuestion.question,currentQuestion.answer)
}

console.log("Thanks for playing "+userPrompt+" Your total score is "+score)
