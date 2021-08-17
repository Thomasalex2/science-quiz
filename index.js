var readlineSync = require("readline-sync")
const chalk = require('chalk')
var total_points = 0
var stage_points = 0

var levelOne = [ 
  QuestionOne = { 
    question: "Which gas constitues most of Earth’s atmosphere? ",
    answer: "Nitrogen"},
  QuestionTwo = {
    question: "What is the nearest planet to the sun? ",
    answer: "Mercury"},
  QuestionThree = {
    question: "What is the chemical formula of water? ",
    answer: "H2O"},
  QuestionFour = {
    question: "Who discovered Gravity? ",
    answer: "Issac Newton"},
  QuestionFive = {
    question: "How many bones does human body have? ",
    answer: "206"},
  ]

var levelTwo = [ 
  QuestionOne = { 
    question: "What elment is the basis of all life on Earth? ",
    answer: "Carbon"},
  QuestionTwo = {
    question: "How long does it take Sun's rays to reach the Earth? (in seconds/minutes/hours/days/years)",
    answer: "8 minutes"},
  QuestionThree = {
    question: "True or False: Sound travels faster in water than air ",
    answer: "True"},
  QuestionFour = {
    question: "Which is the most abundant element in the universe? ",
    answer: "Hydrogen"},
  QuestionFive = {
    question: "Which system in our human bodies transport oxygen and nutrients to all cells? ",
    answer: "Circulatory System"},
  ]


var levelThree = [ 
  QuestionOne = { 
    question: "What is the actual colour of the Sun? ",
    answer: "White"},
  QuestionTwo = {
    question: "How old is the earth in years? ",
    answer: "4.5 billion yearss"},
  QuestionThree = {
    question: "What element is integral to the functioning of all electronic devices? ",
    answer: "Silicon"},
  QuestionFour = {
    question: "True or False: As you travel faster, time slows down ",
    answer: "True"},
  QuestionFive = {
    question: "What is the name of the largest artery in the human body? ",
    answer: "Aorta"},
  ]


var levelFour = [ 
  QuestionOne = { 
    question: "What particles are atoms made of? ",
    answer: "quarks"},
  QuestionTwo = {
    question: "What are the densest objects in the universe before black holes? ",
    answer: "Neutron Stars"},
  QuestionThree = {
    question: "What force helps geckos and other lizards climb walls? ",
    answer: "Van der Waals force"},
  QuestionFour = {
    question: "True or False: The magentic poles of earth shifts over time ",
    answer: "True"},
  QuestionFive = {
    question: "What elemntary particle is described as 'massless' apart from photon? ",
    answer: "Gluon"},
  ]


function playQuiz (question, answer) {
  var userAnswer = readlineSync.question(chalk.red(question))

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log ("Correct Answer! :)\n")
    stage_points = stage_points + 2
  } else {
    console.log("Wrong Answer :(")
    console.log("The correct answer is: " + chalk.black.bgGreen(answer) + "\n")
    stage_points = stage_points - 1
  }
}

var userName = readlineSync.question(chalk.yellow("What is your name? "))
console.log(chalk.green("\nWelcome " + userName))
console.log(chalk.green("This is a four stage science quiz"))
console.log(chalk.green("Each correct answer will fetch you 2 points. Each wrong answer will deduct 1 point"))
console.log(chalk.green("The quiz gets harder as you advance stages"))
console.log(chalk.green("All the best!\n\n"))

var levels = [levelOne, levelTwo, levelThree, levelFour]

for (var i = 0; i < 4; i++) {
  if (i === 0) {console.log(chalk.magenta("\nStage: Easier Than Easy\n"))}
  else if (i === 1) {console.log(chalk.magenta("\nStage: High School level\n"))}
  else if (i === 2) {console.log(chalk.magenta("\nStage: Impressive!\n"))}
  else if (i === 3) {console.log(chalk.magenta("\nStage: You damn Science wizard!\n"))}
  var stage_points = 0
  var noOfQuestions = levels[i].length
  for (var j = 0; j < noOfQuestions; j++) {
    playQuiz(levels[i][j].question, levels[i][j].answer)
  }
  
  if (stage_points < 4) {
    console.log("You do not posses enough points to proceed to the next stage. Better luck next time!")
    break
  } else {
    total_points = total_points + stage_points
    console.log(chalk.green("Your previous stage Score: ", stage_points))
    console.log(chalk.green("Your Total Score: ", total_points))
    stage_points = 0
    if (i === 3) {
    console.log(chalk.green("\nCongratualtions, you have cleared all stages of the quiz!"))
    } else {
    console.log(chalk.green("\nCongratualtions, you have proceeded to the next stage!"))
    }
  }
}
console.log (chalk.cyan("Your final score is: ", total_points))
if (total_points === 40) {
  console.log ("Wow! You pass the quiz with flying colours. Give yourself a pat on the back")
}