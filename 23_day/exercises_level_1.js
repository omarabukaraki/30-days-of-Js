


// 1-
// const generateDiv = document.querySelector('.generateDiv');
// generateDiv.style.cssText = 'margin-top: 50px; text-align: center;display:flex;justify-content: center;';

// const contanier = document.querySelector('.contanier');
// contanier.style.cssText = 'margin:25px;justify-content: center;display: grid;grid-template-columns: repeat(9,6.3rem);';

// let label = document.querySelector('.input h3');
// label.style.cssText = 'height:40%;margin:0;text-align: start;color:red;font-size:12px';


// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     if (num === 2) {
//         return true;
//     }
//     if (num % 2 === 0) {
//         return false;
//     }
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function generateNumber(num){
//     let element;
// for (let index = 0; index <= num; index++) {
//     element = document.createElement('h1');
//     element.textContent = index;
//     contanier.append(element);
//     element.style.cssText = 'margin:2px;width:6rem;height:4rem;text-align:center;flex-direction: column;justify-content: center;display: flex;';
//     if(isPrime(index)){
//         element.style.background='red';
//     }else{
//         if(index%2===0){
//             element.style.background='mediumseagreen';
//         }else{
//             element.style.background='yellow';
//         }
//     }
//  }
// }

// let inputField = document.querySelector('.numberInput');
// inputField.style.cssText = 'width: 100%;height: 52%;';

// let btn = document.querySelector('button');
// btn.style.cssText = 'margin-left:10px;height: 60px;width:180px;border: none;margin-left: 10px;background: palegreen;width: 150px;';
// btn.addEventListener('click',()=>{
//     if(parseInt(inputField.value)){
//         contanier.innerHTML='';
//         generateNumber(parseInt(inputField.value));
//         label.textContent = '';

//     }else{
//         label.textContent = 'Input value must be number';
//     }
// });



// 2-
// let keyBoardPresse = document.querySelector('.keyBoardPresse');
// let key = document.querySelector('.key');
// keyBoardPresse.style.cssText = 'font-size:18px;font-weight: bold;flex-direction: row;align-items: center;display: flex;width: 50%;height: 50px;box-shadow: gray 0px 0px 5px;text-align: center;justify-content: center;';
// keyBoardPresse.textContent = 'presse any keyboard key';

// key.style.cssText = 'margin-top:20px;font-size:18px;font-weight: bold;flex-direction: row;align-items: center;display: none;width: 15%;height: 50px;box-shadow: gray 0px 0px 5px;text-align: center;justify-content: center;color:green';
// document.body.style.cssText = 'flex-direction: column;display: flex;justify-content:center;height: 100vh;align-items: center;'

// let span = document.createElement('span');
// span.style.cssText = 'color:green;margin-left:10px';

// document.body.addEventListener('keypress',(k)=>{
//     span.textContent = k.key;
// keyBoardPresse.textContent =  `You Pressed`;
// keyBoardPresse.append(span);
// key.style.display ='flex';
// key.textContent = k.keyCode;
// });




