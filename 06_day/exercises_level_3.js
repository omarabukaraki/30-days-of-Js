// const countries = [
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
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


// 2-
// let sortedCountries = [...countries].sort();
// console.log(sortedCountries);


// 3-
// 3.1-
// let sortedWebTech = [];
// let abc = 'ABCDEFGHIJKLMNOPQRSTUWYXZ';
// for (let index = 0; index < abc.length; index++) {
//     for (let i = 0; i < webTechs.length; i++) {
//        if(webTechs[i].startsWith(abc[index])){
//             sortedWebTech.push(webTechs[i]);
//        }
//     }
// }
// console.log(sortedWebTech);

// 3.2-
// let sortedMernStack = [];
// let abc = 'ABCDEFGHIJKLMNOPQRSTUWYXZ';
// for (let index = 0; index < abc.length; index++) {
//     for (let i = 0; i < mernStack.length; i++) {
//        if(mernStack[i].startsWith(abc[index])){
//             sortedMernStack.push(mernStack[i]);
//        }
//     }
// }
// console.log(sortedMernStack);



// 4-
// let newCountries = [];
// for (let index = 0; index < countries.length; index++) {
//   if(countries[index].includes('land')){
//     newCountries.push(countries[index]);
//   }
// }
//     console.log(newCountries);



// 5-
// let hightestNumberOfCharacters = countries[0];
// for (let index = 0; index < countries.length; index++) {
//     if( hightestNumberOfCharacters.length <= countries[index].length ){
//         hightestNumberOfCharacters = countries[index];
//     }    
// }
// console.log(hightestNumberOfCharacters);


// 7-
// let newCountries = [];
// for (let index = 0; index < countries.length; index++) {
//     if( countries[index].length === 4){
//         newCountries.push(countries[index]);
//     }    
// }
// console.log(newCountries);


// 8-
// let countriesArr = [];
// for (let index = 0; index < countries.length; index++) {
//        if(countries[index].split(" ").length >= 2 ){
//         countriesArr.push(countries[index]);
//        }
// }
// console.log(countriesArr);



// 9-
// let reversedCountries = [];
// for (let index = 0; index < countries.length; index++) {
//     reversedCountries.unshift(countries[index].toUpperCase());
// }
// console.log(reversedCountries);

