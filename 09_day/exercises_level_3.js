import { countries_data } from "../countries_data.js";

// 1-
// 1.1- sort by name:
// console.log(countries_data.sort());

// 1.2-
// console.log(countries_data.sort(function(a,b){
//         if(a.capital > b.capital) return 1;
//         if(a.capital < b.capital) return -1;
//         return 0;
// }));

// 1.3-
// console.log(countries_data.sort(function(a,b){
//         if(a.population > b.population) return 1;
//         if(a.population < b.population) return -1;
//         return 0;
// }));

// 2-
// function mostSpokenLanguages(countriesData, number) {
//         let languages = {};

//         countriesData.forEach(function (country) {
//                 country.languages.forEach(function (language) {
//                         if (languages[language]) {
//                                 languages[language]++;
//                         } else {
//                                 languages[language] = 1;
//                         }
//                 });
//         });
//         let arrL = [];
//         for (let language in languages) {
//                 arrL.push({ country: language, count: languages[language] });
//         }
//         arrL.sort((a, b) => b.count - a.count);

//         return arrL.slice(0, number);
// }
// console.log(mostSpokenLanguages(countries_data, 10));


// 3-
// function mostPopulatedCountries(countriesData, number) {
//         let countriesP = countriesData.sort((a, b) => b.population - a.population);
//         let result = [];
//         countriesP.forEach(function (country, i) {
//                 if (i < number) {
//                         result.push(country)
//                 };
//         });
//         return result;
// }
// console.log(mostPopulatedCountries(countries_data, 3));

// 4-

