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
/*
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
*/

// *************************************************

// Array Methods

// *************************************************
/*
const friends = ["Ram", "Laksman", "Bharat"];
console.log(friends);

// Adding an element at back

const newLength = friends.push("Satrugna");
console.log(friends);
console.log(newLength);

// Adding an element at front

friends.unshift("Sita");
console.log(friends);

// Removing an element from back
friends.pop(); //last element
const popped = friends.pop(); //Now second last
console.log(popped);
console.log(friends);

// Removing an element from front

friends.shift(); // First Element
console.log(friends);

console.log(friends.indexOf("Ram"));
console.log(friends.indexOf("Laksman"));
console.log(friends.indexOf("Bharat"));
console.log(friends.indexOf("XYZ"));

friends.push("Jimi");
friends.push(24);

console.log(friends.includes("Jimi"));
console.log(friends.includes("Chhatrala"));
console.log(friends.includes("JIMI")); // Strict Check, so returns false
console.log(friends.includes("24"));
console.log(friends.includes(24)); // For number also

if (friends.includes("Jimi")) {
  console.log("Hey, Jimi is there in array.");
}
*/

// *******************************************************

// Problem Statement

// *******************************************************
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTipNewVersion =  (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill - 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

// *******************************************************

// Objects

// *******************************************************
/*
// Used for ordered and structured data

const jimiArray = [
  "Jimi",
  "Chhatrala",
  2022 - 2000,
  "coder",
  ["Ram", "Shyam", "Lakshman"],
];

console.log(jimiArray);

// Used for un-ordered and unstructured data

const jimiObject = {
  firstName: "Jimi",
  lastName: "Chhatrala",
  age: 2022 - 2000,
  job: "coder",
  friends: ["Ram", "Shyam", "Lakshman"],
};

console.log(jimiObject);
*/

//*******************************************************

// Objects with dot (.) and ([]) notations

// *******************************************************
/*
const jimiObject = {
  firstName: "Jimi",
  lastName: "Chhatrala",
  age: 2022 - 2000,
  job: "coder",
  friends: ["Ram", "Shyam", "Lakshman"],
};

// On console object properties are in alphabetic ordered

console.log(jimiObject);

console.log(jimiObject.lastName);
console.log(jimiObject["lastName"]);

const nameCommonKey = "Name";

console.log(jimiObject["first" + nameCommonKey]);
console.log(jimiObject["last" + nameCommonKey]);

// console.log(jimiObject.'last'+nameCommonKey);

// const interestedIn = prompt(
//   "What do you want to know about Jimi? Choose from firstName, lastName, age, job, and friends"
// );

// if (jimiObject[interestedIn]) {
//   console.log(jimiObject[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose from firstName, lastName, age, job, and friends"
//   );
// }

jimiObject.location = "India";
jimiObject.twitter = "@jimichhatrala";
console.log(jimiObject);

// Challenge

// "Jimi has 3 friends, and his best friend is called Ram"

console.log(
  `${jimiObject.firstName} has ${jimiObject.friends.length} friends, and his best friend is called ${jimiObject.friends[0]}.`
);
*/
//*******************************************************

// Object Methods

// *******************************************************
/*
const jimi = {
  firstName: "Jimi",
  lastName: "Chhatrala",
  birthYear: 2000,
  job: "coder",
  friends: ["Ram", "Lakhan", "Shivam"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    // console.log(this);

    // Store value to new property so as not to calcualte again and again while calling calcAge() method

    this.age = 2022 - this.birthYear;
    return this.age;
  },

  // Jimi is a 22-years old Coder, and he has a/not driver's license.

  getSummary: function () {
    // Here in age(22-year old) we use calcAge() method because we cannot assume that if calcAge() method has already called before and a new property age is defined as a member of the object in past future.

    return `${this.firstName} is a ${this.age}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jimi.calcAge(2000));
console.log(jimi.calcAge());
console.log(jimi.age);
console.log(jimi.age);
console.log(jimi.age);
console.log(jimi["calcAge"](2000));
console.log(jimi.getSummary());
*/
// **********************************************************

// Problem Statement

// **********************************************************

// MY TRY

// const salmanKhan = {
//   fullName: "Salman Khan",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// const amirKhan = {
//   fullName: "Amir Khan",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// console.log(
//   `${
//     salmanKhan.calcBMI() > amirKhan.calcBMI()
//       ? `${
//           salmanKhan.fullName
//         }'s BMI (${salmanKhan.calcBMI()}) is higher than ${
//           amirKhan.fullName
//         }'s BMI (${amirKhan.calcBMI()})!`
//       : `${amirKhan.fullName}'s BMI (${amirKhan.calcBMI()}) is higher than ${
//           salmanKhan.fullName
//         }'s BMI (${salmanKhan.calcBMI()})!`
//   }`
// );

// ACTUAL CODE

const salmanKhan = {
  fullName: "Salman Khan",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const amirKhan = {
  fullName: "Amir Khan",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

salmanKhan.calcBMI();
amirKhan.calcBMI();

console.log(salmanKhan.bmi, amirKhan.bmi);

if (salmanKhan.bmi > amirKhan.bmi) {
  console.log(
    `${salmanKhan.fullName}'s BMI (${salmanKhan.bmi}) is higher than ${amirKhan.fullName}'s BMI (${amirKhan.bmi})`
  );
} else if (amirKhan.bmi > salmanKhan.bmi) {
  console.log(
    `${salmanKhan.fullName}'s BMI (${salmanKhan.bmi}) is higher than ${amirKhan.fullName}'s BMI (${amirKhan.bmi})`
  );
}
