// 1-
let sentenceOne = 'There is no exercise better for the heart than reaching down and lifting people up.';
let help = 'help';
console.log(`The quote \'${sentenceOne}\' by John Holmes teaches us to ${help} one another.`);

// 2-
console.log('\"Love is not patronizing and charity isn\'t about pity, \
it is about love. \
Charity and love are the same -- with charity you give love, \
so don\'t just give money but reach out your hand instead.\"');

// 3-
let num10 = '10';
console.log(typeof num10 === 10 ? num10 : parseInt(num10));

// 4-
let floatNum = parseFloat('9.8');
console.log(floatNum === 10 ? floatNum : Math.ceil(floatNum));

// 5-
let python = 'python';
let jargon = 'jargon';
console.log(python.includes('on'));
console.log(jargon.includes('on'));

// 6-
console.log('I hope this course is not full of jargon.'.includes('jargon'));

// 7-
console.log(Math.floor(Math.random()*101));

// 8-
console.log(Math.floor((Math.random()* (51) + 50)));

// 9-
console.log(Math.floor(Math.random()*256));

// 10-
let jsStr = 'JavaScript';
console.log(jsStr.charAt(Math.floor(Math.random() * jsStr.length)));

// 11-
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// 12-
let sentenceEx2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentenceEx2.substr(sentenceEx2.indexOf("because"),23));