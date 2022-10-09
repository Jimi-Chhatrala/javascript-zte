"use strict";

// ************************************************

// use strict mode

// ************************************************
/*
"use strict";

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive :)");

// const interface = "Audio";
// const private = 123;

*/

// ************************************************

// Functions

// ************************************************
/*
function logger() {
  console.log("My name is Jimi.");
}

// calling, running, invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// console.log(fruitProcessor(3, 2));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("123");
console.log(num);
*/

// ****************************************************

// Function declaration

// and

// Function expressions

// ****************************************************
/*
// Function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(1999);

console.log(age1);

// and

// Function expressions

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age2);
*/
// ********************************************************

// Arrow function

// ********************************************************
/*
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

// const yearsUntilRetirement = (birthYear) => {
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `Mr.${firstName} retires in ${retirement} years`;
};

// console.log(yearsUntilRetirement(1991));
console.log(yearsUntilRetirement(2000, "Jimi"));
*/

// *******************************************************

// Functions Calling Other Functions

// *******************************************************
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;

  return juice;
}

console.log(fruitProcessor(3, 4));
*/

// ******************************************************

// Return Keyword Exits From Function

// ******************************************************
/*
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
    console.log(`'return' KEYWORD EXITS WORKING OF FUNCTION`);
  } else {
    console.log(`${firstName} has already retired..!`);
    return -1;
    console.log(`'return' KEYWORD EXITS WORKING OF FUNCTION`);
  }
};

console.log(yearsUntilRetirement(2000, "Jimi"));
console.log(yearsUntilRetirement(1955, "Ramkumar"));
*/

// ******************************************

// Problem Statement

// ******************************************
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreOfTeamA = calcAverage(44, 23, 71);
let scoreOfTeamB = calcAverage(65, 54, 49);
console.log(scoreOfTeamA, scoreOfTeamB);

const checkWinner = function (avgTeamA, avgTeamB) {
  if (avgTeamA >= 2 * avgTeamB) {
    console.log(`Team A wins 🏆 (${avgTeamA} vs. ${avgTeamB})`);
  } else if (avgTeamB >= 2 * avgTeamA) {
    console.log(`Team B wins 🏆 (${avgTeamB} vs. ${avgTeamA})`);
  } else {
    console.log(`No Teams wins`);
  }
};

checkWinner(scoreOfTeamA, scoreOfTeamB);

scoreOfTeamA = calcAverage(85, 54, 41);
scoreOfTeamB = calcAverage(23, 34, 27);
console.log(scoreOfTeamA, scoreOfTeamB);
checkWinner(scoreOfTeamA, scoreOfTeamB);
*/

// ****************************************************

// Arrays

// ****************************************************

const friend1 = "Ram";
const friend2 = "Laksman";
const friend3 = "Bharat";

const friends = ["Ram", "Laksman", "Bharat"];
console.log(friends);

const years = new Array(1900, 1999, 2016, 2022);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Satrugna";
console.log(friends);

// friends = ["Jimi", "Boss"]; // Cannot redefine the array

const firstName = "Jimi";
const jimi = [firstName, "Chhatrala", 2022 - 2000, "Coder", friends];
console.log(jimi);
console.log(jimi.length);

// Exercise

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearOfBirth = [1900, 1950, 1999, 2002, 2018];

const age1 = calcAge(yearOfBirth[0]);
const age2 = calcAge(yearOfBirth[1]);
const age3 = calcAge(yearOfBirth[yearOfBirth.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(yearOfBirth[0]),
  calcAge(yearOfBirth[1]),
  calcAge(yearOfBirth[yearOfBirth.length - 1]),
];

console.log(ages);
