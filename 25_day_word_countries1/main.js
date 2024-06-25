import {countries_data} from '../countries_data.js';



let spokenLanguage = {};

countries_data.forEach(country=>{
    country.languages.forEach(language=>{
        if(spokenLanguage[language]){
            spokenLanguage[language]++;
        }else{
            spokenLanguage[language] = 1;
        }
    })
});
let mostSpokenLanguage = Object.entries(spokenLanguage).sort((a,b)=>b[1]-a[1]).slice(0,10);


let countriesPopulation = countries_data.map((country)=>{
   return {name:country.name,population:country.population};
});
let tenCountriesPopulation = countriesPopulation.sort((a,b)=>b.population - a.population).slice(0,10);


let totalEntirePopulation = countriesPopulation.reduce((pV,cV)=>{
    return pV + cV.population;
},0);
