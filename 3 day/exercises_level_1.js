// 1-
let firstName = "omar";
let lastName = "abu karaki";
let country ="Jordan";
let city = "Amman";
let age = 22;
let isMarried = false;
let year = new Date().getFullYear();

console.log(typeof firstName,typeof lastName,typeof country ,typeof city,typeof age,typeof isMarried,typeof year);

// 2-
console.log(typeof '10' === typeof 10);

// 3-
console.log(parseInt('9.8') === 10);

// 4-
// 4.1- truthy value: 
let isUserT = true;
let userNameT = 'userOne';
let userAgeT = 22;

// 4.2- falsy value:
let isUserF = false;
let userNameF = '';
let userAgeF = 0;

// 5-
// i. true
// ii. true
// iii. false
// iv. false
// v. true
// vi. true
// vii. false
// viii. false
// ix. false
// x. true
// xi. false
// xii:  
console.log('python'.length === 'jargon'.length);

// 6-
// i. 4 > 3 && 10 < 12 => true
// ii. 4 > 3 && 10 > 12 => false
// iii. 4 > 3 || 10 < 12 => true
// iv. 4 > 3 || 10 > 12 => true
// v. !(4 > 3) => false
// vi. !(4 < 3) => true
// vii. !(false) => true
// viii. !(4 > 3 && 10 < 12) => false
// ix. !(4 > 3 && 10 > 12) => true
// x. !(4 === '4') => true
// xi. There is no 'on' in both dragon and python => false

// 7-
const date = new Date;
// i. What is the year today? 
console.log(date.getFullYear());
// ii. What is the month today as a number?
console.log(date.getMonth());
// iii. What is the date today?
console.log(date);
// iv. What is the day today as a number?
console.log(date.getDay());
// v. What is the hours now?
console.log(date.getHours());
// vi. What is the minutes now?
console.log(date.getMinutes());
// vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const startDate = new Date();
const nowDate = new Date();
startDate.setFullYear(1970);
startDate.setMonth(5);
startDate.setDate(1);
console.log(`${(nowDate - startDate)/1000}'s`);





