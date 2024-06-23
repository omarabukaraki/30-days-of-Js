
const contanier = document.querySelector('.contanier');
contanier.style.cssText = 'margin:25px;justify-content: center;display: grid;grid-template-columns: repeat(6,6.3rem);';


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let element;
for (let index = 0; index <= 101; index++) {
    element = document.createElement('h1');
    element.textContent = index;
    contanier.append(element);
    element.style.cssText = 'margin:2px;width:6rem;height:4rem;text-align:center;flex-direction: column;justify-content: center;display: flex;';
    if(isPrime(index)){
        element.style.background='red';
    }else{
        if(index%2===0){
            element.style.background='mediumseagreen';
        }else{
            element.style.background='yellow';
        }
    }
 }


