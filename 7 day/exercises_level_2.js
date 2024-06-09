// 1-
// function solveLinEquation(a,b,c,x,y){
//    return a*x +b*y + c;
// }
// console.log(solveLinEquation(2,2,-4,1,1));


// 2-
// function solveQuadratic(a,b,c){
//     if(a  === undefined|| b  === undefined|| c === undefined){
//          return '{0}';
//     }else{
//     let rootValue = Math.sqrt(Math.pow(b,2) -(4*a*c));
//     let x1 = (-b + rootValue)/(2*a);
//     let x2 = (-b - rootValue)/(2*a);
//     if(x1 === x2){
//        return `{${x1}}`;
//     }
//       return `{${x1}, ${x2}}`;
//     }
   
// }
// console.log(solveQuadratic());
// console.log(solveQuadratic(1, 4, 4));
// console.log(solveQuadratic(1, -1, -2));
// console.log(solveQuadratic(1, 7, 12));
// console.log(solveQuadratic(1, 0, -4));
// console.log(solveQuadratic(1, -1, 0));


// 3-
// function printArray(arr){
//     for (let index = 0; index < arr.length; index++) {
//          console.log(arr[index]);        
//     }
// }
// printArray([188,418,155,15]);


// 4-
// function showDateTime(){
//     const date = new Date();
//     const day = (date.getDay()+2).toString().padStart(2,0);
//     const month = (date.getMonth()+1).toString().padStart(2,0);
//     const year = date.getFullYear();
//     const hours= (date.getHours()/4).toString().padStart(2,0);
//     const minutes= (date.getMinutes()).toString().padStart(2,0);

//     let dateWithFormate = `${day}/${month}/${year} ${hours}:${minutes}`
//     return dateWithFormate;
// }
// console.log(showDateTime());



// 5-
// function swapValues(x,y){
//     let z = x;
//     x = y;
//     y = z;
//     return `x => ${x}, y => ${y}`;
// }
// console.log(swapValues(3, 4));
// console.log(swapValues(4, 5));


// 6-
// function reverseArray(arr){
//    let newArr = [];
//    for (let index = 0; index < arr.length; index++) {
//         newArr.unshift(arr[index]);    
//    };
//    return newArr;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray(['A', 'B', 'C']));


// 7-
// function capitalizeArray(arr){
//     let capitalArr = [];
//   for (let index = 0; index < arr.length; index++) {
//         capitalArr.push(arr[index].toUpperCase());
//   }
//   return capitalArr;
// }
// console.log(capitalizeArray(['a','d','r']));


// 8-
// let items = [];
// function addItem(item){
//    items.push(item);
//    return items;
// }
// addItem(2);
// addItem(5);
// console.log(addItem(1));


// 9-
// let items = [0,5,8,7];
// function removeItem(index){
//     items.splice(index,1);
//     return items;
// }
// console.log(removeItem(2));


// 10-
// let numbers = 0;
// function sumOfNumbers(number){
//     numbers += number;
//     return numbers;
// }
// sumOfNumbers(9);
// sumOfNumbers(5);
// console.log(sumOfNumbers(1));


// 11-
// function sumOfOdds(...number){
//     let sumOdd= 0;
//     for (let index = 0; index < number.length; index++) {
//          if(number[index]%2 ===1){
//            sumOdd +=number[index];
//          }        
//     }
//     return sumOdd;
// }
// console.log(sumOfOdds(1,3,8,4,2,7));


// 12-
// function sumOfEven(...number){
//     let sumEven= 0;
//     for (let index = 0; index < number.length; index++) {
//          if(number[index]%2 ===0){
//             sumEven +=number[index];
//          }        
//     }
//     return sumEven;
// }
// console.log(sumOfEven(1,3,8,4,2,7));



// 13-
// function evensAndOdds(number){
//      let oddCount = 0;
//      let evenCount = 0;
//     if(number > 0 && number.toString().includes('.') !== true){
//         for (let index = 0; index <= number; index++) {
//             if(index % 2 === 0){
//                 evenCount++;
//             }else{
//                 oddCount++;
//             }
//         }
//         return `The number of odds are ${oddCount}.\nThe number of evens are ${evenCount}.` ;

//     }else{ 
//         return 'Enter a positive integer number';
//     }
    
// }
// console.log(evensAndOdds(100));



// 14-
// function sum(...numbers){
//     let sumVal = 0;
//    for (let index = 0; index < numbers.length; index++) {
//     sumVal += numbers[index];
//    }
// console.log(sumVal);
// }
// sum(1, 2, 3);
// sum(1, 2, 3, 4);


// 15-
// function randomUserIp(){
//     let userIp = [];
//     for (let index = 0; index < 4; index++) {
//         userIp.push(Math.floor(Math.random() * 256));
//     }
//     return userIp.join('.');
// }
// console.log(randomUserIp());


// 16-
// function randomMacAddress(){
//     let chars = 'ABCDEFGHIJKLMNOPQRSTUWYXZ0123456789';
//     let MacAddress = [];
//     for (let index = 0; index < 6; index++) {
//         let random1 = chars[Math.floor(Math.random() * chars.length)];
//         let random2 = chars[Math.floor(Math.random() * chars.length)];

//        MacAddress.push([random1,random2].join(''));        
//     }
//     return MacAddress.join('-');
// }
// console.log(randomMacAddress());


// 17-
// function randomHexaNumberGenerator(){
// let hexadecimalNumber = '0123456789abcdef';
// let randomHnArr = ['#'];
//  for (let index = 0; index < 6; index++) {
//     let randomIndex = Math.floor((Math.random() * hexadecimalNumber.length));
//     randomHnArr.push(hexadecimalNumber[randomIndex]);
// } 
// return randomHnArr.join('');
// }
// console.log(randomHexaNumberGenerator());


// 18-
// function userIdGenerator(){
//     let chars = 'ABCDEFGHIJKLMOPQRSTUWYXZabcdefghijklmnopqrstuwyxz0123456789';
//     let userId = [];
//     for (let index = 0; index < 7; index++) {
//           userId.push(chars[Math.floor(Math.random() * chars.length)]);        
//     }
//     return userId.join('');
// }
// console.log(userIdGenerator());