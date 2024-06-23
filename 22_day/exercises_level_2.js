import{countries_data} from '../countries_data.js';
// 1-
const countries = document.querySelector('.countriesContanier');
countries.style.cssText = 'margin:25px;justify-content: center;display: grid;grid-template-columns: repeat(6,6.3rem);';
countries_data.forEach((e)=>{
    let h1 = document.createElement('h1');
    h1.textContent = e['name'].toUpperCase();
    countries.append(h1);
    h1.style.cssText = 'font-weight:100;margin:2px;width:6rem;height:6rem;text-align:center;flex-direction: column;justify-content: center;display: flex;';
    h1.style.boxShadow = '0px 0px 2px #e0e0e0';
    h1.style.fontSize= '10px';
});

