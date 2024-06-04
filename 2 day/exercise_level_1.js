// 1-
let challenge = '30 Days Of JavaScript';

// 2-
console.log(challenge);

// 3-
console.log(challenge.length);

// 4-
console.log(challenge.toUpperCase());

// 5-
console.log(challenge.toLowerCase());

// 6-
let cuttingString = challenge.substr(2,challenge.length -2);
console.log(cuttingString);

// 7-
console.log(challenge.substring(2,challenge.length));

//8-
console.log(challenge.includes("Script"));

// 9-
console.log(challenge.split());

// 10-
console.log(challenge.split(' '));

//11-
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str.split(","));

// 12-
console.log(challenge.replace("JavaScript","Python"));

// 13-
console.log(challenge.charAt(15));

// 14-
console.log(challenge.charCodeAt(11));

// 15-
console.log(challenge.indexOf("a"));

//16-
console.log(challenge.lastIndexOf("a"));

// 17-
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// 18-
console.log(sentence.lastIndexOf('because'));

//19-
console.log(sentence.search('because'));

// 20-
let challengeWithSpace = `  ${challenge}  `;
console.log(challengeWithSpace.trim());

// 21-
console.log(challenge.startsWith("30"));

// 22-
console.log(challenge.endsWith("Script"));

// 23-
console.log(challenge.match(/a/gi));

// 24-
let strOne = '30 Days of';
let strTwo = 'JavaScript';
console.log(strOne.concat(" ",strTwo));

// 25-
console.log(challenge.repeat(2));
