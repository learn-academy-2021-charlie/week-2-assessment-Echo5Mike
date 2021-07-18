// ASSESSMENT 2: Coding practical questions with Jest

// const { expect } = require("@jest/globals")
// const { at } = require("lodash")

// const { equal } = require("assert")
// const { words } = require("lodash")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
//step 1 create shell of test
//step 2 wirte in the conditon of the test
//step 3 creat the function 
//step 4 run the test

// describe ("divisable function",()=>{
//     it("takes a number and divides it by 3 and returns answer", ()=>{
//         expect(divisable(num1)).toEqual("15 is divisible by three")
//     })// I strugled seting up the test.  I need to be able to better read why the test failed
// })
// const divisable = (num)=>{
//     if ((num % 3) === 0){
//         return `${num} is divisible by three`
//     }else{
//         return `${num} is NOT divisible by three`
//     }
// }

// a) Create a test with expect statements for each of the variables provided.

// var num1 = 15
// console.log(divisable(num1))
// Expected output: "15 is divisible by three"

// describe ("divisable function",()=>{
//     it("takes a number and divides it by 3 and returns answer", ()=>{
//         expect(divisable(num2)).toEqual("0 is divisible by three")
//     })
// })
// const divisable = (num)=>{
//     if ((num % 3) === 0){
//         return `${num} is divisible by three`
//     }else{
//         return `${num} is NOT divisible by three`
//     }
// }
// var num2 = 0
// console.log(divisable(num2))
// Expected output: "0 is divisible by three"


// describe ("divisable function",()=>{
//     it("takes a number and divides it by 3 and returns answer", ()=>{
//         expect(divisable(num3)).toEqual("-7 is not divisible by three")
//     })
// })
// const divisable = (num)=>{
//     if ((num % 3) === 0){
//         return `${num} is divisible by three`
//     }else{
//         return `${num} is not divisible by three`
//     }
// }
// var num3 = -7
// console.log(divisable(num3))
// Expected output: "-7 is not divisible by three"



// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//step 1 creat a shell of a test.
//sterp 2 give the test insturction that it will
    // take in array of words
    //.split the array into a string
    //.join the sting into an array
    //return array with all words capitlized
// write the function that will
    //1. take in an array of words
    //2 capitaliz all the workds
    // return 

// a) Create a test with expect statements for each of the variables provided.
describe ("takes in an array", ()=>{
    it("changes and capitlizes first letter of words and returns the [array] with the first letter capilized", ()=> {
        expect (capIt(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect (capIt(["temperature", "database", "chopsticks", "mango", "deduction"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})
const capIt = (array) => {
  let newArray = array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
  })
  return newArray
}
var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
console.log(capIt(randomNouns1))
console.log(capIt(randomNouns2))





// console.log(capIt(randomNouns2))
// console.log(capIt(randomNouns2))
// const capIt = (array) =>{
//     let newArray =[]
//     for (let index = 0; index < array.length; index++) {
//         return array.map
        
//     }
//     return newArray
// }
// may charAt    split


// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// console.log(capIt(randomNouns1))

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

//var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.








// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.
// okay, start with a shell of a test 
// and run the test to get a fail,
// ......do it......


// describe("a function that takes in var",()=>{
//   let vowelTester1 = "learn"
//   let result = 1
//   it("takes in a string and returns first vowel", ()=>{
//     expect(vowelTester1).toEqual(result)
//   })
// })
// const firstVowel = (string)=>{
//   let newString = string.split().map(value =>{}
//     if newString.map([]) == "a" || value == "e" || "i" || value =="o" || value == "u")
//     return newString.map(vaule)// =>{
      

// }

// var vowelTester1 = "learn"
// console.log(firstVowel(vowelTester1))
// console.log(newString)
// // Expected output: 1
// var vowelTester2 = "academy"
// // Expected output: 0
// var vowelTester3 = "challenge"
// // Expected output: 2



// // b) Create the function that makes the test pass
