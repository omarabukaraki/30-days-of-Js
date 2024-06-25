import { countries_data } from '../countries_data.js';



let spokenLanguage = {};

countries_data.forEach(country => {
    country.languages.forEach(language => {
        if (spokenLanguage[language]) {
            spokenLanguage[language]++;
        } else {
            spokenLanguage[language] = 1;
        }
    })
});
let mostSpokenLanguage = Object.entries(spokenLanguage).sort((a, b) => b[1] - a[1]).slice(0, 10);


let countriesPopulation = countries_data.map((country) => {
    return { name: country.name, population: country.population };
});
let tenCountriesPopulation = countriesPopulation.sort((a, b) => b.population - a.population).slice(0, 10);


let totalEntirePopulation = countriesPopulation.reduce((pV, cV) => {
    return pV + cV.population;
}, 0);



//start body
document.querySelector('body').style.margin = '0px';
//end body


//start head 
const headDiv = document.querySelector('.head');
headDiv.style.cssText = 'background:#f0f0f2;padding:30px 0px;display:flex;flex-direction:column;align-items: center;';

const headTitle = document.querySelector('.head h3');
headTitle.style.cssText = 'font-size:60px;margin:0;font-weight: 500;color:#f2a93b';

const headDescription = document.querySelector('.head p');
headDescription.style.cssText = 'font-size:26px;color:#5e5e5f';
//end head 

// start selectDiv 
const selectDiv = document.querySelector('.selectDiv');
selectDiv.style.cssText = 'display: flex;flex-direction: column;align-items: center;padding:30px;box-shadow:0px 0px 5px #D4D4D4';

const popBtn = document.querySelector('.popBtn');
popBtn.textContent = 'Population'.toUpperCase();
const langBtn = document.querySelector('.langBtn');
langBtn.textContent = 'Languages'.toUpperCase();

const btnStyle = 'width: 200px;height: 50px;border: none;background: #f2a93b;font-size: 20px;color: #5e5e5f;border-radius: 4px';
popBtn.style.cssText = btnStyle;
langBtn.style.cssText = btnStyle;

const selectDescription = document.querySelector('.selectDiv p');
selectDescription.style.cssText = 'color:#5e5e5f;font-size:24px;margin:20px 0px 0px 0px';

// end selectDiv 



// start calculate percentage function
function calculatePercentage(country) {
    let thDifference = totalEntirePopulation - country.population;
    let resultOfDivision = country.population / thDifference;
    let result = resultOfDivision * 100;
    return result;
}
// end calculate percentage function

// start result section
const resultDiv = document.querySelector('.resultDiv');
resultDiv.style.cssText = 'background-color: #f0f0f2;overflow: auto;';

const container = document.querySelector('.container');
container.style.cssText = 'width: 100%;display: flex;align-items: center;margin: 10px 0px;';

const txt = document.querySelector('.txt');
txt.style.cssText = 'width: 25%;text-align: center;font-size: 22px;color: #5e5e5f;';

const progressSpace = document.querySelector('.progressSpace');
progressSpace.style.cssText = 'width: 50%;';

const number = document.querySelector('.number');
number.style.cssText = 'width: 25%;padding-left: 16px;font-size: 22px;color: #5e5e5f;';


popBtn.addEventListener('click', () => {
    displayResult('population');
});

langBtn.addEventListener('click', () => {
    displayResult('language');
});


function displayResult(type) {
    if (type === 'population') {
        selectDescription.textContent = '10 Most population countries in the world';

        resultDiv.innerHTML = '';
        let copyContainer = container.cloneNode(true);
        copyContainer.firstElementChild.textContent = 'World';
        copyContainer.lastElementChild.textContent = totalEntirePopulation.toLocaleString();
        copyContainer.children[1].children[0].style.cssText = `width:${100}%`;
        resultDiv.append(copyContainer);


        tenCountriesPopulation.forEach((tCP) => {
            let copyContainer = container.cloneNode(true);
            copyContainer.firstElementChild.textContent = tCP.name;
            copyContainer.lastElementChild.textContent = tCP.population.toLocaleString();
            copyContainer.children[1].children[0].style.cssText = `width:${calculatePercentage(tCP)}%`;
            resultDiv.append(copyContainer);
        });
    }
    else {
        selectDescription.textContent = '10 Most Spoken languages in the world';

        resultDiv.innerHTML = '';
        mostSpokenLanguage.forEach((mSL) => {
            let copyContainer = container.cloneNode(true);
            copyContainer.firstElementChild.textContent = mSL[0];
            copyContainer.lastElementChild.textContent = mSL[1];
            copyContainer.children[1].children[0].style.cssText = `width:${mSL[1]}%`;
            resultDiv.append(copyContainer);
        });
    }
}

displayResult('population');
// end result section







