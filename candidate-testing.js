const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "Name";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "Answer";

let line = "\n_________________________\n";
let questionBreak = '---';

//TODO: Variables for Part 2

let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];

let questionNum = ["1. ","2: ","3. ","4. ","5. "];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('\nWelcome to my quiz! \nPlease enter your name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 for (i = 0; i < questions.length; i++) 
    candidateAnswers.push(input.question('\n' + questionNum[i] + questions[i] + `: `));
};

function gradeQuiz(candidateAnswers) {
  console.log(`\n${line}\nYour answers\n${candidateAnswers}\n\nCorrect Answers\n${correctAnswers}\n${questionBreak}`);
  let grade;
  let numCorrect = 0;
  candidateAnswers = candidateAnswers.join().toUpperCase().split(',');
  correctAnswers = correctAnswers.join().toUpperCase().split(',');
  for (i = 0; i < questions.length; i++) {
    if (candidateAnswers[i] === correctAnswers[i]) {
    numCorrect++;
    };
  };
grade = ((numCorrect / questions.length) * 100);
console.log(`${numCorrect}/5 Final grade:${grade}%`);
  if (grade > 70) {
    console.log('Congradulations! You passed and are ready for take off!');
  } else 
    console.log(`Sorry, looks like you still need to check your engines, better luck next time.`);
  return grade;
};

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  if (candidateName === correctAnswer) {
    console.log("\n\n...Oh you're messing with my aren't you. Ok SALLY let's get to it." + line);
  } else if (candidateName.length > 0) {
     console.log('\n\nHello ' + candidateName + '!\nReady to get tested on some space trivia?' + line);
  } else console.log("\n\nRather remain anonymous yeah? Suit yourself. Ready for some space trivia?" + line);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
};

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
