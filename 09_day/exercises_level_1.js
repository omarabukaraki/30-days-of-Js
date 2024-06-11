const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];


// 1-
// Explain the difference between forEach, map, filter, and reduce.

// 2-
// Define a callback function before you use it in forEach, map, filter or reduce.

// 3-
// countries.forEach(function(country){
//     console.log(country);
// });

// 4-
// names.forEach(function(name){console.log(name);});

// 5-
// numbers.forEach(function(number){console.log(number);});

// 6-
// let newCountries = countries.map((country)=> country.toUpperCase());
// console.log(newCountries);

// 7-
// let countriesLength = countries.map((country)=> country.length);
// console.log(countriesLength);

// 8-
// let squareArr = numbers.map(function(number){
//     return Math.pow(number,2);
// });
// console.log(squareArr);

// 9-
// let upperName = names.map((name)=>name.toUpperCase());
// console.log(upperName);

// 10-
// console.log(products.map(function(pro){
//     return `${pro.product} : ${pro.price}`;
// }));

// 11-
// let endLand = countries.filter(function(county){
//     return county.toLowerCase().includes('land');
// })
// console.log(endLand);

// 12-
// let newCountries = countries.filter((country)=>country.length === 6);
// console.log(newCountries);

// 13-
// let newCountries = countries.filter((country)=>country.length >= 6);
// console.log(newCountries);

// 14-
// let countryStartWithE = countries.filter((country)=> country.startsWith('E'));
// console.log(countryStartWithE);

// 15-
// let withPrice = products.filter(function(produce){
//     return produce.price !== '';
// });
// console.log(withPrice);

// 16-
// function getStringLists(arr){
//     return arr.filter((a)=> typeof a === 'string');
// }
// console.log(getStringLists([1,'test','testOne',5,false]));

// 17-
// let sum = numbers.reduce(function(previousValue, currentValue){
//     return previousValue + currentValue ;
// });
// console.log(sum);

// 18-
// let sentence = countries.reduce(function(accumlator ,currentValue){    
//     return accumlator.concat(", "+currentValue);
// });
// console.log(sentence);

// 19-
// some: check if at lest one element passes the callback test or not.
// every: check if all element of arrary are same or are satisfy the callback function condition or not.

// 20-
// let someHaveLand = countries.some(function(country){
//     return country.toLowerCase().includes('land');
// });
// console.log(someHaveLand);

// 21-
// let allHaveLand = countries.every(function(country){
//     return country.toLowerCase().includes('land');
// });
// console.log(allHaveLand);

// 22-
// find: Return the first element which satisfies the condition.
// findIndex: Return the position of the first element which satisfies the condition.

// 23-
// let result = countries.find(function(country){
//     return country.length === 6;
// });
// console.log(result);

// 24-
// let result = countries.findIndex(function(country){
//     return country.length === 6;
// });
// console.log(result);

// 25-
// let result = countries.findIndex(function(country){
//     return country === 'Norway';
// });
// console.log(result);

// 26-
// let result = countries.findIndex(function(country){
//     return country === 'Russia';
// });
// console.log(result);