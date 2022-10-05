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
