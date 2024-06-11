// 1-

// 1.1- using for loop:
// for (let index = 0; index <= 10 ; index++) {
//   console.log(index);    
// }

// 1.2- using while loop:
// let index = 0;
// while(index<=10){
//   console.log(index);    
//   index++;
// }

// 1.3- using do loop:
// let index = 0;
// do{
//     console.log(index);
//     index++;
// }while(index<=10);


// 2-
// 2.1- using for loop:
// for (let index = 10; index >= 0 ; index--) {
//   console.log(index);    
// }

// 2.2- using while loop:
// let index = 10;
// while(index>=0){
//   console.log(index);    
//   index--;
// }

// 2.3- using do loop:
// let index = 10;
// do{
//     console.log(index);
//     index--;
// }while(index>=0);

// 3-
// let n = 5;
// for (let index = 0; index < n; index++) {
//   console.log(index);
// }


// 4-
// for (let index = 0; index < 7; index++) {
//    console.log("#".repeat(index+1));    
// }


// 5-
// for (let index = 0; index <= 10; index++) {
//    console.log(`${index} x ${index} = ${index*index} `);    
// }

// 6-
// console.log('i  i^2  i^3');
// for (let index = 0; index <= 10; index++) {
// console.log(`${index}   ${Math.pow(index,2)}   ${Math.pow(index,3)}`);    
// }


// 7-
// for (let index = 0; index <= 100; index++) {
//    if(index % 2 === 0){
//     console.log(index);
//    }    
// }


// 8-
// for (let index = 0; index <= 100; index++) {
//     if(index % 2 === 1){
//      console.log(index);
//     }    
//  }


// 9-  [----------need to resolve----------]
// for (let index = 0; index <= 100; index++) {
//    if(index / 2 === parseInt(index / 2) && index / 3 === parseInt(index / 3)){
//     console.log(index);
//    }
// }



// 10-
// let sum = 0;
// for (let index = 0; index <=100; index++) {
//    sum+=index;    
// }
// console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)



// 11-
// let sumOdd = 0;
// let sumEven = 0;
// for (let index = 0; index <= 100; index++) {
//    if(index%2===0){
//     sumEven += index;
//    }else{
//     sumOdd +=index;
//    }    
// }
// console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`)



// 12-
// let sumOdd = 0;
// let sumEven = 0;
// let arr = [];
// for (let index = 0; index <= 100; index++) {
//    if(index%2===0){
//     sumEven += index;
//    }else{
//     sumOdd +=index;
//    }    
// }
// arr.unshift(sumEven);
// arr.push(sumOdd);
// console.log(arr);


// 13-
// let arrRandom = [];
// for (let index = 1; index <=5; index++) {
//     arrRandom.push(Math.floor(Math.random() * (index+1)));
// }
// console.log(arrRandom);   


// 14-
// let arrRandomUnique = [];
// for (let index = 0; index < 5; index++) {
//     let randomNumber = Math.round(Math.random() * (index+1));
//    if(!arrRandomUnique.includes(randomNumber)){
//     arrRandomUnique.push(randomNumber);
//    }else{
//     arrRandomUnique.push(randomNumber+index);
//    }
// }

// 15-
// let chars = 'abcdefghijklmnopqrstuwyxz0W123456789';
// let randomIdArr = [];
// for (let index = 0; index < 6; index++) {
//     let randomIndex = Math.floor((Math.random() * chars.length));
//     randomIdArr.push(chars[randomIndex]);
//  }
//  let randomId = randomIdArr.join('');
//  console.log(randomId);

