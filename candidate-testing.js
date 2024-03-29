const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "Name";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "Answer";
let line = "\n_________________________\n";

//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('\nHello! Welcome to my quiz! \nPlease enter your name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
console.log('Question 1.\n\n' + question);
candidateAnswer = input.question("Answer: ");

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if (candidateAnswer === correctAnswer) {
  console.log("\nThat's Right! Sally Ride launched on June 18, 1983 aboard the Space Shuttle Challanger");
} else if (candidateAnswer !== correctAnswer && candidateName === correctAnswer) {
  console.log('\nWow "Sally" you really forgot you were the first in space?');
} else {
  console.log("\nSorry, that's not quite right but good try");
}

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
if (candidateName === correctAnswer) {
  console.log("\n\n\n...Oh you're messing with my aren't you. Ok SALLY let's get to it." + line);
} else if (candidateName.length > 0) {
   console.log('\n\n\nHello ' + candidateName + '!\nReady to get tested on some space trivia?' + line);
} else console.log("\n\n\nRather remain anonymous yeah? Suit yourself. Ready for some space trivia?" + line);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
