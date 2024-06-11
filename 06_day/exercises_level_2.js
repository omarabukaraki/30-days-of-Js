// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Iceland',
//     'Kenya'
//   ];
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ];
  
//   const mernStack = ['MongoDB', 'Express', 'React', 'Node'];


// 1-
// let chars = 'abcdefghijklmnopqrstuwyxz0W123456789';
// let randomIdArr = [];
// for (let index = 0; index < Math.floor((Math.random() * chars.length)) ; index++) {
//     let randomIndex = Math.floor((Math.random() * chars.length));
//     randomIdArr.push(chars[randomIndex]);
//  }
//  let randomId = randomIdArr.join('');
//  console.log(randomId);


// 2-
// let hexadecimalNumber = '0123456789abcdef';
// let randomHnArr = ['#'];
// for (let index = 0; index < 6; index++) {
//     let randomIndex = Math.floor((Math.random() * hexadecimalNumber.length));
//     randomHnArr.push(hexadecimalNumber[randomIndex]);
// }
// let randomHn = randomHnArr.join('');
//  console.log(randomHn);


// 3-
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
// document.body.style.background =`rgb(${red},${green},${blue})`;


// 4-
// let newCountries = [];
// for (let index = 0; index < countries.length; index++) {
//     newCountries.push(countries[index].toUpperCase());
// }
// console.log(newCountries);


// 5-
// let countriesLength = [];
// for (let index = 0; index < countries.length; index++) {
//     countriesLength.push(countries[index].length);
// }
// console.log(countriesLength);


// 6-
// let ArrOfArr = [];
// for (let index = 0; index < countries.length; index++) {
//     ArrOfArr.push([countries[index],countries[index].substring(0,3).toUpperCase(),countries[index].length]);
// }
// console.log(ArrOfArr);


// 7-
// let newCountries = [];
// for (let index = 0; index < countries.length; index++) {
//   if(countries[index].includes('land')){
//     newCountries.push(countries[index]);
//   }
// }
// if(newCountries.length === 0){
//     console.log(countries);
// }else{
//     console.log(newCountries);
// }


// // 8-
// let newCountries = [];
// for (let index = 0; index < countries.length; index++) {
//   if(countries[index].lastIndexOf('ia') !== -1){
//     newCountries.push(countries[index]);
//   }
// }
// if(newCountries.length === 0){
//     console.log(countries);
// }else{
//     console.log(newCountries);
// }



// 9-
// let bigCountryNumber = countries[0];
// for (let index = 0; index < countries.length; index++) {
//     if( bigCountryNumber.length <= countries[index].length ){
//         bigCountryNumber = countries[index];
//     }    
// }
// console.log(bigCountryNumber);


// 10-
// let newCountries = [];
// for (let index = 0; index < countries.length; index++) {
//     if( countries[index].length === 5){
//         newCountries.push(countries[index]);
//     }    
// }
// console.log(newCountries);



// 11-
// let longestWord=webTechs[0];
// for (let index = 0; index < webTechs.length; index++) {
//     if(longestWord.length <= webTechs[index].length){
//         longestWord = webTechs[index];
//     }    
// }
// console.log(longestWord);


// 12-
// let newWebTechs = [];
// for (let index = 0; index < webTechs.length; index++) {
//     newWebTechs.push([webTechs[index],webTechs[index].length]);    
// }
// console.log(newWebTechs);


// 13-



// 14-
// let webPath = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
// for (const webT of webPath) {
//     console.log(webT);
// }


// 15-
// let fruit = ['banana', 'orange', 'mango', 'lemon'];
// let reversedFruit = [];
// for (const singleFruit of fruit) {
//     reversedFruit.unshift(singleFruit);
// }
// console.log(reversedFruit);


// 16-
// const fullStack = [['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']];
// for (let index = 0; index < fullStack.length; index++) {
//   for (let i = 0; i < fullStack[index].length; i++) {
//     console.log(fullStack[index][i]);    
//   }
// }