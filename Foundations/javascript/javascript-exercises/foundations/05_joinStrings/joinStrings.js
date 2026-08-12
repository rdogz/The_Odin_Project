/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!
let firstName = "Carlos"
let lastName = "Stevenson"
let thisYear = 1965
let birthYear = 1947
let greeting = `Hello! My name is ${firstName} ${lastName} and I am ${thisYear - birthYear} years old.`


let fullName = `${greeting.slice(18, 24)} ${greeting.slice(25, 34)}`
let age = Number(greeting.slice(44, 46))

greeting = `Hello! My name is ${fullName} and I am ${age} years old.`



// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
