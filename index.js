var readlineSync = require("readline-sync");
var score = 0;

// data of high score
var highscore = [
  {
    name: "sonam",
    score: 3,
  },
  {
    name: "muskan",
    score: 2,
  },

]
// array of objects
 var questions = [
   {
   question: "what is the captial of India?  ",
   answer:  "New delhi"
 } , {
   question: " what is national animal of india?  ",
   answer: "tiger"
 },
 {
   question: "what is national bird of India? ",
   answer:  "peacock"
 },
 {
   question: "what is the national flower of india? ",
   answer: "lotus"
 },
 {
   question: "how many states are there? ",
   answer: "28"
 },
 {
   question: "how many major languages are in India? ",
   answer: "22"
 },
 {
   question: "who is known as father of the nation? ",
   answer:"Mahatma Gandhi"
   
 }
 
 ]
 function welcome() {

var username = readlineSync.question("whats your name?");

console.log(" welcome "  +  username  +   " do you know about India?");
 }
 
// play function
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() == answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
     
  } else{
    console.log("wrong!");

  }
   console.log(" current score: ", score);
   console.log("----------");
   }
    
function game() {
  for (var i=0; i<questions.length; i++){
    var currentQuestions = questions[i];
    play (currentQuestions.question, currentQuestions.answer);
  }
}
function showScores() {
  console.log("YAY! you scored: ", score);
  console.log("check out the highscore, if you should be there doing me I'LL update it");

  highscore.map(score => console.log(score.name, " : ", score.score))
  }



 welcome();
 game();
 showScores();