const input = require('readline-sync');
count=0;
// TODO 2: modify your quiz app to ask 5 questions //
let questions=["Who was the first American woman in space? ","True or false: 5000 meters == 5 kilometers? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers=["Sally Ride","true","40","Trajectory","3"];

// TODO 1.1a: Define candidateName // 
let candidateName='';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question='Who was the first American woman in space? ';
let correctAnswer='Sally Ride';
let candidateAnswer='';
      

let candidateAnswers=[];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName=input.question('Enter Your Name:');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  let i;
  for(i=0;i<questions.length;i++)
  {
    candidateAnswers[i]=input.question(`${questions[i]}`);
  }
  //console.log(question);
  //candidateAnswer=input.question("Please Enter your answer:");
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  let n;
  count=0;
  console.log(count);
  for(n=0;n<correctAnswers.length;n++)
  {
    if(candidateAnswers[n].toLowerCase()==correctAnswers[n].toLowerCase())
    {
      count=count+1;
    }
  
  }
  let grade;
  grade=count/5*100;

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome ${candidateName}`);
  askQuestion();
  let candidateGrade=gradeQuiz(this.candidateAnswers);
  let k;
  let status;
  if(candidateGrade>=80)
    status="PASSED";
  else
    status="FAILED";
  console.log(`Candidate Name: ${candidateName}`);
  for(k=0;k<5;k++)
  {
    console.log(`${k+1}) ${questions[k]}`);
    console.log(`Your Answer: ${candidateAnswers[k]}`);
    console.log(`Correct Answer: ${correctAnswers[k]}`);
    console.log('\n');
  }
  console.log(`>>>>>Overall Grade: ${candidateGrade}% (${count} of 5 responses correct) <<<`);
  console.log(`>>>Status: ${status} <<<`)
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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