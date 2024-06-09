
// 1-
// function fullName(){
//     let firstName = 'omar';
//     let lastName ='abu karaki';
//     console.log(firstName+ " "+ lastName);
// }
// fullName();


// 2-
// function fullName(firstName , lastName){
//    return firstName+ " "+ lastName;
// }
// console.log(fullName('omar', 'abu karaki'));


// 3-
// function addNumbers(num1,num2){
//     return num1+num2;
// }
// console.log(addNumbers(6,4));


// 4-
// function areaOfRectangle(length,width){
//     let area = length * width;
//     return area;
// }
// console.log(areaOfRectangle(2,2));


// 5-
// function perimeterOfRectangle(length,width){
//  let perimeter= 2 * (length + width);
//  return perimeter;
// }
// console.log(perimeterOfRectangle(2,2));


// 6-
// function volumeOfRectPrism(length,width,height){
//     let volume = length * width * height;
//     return volume;   
// }
// console.log(volumeOfRectPrism(10,10,2));


// 7-
// function areaOfCircle(r){
//     area = Math.PI.toFixed(2) * Math.pow(r,2);
//     return area;
// }

// console.log(areaOfCircle(5));


// 8-
// let circumOfCircle = (r)=> (2* Math.PI * r).toFixed(2);
// console.log(circumOfCircle(10));

// 9-
// let density = (mass,volume)=> mass/volume;
// console.log(density(20,2));

// 10-
// function speed(totalDistance,totalAmount){
//   return totalDistance / totalAmount;
// }
// console.log(speed(100,10));
 

// 11-
// let weight = (mass,gravity)=> mass*gravity;
// console.log(weight(10,2));

// 12-
// function convertCelsiusToFahrenheit(oC){
//   let oF = (oC * 9/5) + 32;
//   return oF;
// }
// console.log(convertCelsiusToFahrenheit(10));


// 13-
// function bodyMassIndex(weight,height){
//     let bmi = weight / (height * height);
//     if(bmi < 18.5){
//         return 'Underweight';
//     }else if(bmi>= 18.5 && bmi <=24.9 ){
//         return 'Normal weight';
//     }else if(bmi>= 25 && bmi <=29.9){
//        return 'Overweight';
//     }else if(bmi >= 30){
//         return 'Obese';
//     }
// }
// console.log(bodyMassIndex(68,1.8));


// 14-
// function checkSeason(month){
// switch(month){
//     case 'september':
//     case 'october':
//     case 'november': 
//     return 'The season is Autumn.'; 
//     break;
//     case 'december': 
//     case 'january':
//     case 'february':
//     return 'The season is Winter.'; 
//     break;
//     case 'march':
//     case 'april':
//     case 'may': 
//     return 'The season is Spring.';
//     break;
//     case 'june':
//     case 'july':
//     case 'august':
//     return 'The season is Summer';
//     break;
//     default:
//     return 'please enter a valid month.';
//     break;
// }
// }
// console.log(checkSeason('may'));


// 15-
// function findMax(num1,num2,num3){
//     let numbers = [num1,num2,num3];
//     let maxNumber = numbers[0];
//     for (let index = 0; index < numbers.length; index++) {
//          if(numbers[index] >= maxNumber){
//             maxNumber = numbers[index];
//          }        
//     }
//     return maxNumber;
// }
// console.log(findMax(0, 10, 5));
// console.log(findMax(0, -10, -2));