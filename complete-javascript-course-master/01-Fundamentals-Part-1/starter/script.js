/*
let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jimi");
console.log(23);

let firstName = "Jimikumar";
console.log(firstName);
let $function = 27;
let name = "Jims"; // never use name as variable name just fact
let Person = "Jimit"; //not recommended
let person = "jimii";
let PI = 3.14;
let PERSON = 12;
// allowed
// a,A,$,_ for variables to start name with
// 2 allowed only bewtween or last for variables names

let myFirstJob = "Programmer"; // descriptive variable names
let myCurrentJob = "Coach"; // descriptive variable names

let job1 = "programmer"; // descriptive variable names not recomment

let job2 = "coach";

console.log(myFirstJob);
*/
/*
true;
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof false);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jimi");

// Dynamic typing
javascriptIsFun = "Fun!";
console.log(typeof javascriptIsFun);

// undefined
let year;
console.log(year);
console.log(typeof year);

// dynamic typing
year = 1990;
console.log(year);
console.log(typeof year);

// javascript bug - returns object instead of null
console.log(typeof null);
*/

/*
let name;
name = "Jimi";

let age = 30;
age = 31;

const birthYear = 1995;
// birthYear = 1996;

// const nothingAssigned;

var job = "programmer";
job = "coder";
console.log(job);

var myStatus = "Married";
console.log(myStatus);
var myStatus = "Complicated";
console.log(myStatus);

lastName = "Chhatrala";
console.log(lastName);
console.log(typeof lastName);

*/
/*

// Math Operators
const now = 2037;
const ageJimi = now - 1991;
const ageSara = now - 2018;
console.log(ageJimi, ageSara);
// console.log(ageSara);

console.log(ageJimi * 2, ageJimi / 10, 2 ** 3);
// 2 ** 3 => means 2 to the power of 3 => 2 * 2 * 2

const firstName = "Jimi";
const lastname = "Chhatrala";
console.log(firstName + " " + lastname);

// typeof operator

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 10 + 15 = 25
x *= 4; // x = x + 4 = 25 * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJimi > ageSara);
console.log(ageJimi >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJimi = now - 1991;
const ageSara = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

// const averageAge = ageJimi + ageSara / 2; // 55.5
const averageAge = (ageJimi + ageSara) / 2; // 32.5
console.log(ageJimi, ageSara, averageAge);
*/
/*
// CODE CHALLENGE 1

// const massMark = 78;
// const heightMark = 1.69;
// const massJimi = 92;
// const heightJimi = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJimi = 85;
const heightJimi = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJimi = massJimi / (heightJimi * heightJimi);
const markHigherBMI = BMIMark > BMIJimi;

console.log(BMIMark, BMIJimi, markHigherBMI);
*/
/*
const firstName = "Jimi";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jimi =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jimi);

const jimiNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jimiNew);

console.log(`Just a regular's string"s...`);

console.log("String \n\
with multiple \n\
lines");

console.log(`String
with multiple other 
new lines`);
*/
/*
const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {

if (age >= 18) {
  console.log("You can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`You are too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2022;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

// CODE CHALLENGE 2
/*
const massMark = 78;
const heightMark = 1.69;
const massJimi = 92;
const heightJimi = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJimi = 85;
// const heightJimi = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJimi = massJimi / (heightJimi * heightJimi);
console.log(BMIMark, BMIJimi);

if (BMIMark > BMIJimi) {
  console.log(
    `Mark's BMI (${BMIMark}) is higher than Jimi's BMI (${BMIJimi})!`
  );
} else {
  console.log(
    `Jimi's BMI (${BMIJimi}) is higher than Mark's BMI (${BMIMark})!`
  );
}
*/

// type conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jimi"));
console.log(typeof NaN);

console.log(String(24), 24);

// type coercion

console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("I am " + String(23) + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

// Just Guess Output

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
