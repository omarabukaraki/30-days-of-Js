// 1-
// let  numberOfCharacters = prompt('Enter number of characters:');
// let   numberOfIds = prompt('Enter  number of ids:');

// function userIdGeneratedByUser(){
//     function userIdGenerator(){
//         let chars = 'ABCDEFGHIJKLMOPQRSTUWYXZabcdefghijklmnopqrstuwyxz0123456789';
//         let userId = [];
//         for (let index = 0; index < Number(numberOfCharacters); index++) {
//               userId.push(chars[Math.floor(Math.random() * chars.length)]);        
//         }
//         return userId.join('');
//     }
//     let userIds = [];
//     for (let index = 0; index < Number(numberOfIds); index++) {
//     userIds.push(userIdGenerator());
//    }
//    return userIds.join('\n');
// }
// console.log(userIdGeneratedByUser());


// 2-
// function rgbColorGenerator(){
// let red;
// let green;
// let blue;
// for (let index = 0; index < 6; index++) {
//    red = Math.floor((Math.random() * 256));  
//    green = Math.floor((Math.random() * 256));  
//    blue = Math.floor((Math.random() * 256));  
// }
// let randomColor = `rgb(${red},${green},${blue})`;
// console.log(randomColor);
// }
// rgbColorGenerator();


// 3-
// function arrayOfHexaColors(numberOfColorsGenerate){
//     let colorsGenerate = []; 

//     function createHexaColors(){
//         let hexadecimalNumber = '0123456789abcdef';
//         let randomHnArr = ['#'];
//          for (let index = 0; index < 6; index++) {
//             let randomIndex = Math.floor((Math.random() * hexadecimalNumber.length));
//             randomHnArr.push(hexadecimalNumber[randomIndex]);
//         } 
//         return randomHnArr.join('');
//         }
    
//         for (let index = 0; index < numberOfColorsGenerate; index++) {
//            colorsGenerate.push(createHexaColors());
//         }

//         return colorsGenerate;
// }
// console.log(arrayOfHexaColors(8));


// 4-
//  function arrayOfRgbColors(numberOfRGBColors){
//     let colors = [];
//     function rgbColorGenerator(){
//         let red;
//         let green;
//         let blue;
//         for (let index = 0; index < 6; index++) {
//            red = Math.floor((Math.random() * 256));  
//            green = Math.floor((Math.random() * 256));  
//            blue = Math.floor((Math.random() * 256));  
//         }
//         let randomColor = `rgb(${red},${green},${blue})`;
//         return randomColor;
//         }

//     for (let index = 0; index < numberOfRGBColors; index++) {
//         colors.push(rgbColorGenerator());        
//     }
//     return colors;
//  }

//  console.log(arrayOfRgbColors(3));



// 5-
// function convertHexaToRgb(hexColor){
//     let color = hexColor.substring(1,7);
//     let rColor = parseInt(color.substring(0,2),16);
//     let gColor = parseInt(color.substring(2,4),16);
//     let bColor = parseInt(color.substring(4,6),16);

//     return `rgb(${rColor},${gColor},${bColor})`;
// }
// console.log(convertHexaToRgb('#ffffff'));


// 6-
// function convertRgbToHexa(rgbColor){ 
//     let color = String(rgbColor).split(',');
//     let rColor = parseInt(color[0].substring(4,7)).toString(16).padStart(2, '0');
//     let gColor = parseInt(color[1]).toString(16).padStart(2, '0');
//     let bColor = parseInt(color[2].substring(0,3)).toString(16).padStart(2, '0');
//     return `#${rColor}${gColor}${bColor}`;
// }
// console.log(convertRgbToHexa('rgb(255,255,255)'));


// 7-
// function generateColors(typeColor,numberOfColor){
//         function rgbColorGenerator(){
//         let red;
//         let green;
//         let blue;
//         for (let index = 0; index < 6; index++) {
//            red = Math.floor((Math.random() * 256));  
//            green = Math.floor((Math.random() * 256));  
//            blue = Math.floor((Math.random() * 256));  
//         }
//         let randomColor = `rgb(${red},${green},${blue})`;
//         return randomColor;
//         }
//         function createHexaColors(){
//         let hexadecimalNumber = '0123456789abcdef';
//         let randomHnArr = ['#'];
//          for (let index = 0; index < 6; index++) {
//             let randomIndex = Math.floor((Math.random() * hexadecimalNumber.length));
//             randomHnArr.push(hexadecimalNumber[randomIndex]);
//         } 
//         return randomHnArr.join('');
//         }

//     if(typeColor === 'hexa'){
//          let hexaColorArr = [];
//          for (let index = 0; index < numberOfColor; index++) {
//                   hexaColorArr.push(createHexaColors());            
//          }
//          return hexaColorArr;
//     }else{
//        let rgbColorArr = [];
//        for (let index = 0; index < numberOfColor; index++) {
//         rgbColorArr.push(rgbColorGenerator());            
//       }
//       return rgbColorArr;
//     }
// }
// console.log(generateColors('hexa', 3));
// console.log(generateColors('hexa', 1));
// console.log(generateColors('rgb', 3));
// console.log(generateColors('rgb', 1));


// 8-
// function shuffleArray(arr){
//    let currentArr = [...arr];
//    let newArr = [];
//    for (let index = 0; index < arr.length; index++) {

//     let randomNumber = Math.floor(Math.random() * currentArr.length);
//     newArr.push(currentArr[randomNumber]);
//     currentArr.splice(randomNumber,1);
//    }
//    return newArr;
// }
// console.log(shuffleArray([1,2,3,4,5]));


// 9-
// function factorial(number){
//     if(number === 1) return 1;
//     return number * factorial(number-1);
// }
// console.log(factorial(5));


// 10-
// function isEmpty(parameter){
//     if(parameter === undefined){
//         return 'true';
//     }else{
//         return 'false';
//     }
// }
// console.log(isEmpty());
// console.log(isEmpty(5));


// 11-
// function sum(...num){
//     let sumValue = 0;
//     for (let index = 0; index < num.length; index++) {
//                sumValue += num[index];
//     }
//     return sumValue;
// }
// console.log(sum(1,2,2,5));


// 12-
// function sumOfArrayItems(items){
//     let sum = 0;
//    for (let index = 0; index < items.length; index++) {
//        if(typeof items[index] === 'string'){
//            return 'please enter array of number';
//        } else{
//            sum +=items[index];
//        }
//    }
//    return sum;
// }
// console.log(sumOfArrayItems([1,5,8,7]));


// 13-
// function average(items){
//    let sum = 0;
//    for (let index = 0; index < items.length; index++) {
//        if(typeof items[index] === 'string'){
//            return 'please enter array of number';
//        } else{
//            sum +=items[index];
//        }
//    }
//    return sum/items.length;
// }
// console.log(average([1,2,3]));


// 14-

