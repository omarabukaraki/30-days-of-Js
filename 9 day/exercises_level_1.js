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


// Explain the difference between forEach, map, filter, and reduce.

// Define a callback function before you use it in forEach, map, filter or reduce.

// Use forEach to console.log each country in the countries array.
// 3-
// countries.forEach(function(country){
//     console.log(country);
// });

// Use forEach to console.log each name in the names array.
// 4-
// names.forEach(function(name){console.log(name);});

// Use forEach to console.log each number in the numbers array.
// 5-
// numbers.forEach(function(number){console.log(number);});

// Use map to create a new array by changing each country to uppercase in the countries array.
// 6-
// let newCountries = countries.map((country)=> country.toUpperCase());
// console.log(newCountries);

// Use map to create an array of countries length from countries array.
// 7-
// let countriesLength = countries.map((country)=> country.length);
// console.log(countriesLength);

// Use map to create a new array by changing each number to square in the numbers array
// 8-
// let squareArr = numbers.map(function(number){
//     return Math.pow(number,2);
// });
// console.log(squareArr);

// Use map to change to each name to uppercase in the names array
// 9-
// let upperName = names.map((name)=>name.toUpperCase());
// console.log(upperName);

// Use map to map the products array to its corresponding prices.
// 10-
// console.log(products.map(function(pro){
//     return `${pro.product} : ${pro.price}`;
// }));


// Use filter to filter out countries containing land.
// 11-
// let endLand = countries.filter(function(county){
//     return county.toLowerCase().includes('land');
// })
// console.log(endLand);

// Use filter to filter out countries having six character.
// 12-
// let newCountries = countries.filter((country)=>country.length === 6);
// console.log(newCountries);

// Use filter to filter out countries containing six letters and more in the country array.
// 13-
// let newCountries = countries.filter((country)=>country.length >= 6);
// console.log(newCountries);

// Use filter to filter out country start with 'E';
// 14-
// let countryStartWithE = countries.filter((country)=> country.startsWith('E'));
// console.log(countryStartWithE);

// Use filter to filter out only prices with values.
// 15-
// let withPrice = products.filter(function(produce){
//     return produce.price !== '';
// });
// console.log(withPrice);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// 16-
// function getStringLists(arr){
//     return arr.filter((a)=> typeof a === 'string');
// }
// console.log(getStringLists([1,'test','testOne',5,false]));

// Use reduce to sum all the numbers in the numbers array.
// 17-
// let sum = numbers.reduce(function(previousValue, currentValue){
//     return previousValue + currentValue ;
// });
// console.log(sum);

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// 18-
// let sentence = countries.reduce(function(accumlator ,currentValue){    
//     return accumlator.concat(", "+currentValue);
// });
// console.log(sentence);

// Explain the difference between some and every
// 19-
// some: check if at lest one element passes the callback test or not.
// every: check if all element of arrary are same or are satisfy the callback function condition or not.

// Use some to check if some names' length greater than seven in names array
// 20-
// let someHaveLand = countries.some(function(country){
//     return country.toLowerCase().includes('land');
// });
// console.log(someHaveLand);

// Use every to check if all the countries contain the word land
// 21-
// let allHaveLand = countries.every(function(country){
//     return country.toLowerCase().includes('land');
// });
// console.log(allHaveLand);

// Explain the difference between find and findIndex.
// 22-
// find: Return the first element which satisfies the condition.
// findIndex: Return the position of the first element which satisfies the condition.

// Use find to find the first country containing only six letters in the countries array
// 23-
// let result = countries.find(function(country){
//     return country.length === 6;
// });
// console.log(result);

// Use findIndex to find the position of the first country containing only six letters in the countries array
// 24-
// let result = countries.findIndex(function(country){
//     return country.length === 6;
// });
// console.log(result);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// 25-
// let result = countries.findIndex(function(country){
//     return country === 'Norway';
// });
// console.log(result);

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
// 26-
// let result = countries.findIndex(function(country){
//     return country === 'Russia';
// });
// console.log(result);