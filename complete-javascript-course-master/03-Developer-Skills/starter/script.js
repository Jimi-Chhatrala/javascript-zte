// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log('max: ', max);
//   console.log('min: ', min);
//   return max - min;
// };

// // calcTempAmplitude([3, 6, 8, 5, 1]);
// const amplitude = calcTempAmplitude(temperatures);

// console.log('amplitude: ', amplitude);

// *********************
// Merge 2 Arrays
// *********************

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log('max: ', max);
//   console.log('min: ', min);
//   return max - min;
// };

// calcTempAmplitude([3, 6, 8, 5, 1]);
// const amplitudeNew = calcTempAmplitudeNew(temperatures);

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 2, 0]);

// console.log('amplitude: ', amplitudeNew);

// Debugging and Fixing

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C) FIX
//     value: Number(prompt('Degree celsuis: ')),
//   };

//   // B) FIND
//   // console.log(measurement);
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// Big Bug and Fix
// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log('max: ', max);
//   console.log('min: ', min);
//   return max - min;
// };

// calcTempAmplitude([3, 6, 8, 5, 1]);
// const amplitudeNew = calcTempAmplitudeNew(temperatures);

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 2, 0]);

// console.log('amplitude: ', amplitudeNew);

// Problem Statement
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}'C ...${data1[1]}'C ...${data1[2]}'C ... `);

const printForecast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}'C in ${i + 1} days ... `;
  }
  console.log('...', str);
};

printForecast(data1);
*/
