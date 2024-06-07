// import { countries } from "../countries.js";

// // 1-
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25];

// // 1.1-
// ages.sort();
// console.log(`Max age: ${Math.min(...ages)}`);
// console.log(`Min age: ${Math.max(...ages)}`);


// // 1.2-
// if(ages.length % 2 === 0){
//     let result =  (ages[(ages.length/2)-1] + ages[(ages.length/2)])/2;
//     console.log(result);
// }else{
//     console.log(ages[Math.floor(ages.length/2)]);
// }

// // 1.3-
// let sum = 0;
// for (let index = 0; index < ages.length; index++) {
//     sum += ages[index];    
// }
// let avg = sum/ages.length;
// console.log(avg);

// // 1.4-
// let maxAge = Math.max(...ages);
// let minAge = Math.min(...ages);
// let rangeOfAge = maxAge - minAge;
// console.log(rangeOfAge);

// // 1.5-
// let minSubAvgAge = Math.min(...ages) - avg;
// let maxSubAvgAge = Math.max(...ages) - avg;
// let difference = maxSubAvgAge - minSubAvgAge;
// console.log(difference);


// // 2-
// if(countries.length % 2 ===0 ){
//     console.log(`${countries[(countries.length/2)-1]}, ${countries[countries.length/2]}`);
// }else{
//     console.log(countries[Math.floor(countries.length/2)]);
// }


// // 3-
// if(countries.length % 2 ===0 ){
//     let sliceOne = countries.slice(0,(countries.length/2));
//     let sliceTwo = countries.slice((countries.length/2),countries.length);
//     console.log(sliceOne);
//     console.log(sliceTwo);
// }else{
//     let sliceOne = countries.slice(0,(countries.length/2)+1);
//     let sliceTwo = countries.slice((countries.length/2)+1,countries.length);
//     console.log(sliceOne);
//     console.log(sliceTwo);
// }




