import {countries_data} from '../countries_data.js';

// 1-
// let countriesSet = new Set(countries_data);
// let language = new Set();
// for (const county  of countriesSet) {
//         county.languages.forEach(function(lang){
//                 language.add(lang);
//         });
// }
// console.log(language.size);

// 2-
// function mostSpokenLanguages(countries,length){
//         let countriesMap = new Map();

//         countries.forEach(function(country){
//                 country.languages.forEach(function(language){
//                         countriesMap.set(language,(countriesMap.get(language)+1 || 0 ) +1 );
//                 });
//         });
//         let result = [...countriesMap];
//         result.sort(function(a,b){
//                 return b[1] - a[1];
//         });
//         return result.slice(0,length);
// }
// console.log(mostSpokenLanguages(countries_data,10));