// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
//console.log(cohort.split(""))

// a) Your answer: I belive that .split will seperate each indivual leter with " "
// b) Verify and explain:while each letter was seperated, it was seperated by a single quotation.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: Since we are passing in the argument of "learn student" , it will say Hello, and our agurment
// b) Verify and explain:It did not, it does not have the command return.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
//console.log(multBy2)

// a) Your answer:Nothing.  It seems to me that the map function will will go through all the values and find the values that are equal to value*2
// b) Verify and explain: I was wrong since its a higher order function it can take a function, which is muiliple the value of each value to by 2.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: This is a higher order function, so it is checking the values that do not have a remander.
// b) Verify and explain: Correct it only returns the values that do NOT have a remander.


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
//console.log(learnStudent)

// a) Your answer:I don't know what it will do, but a totla guess is that it will return undifined.
// b) Verify and explain: I think this is part of the hinherates, the new is telling constructor to run all
