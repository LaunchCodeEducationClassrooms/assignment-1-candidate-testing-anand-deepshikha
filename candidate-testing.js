const input = require('readline-sync');
count=0;
// TODO 2: modify your quiz app to ask 5 questions //


// TODO 1.1a: Define candidateName // 
let candidateName='';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space? ";
let correctAnswer="Sally Ride";
let candidateAnswer="";
let questions=["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers=["Sally Ride","true","40","Trajectory","3"];   

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
      console.log(`Question ${n+1}: Correct!`);
      count=count+1;
    }
    else
    {
      console.log(`Question ${n+1}: Incorrect! Correct Answer: ${correctAnswers[n]}`);
    }

  }
  let grade;
  grade=count/5*100;
  console.log(`Candidate Name: ${candidateName}`);
  for(n=0;n<questions.length;n++)
  {
    console.log(`${n+1}) ${questions[n]}`);
    console.log(`Your Answer: ${candidateAnswers[n]}`);
    console.log(`Correct Answer: ${correctAnswers[n]}`);
    console.log('\n');
  }
  console.log(`>>>>>Overall Grade: ${grade}% (${count} of 5 responses correct) <<<`);
  if(grade>=80)
  {
    console.log(`>>>Status: PASSED <<<`)
  }
  else
    console.log(`>>>Status: FAILED <<<`)
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
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