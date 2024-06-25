import { countries } from '../countries.js';


const h3Head = document.querySelector('.headSection h3');
h3Head.textContent = `Total number of countries: ${countries.length}`;

const pHead = document.querySelector('.headSection p');

const resultSection = document.querySelector('.resultSection');
const countriesDiv = document.querySelector('.img');

let buttons = document.querySelectorAll('button');
buttons[0].textContent = 'Starting word'.toUpperCase();
buttons[1].textContent = 'Search with any word'.toUpperCase();

const inputFelid = document.querySelector('.search input');


//start btn to know the method to search
let isStartingWord = true;
buttons[0].onclick = function () {
        isStartingWord = true;
        inputFelid.value = '';
        buttons[0].style.cssText = 'background-color: #581cb9;';
        buttons[1].style.cssText = 'background-color: #895be6;';
        buttons[2].style.cssText = 'background-color: #895be6;';


};
buttons[1].onclick = function () {
        isStartingWord = false;
        inputFelid.value = '';
        buttons[1].style.cssText = 'background-color: #581cb9;';
        buttons[0].style.cssText = 'background-color: #895be6;';
        buttons[2].style.cssText = 'background-color: #895be6;';

};
//end btn to know the method to search


//start search from countries
inputFelid.addEventListener('keydown', (e) => {
        buttons[2].style.cssText = 'background-color: #895be6;';
        if (isStartingWord === true) {
                buttons[0].style.cssText = 'background-color: #581cb9;';
                if (e.key === 'Backspace') {
                        searchByStartingWord((inputFelid.value.slice(0, inputFelid.value.length - 1)).toLowerCase());
                } else {
                        searchByStartingWord((inputFelid.value + e.key).toLowerCase());
                }
        } else {
                if (e.key === 'Backspace') {
                        searchWithAnyWord((inputFelid.value.slice(0, inputFelid.value.length - 1)).toLowerCase());
                } else {
                        searchWithAnyWord((inputFelid.value + e.key).toLowerCase());
                }
        }
});
//end search from countries

// start search by starting word function
function searchByStartingWord(searchValue) {
        if (searchValue !== undefined) {
                resultSection.textContent = '';
                let length = 0;
                countries.forEach(country => {
                        if (country.toLowerCase().startsWith(searchValue)) {
                                length++;
                                let copyCountriesDiv = countriesDiv.cloneNode(true);
                                copyCountriesDiv.textContent = country;
                                resultSection.append(copyCountriesDiv);
                        }
                });
                if (searchValue !== '') {
                        pHead.textContent = `Countries start with ${searchValue.toUpperCase()} are ${length}.`;
                } else {
                        pHead.textContent = '';
                }
        } else {
                resultSection.textContent = '';
                countries.forEach(country => {
                        let copyCountriesDiv = countriesDiv.cloneNode(true);
                        copyCountriesDiv.textContent = country;
                        resultSection.append(copyCountriesDiv);
                });
                pHead.textContent = '';
        }
}
// end search by starting word function

// start search with any word function
function searchWithAnyWord(searchValue) {
        if (searchValue !== undefined) {
                resultSection.textContent = '';
                countries.forEach(country => {
                        if (country.toLowerCase().includes(searchValue)) {
                                let copyCountriesDiv = countriesDiv.cloneNode(true);
                                copyCountriesDiv.textContent = country;
                                resultSection.append(copyCountriesDiv);
                        }
                });
        } else {
                resultSection.textContent = '';
                countries.forEach(country => {
                        let copyCountriesDiv = countriesDiv.cloneNode(true);
                        copyCountriesDiv.textContent = country;
                        resultSection.append(copyCountriesDiv);
                });
        }
}
// end search with any word function

searchByStartingWord();

//start order countries function
function orderCountries(isOrder) {
        if (isOrder === true) {
                resultSection.textContent = '';
                countries.reverse().forEach(country => {
                        let copyCountriesDiv = countriesDiv.cloneNode(true);
                        copyCountriesDiv.textContent = country;
                        resultSection.append(copyCountriesDiv);
                });
        } else {
                searchByStartingWord();
        }
}
//end order countries function

//start using this btn to order from a to z and from z to a
let isClicked = false;
buttons[2].onclick = function () {
        if (isClicked === true) {
                orderCountries(false);
                isClicked = !isClicked;

        } else {
                orderCountries(true);
                isClicked = !isClicked;
        }
        isClicked = !isClicked;
        buttons[0].style.cssText = 'background-color: #895be6;';
        buttons[1].style.cssText = 'background-color: #895be6;';
        buttons[2].style.cssText = 'background-color: #581cb9;';

};
//end using this btn to order from a to z and from z to a






