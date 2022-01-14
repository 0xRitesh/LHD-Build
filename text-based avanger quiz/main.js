var readlineSync = require("readline-sync");

score = 0;

const chalk = require('chalk');


var q1={
  question:"Have you seen avengers endgame?\n 1.yes  2.no\n",
  answer:"1"
  }



var questions=[q2,q3,q4,q5];
function quiz(){
  for(var i=0;i<questions.length;i++)
  {
    var userAnswer=readlineSync.question(chalk.blackBright.bold(questions[i].question));
    if(userAnswer == questions[i].answer){
      console.log(chalk.cyan("right answer!"));
      score++;
    }
    else{
      console.log(chalk.red("wrong answer!"));
      console.log(chalk.red("The right answer is " + questions[i].answer));
    }
  }
  console.log(chalk.cyanBright("Congratulations! Your score is "+ score));

}
var user=readlineSync.question(chalk.blackBright.bold("What's your name?\n"));
console.log(chalk.cyan("Hi "+ chalk.italic(user) + "!\n"));
var que=readlineSync.question(chalk.blackBright.bold("Would you like to play a quiz?\n"));
if(que=="yes"|| que=="y")
{
  console.log(chalk.blackBright("Please enter options"));
  var ask=readlineSync.question(chalk.blackBright.bold("Do you know ysh?\n 1.yes 2.no \n"));
  if(ask=="1")
  {
    quiz();
  }
  else
  {
    console.log(chalk.yellow.bold("Bummer! You can't continue\n"));
  }
  
}