//module variables
var inquirer = require('inquirer');
var ClozeCard = require('./ClozeCard');
var BasicCard = require('./BasicCard');
var fs = require('fs');

//function to write created flash card to log.txt
function appendCard (cardEntry) {
fs.appendFile('log.txt', cardEntry, function (error) {
if (error) {
  console.log(error);
  }
});
};

//initial prompt asking the user what kind of flash card the user would like to create
inquirer.prompt([
{
      type: "checkbox",
      name: "flashCardType",
      message: "Please choose the type of flash card that you would like to create",
      choices: ["Basic", "ClozeCard"]
    },

]).then(function (answers) {
//variable which equals the card type the user selects
  var answer =answers.flashCardType[0];
  console.log(answer);

//Switch statement defining type of card to be created 
  switch (answer) {
    case "Basic":
      newBasicCard();
      break;
    case "ClozeCard":
      newClozeCard();
      break;
  }
});

//inquirer prompt to create basic card
function newBasicCard(){
  inquirer.prompt([
  {
        type: "input",
        name: "basicQuestion",
        message: "Type the question that you would like an answer to.",
      },
      {
        type: "input",
        name: "basicAnswer",
        message: "What is the answer to your question?",
      },


  ]).then(function (basicResponse) {
  var basicQuestion = process.argv[2];
  var basicAnswer = process.argv[3];
  var myBasicCard = new BasicCard (basicResponse.basicQuestion,basicResponse.basicAnswer);
  myBasicCard.printInfo();
  appendCard("Front: " + myBasicCard.front + "\r\n\r\n");
  appendCard("Back: " + myBasicCard.back + "\r\n\r\n");
  })
};

//Based on the answer from the prompt it will create a new cloze card
function newClozeCard(){
  inquirer.prompt([
  {
        type: "input",
        name: "text",
        message: "What question or statemente would you like to ask?",
      },
      {
        type: "input",
        name: "cloze",
        message: "Please, type the answer to your question",
      },


  //create cloze card based on response
  ]).then(function (clozeResponse) {
  var text = process.argv[2];
  var cloze = process.argv[3];
  var myClozeCard = new ClozeCard (clozeResponse.text,clozeResponse.cloze);
  myClozeCard.printInfo();
  appendCard("Front: " + myClozeCard.cloze + "\r\n\r\n");
  appendCard("Back: " + myClozeCard.partial + "\r\n\r\n");
  })
};