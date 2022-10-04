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
