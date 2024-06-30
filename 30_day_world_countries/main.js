import { newCountriesData } from '../new_countries_data.js';

const flagCart = document.querySelector('.flagCart');
const displayData = document.querySelector('.displayData');
const searchField = document.querySelector('.searchAndFilter input');
const buttons = document.querySelectorAll('.buttons button');
const i = document.querySelectorAll('.buttons button i');
const ICreatedBy = document.querySelector('.createdBy i');
const popBtn = document.querySelector('.popBtn');
const langBtn = document.querySelector('.langBtn');
const selectDescription = document.querySelector('.selectDiv p');
const resultDiv = document.querySelector('.resultDiv');
const container = document.querySelector('.container');


let searchText = '';



let spokenLanguage = {};

newCountriesData.forEach(country => {
        country.languages.forEach(language => {
                if (spokenLanguage[language]) {
                        spokenLanguage[language]++;
                } else {
                        spokenLanguage[language] = 1;
                }
        })

});
let mostSpokenLanguage = Object.entries(spokenLanguage).sort((a, b) => b[1] - a[1]).slice(0, 10);

let countriesPopulation = newCountriesData.map((country) => {
        return { name: country.name, population: country.population };
});
let tenCountriesPopulation = countriesPopulation.sort((a, b) => b.population - a.population).slice(0, 10);


let totalEntirePopulation = countriesPopulation.reduce((pV, cV) => {
        return pV + cV.population;
}, 0);



let isSortedByName = true;
buttons[0].addEventListener('click', () => {
        if (isSortedByName !== true) {
                newCountriesData.sort((a, b) => {
                        if (a.name < b.name) return 1;
                        if (a.name > b.name) return -1;
                        return 0;
                });
                isSortedByName = !isSortedByName;
                i[0].className = 'fas fa-arrow-up';
                i[1].className = '';
                i[2].className = '';

        } else {
                newCountriesData.sort((a, b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                });
                isSortedByName = !isSortedByName;
                i[0].className = 'fas fa-arrow-down';
                i[1].className = '';
                i[2].className = '';
        }
        createFlagsBySearch(newCountriesData, searchText);
});

let isSortedByCapital = true;
buttons[1].addEventListener('click', () => {
        if (isSortedByCapital !== true) {
                newCountriesData.sort((a, b) => {
                        if (a.capital < b.capital) return -1;
                        if (a.capital > b.capital) return 1;
                        return 0;
                });
                isSortedByCapital = !isSortedByCapital;
                i[0].className = '';
                i[1].className = 'fas fa-arrow-up';
                i[2].className = '';


        } else {
                newCountriesData.sort((a, b) => {
                        if (a.capital < b.capital) return 1;
                        if (a.capital > b.capital) return -1;
                        return 0;
                });
                isSortedByCapital = !isSortedByCapital;
                i[0].className = '';
                i[1].className = 'fas fa-arrow-down';
                i[2].className = '';
        }
        createFlagsBySearch(newCountriesData, searchText);
});

let isSortedByPopulation = true;
buttons[2].addEventListener('click', () => {
        if (isSortedByPopulation !== true) {
                newCountriesData.sort((a, b) => b.population - a.population);
                isSortedByPopulation = !isSortedByPopulation;
                i[0].className = '';
                i[1].className = '';
                i[2].className = 'fas fa-arrow-up';
        } else {
                newCountriesData.sort((a, b) => a.population - b.population);
                isSortedByPopulation = !isSortedByPopulation;
                i[0].className = '';
                i[1].className = '';
                i[2].className = 'fas fa-arrow-down';
        }
        createFlagsBySearch(newCountriesData, searchText);
});

function createFlagsBySearch(countriesData, searchValue) {
        displayData.textContent = '';
        resultDiv.innerHTML = '';

        let dataSet = new Set();
        if (searchValue !== undefined) {
                countriesData.forEach((ele) => {
                        if (ele.name.toLowerCase().includes(searchValue)) {
                                dataSet.add(ele.name);
                        } else if (ele.capital !== undefined && ele.capital.toLowerCase().includes(searchValue)) {
                                dataSet.add(ele.name);
                        } else {
                                ele.languages.forEach((lang) => {
                                        if (lang.toLowerCase().includes(searchValue)) {
                                                dataSet.add(ele.name);
                                        }
                                });
                        }
                });
        }



        resultDiv.innerHTML = '';
        let copyContainer = container.cloneNode(true);
        copyContainer.firstElementChild.textContent = 'World';
        copyContainer.lastElementChild.textContent = totalEntirePopulation.toLocaleString();
        copyContainer.children[1].children[0].style.cssText = `width:${100}%`;
        resultDiv.append(copyContainer);

        countriesData.forEach((countries) => {
                if (dataSet.has(countries.name) || searchValue === '') {
                        let flagCartCopy = flagCart.cloneNode(true);
                        flagCartCopy.children[0].style.cssText = `background-image: url(${countries.flag})`;
                        flagCartCopy.children[1].textContent = countries.name;
                        flagCartCopy.children[2].textContent = `Capital: ${countries.capital}`;
                        flagCartCopy.children[3].textContent = `Language: ${countries.languages.join(', ')}`;
                        flagCartCopy.children[4].textContent = `Population: ${countries.population.toLocaleString()}`;
                        displayData.append(flagCartCopy);


                        let copyContainer = container.cloneNode(true);
                        copyContainer.firstElementChild.textContent = countries.name;
                        copyContainer.lastElementChild.textContent = countries.population.toLocaleString();
                        copyContainer.children[1].children[0].style.cssText = `width:${calculatePercentage(countries)}%`;
                        resultDiv.append(copyContainer);
                }
        });
}

createFlagsBySearch(newCountriesData, searchText);

searchField.addEventListener('input', () => {
        searchText = searchField.value.toLowerCase();
        createFlagsBySearch(newCountriesData, searchText);
});



ICreatedBy.onclick = () => {
        window.scrollTo(
                { top: 0, left: 0, behavior: "smooth" }
        );
};






function calculatePercentage(country) {
        let thDifference = totalEntirePopulation - country.population;
        let resultOfDivision = country.population / thDifference;
        let result = resultOfDivision * 100;
        return result;
}

popBtn.addEventListener('click', () => {
        // displayResult('population');
});

langBtn.addEventListener('click', () => {
        // displayResult('language');
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







