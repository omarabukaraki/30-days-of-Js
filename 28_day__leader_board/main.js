
const content = document.querySelector('.content');
const title = document.querySelector('.title');
const fromPlayer = document.querySelector('.fromPlayer');
const fromPlayerInput = document.querySelectorAll('.fromPlayer input');
const fromPlayerButton = document.querySelector('.fromPlayer button')
const playersScore = document.querySelector('.playersScore');
const score = document.querySelector('.score');
const nameDate = document.querySelector('.nameDate');
const nameDateP = document.querySelector('.nameDate p');
const nameDateDate = document.querySelector('.nameDate .date');
const country =document.querySelector('.country');
const scoreNumber =document.querySelector('.scoreNumber');
const buttons = document.querySelector('.buttons');
const btn = document.querySelectorAll('.btn');


//start style the element
document.body.style.cssText ='display: flex;justify-content: center;';
content.style.cssText = 'width: 80%;text-align: center;';
title.style.cssText = 'font-weight: 500;font-size: 26px;margin-top: 50px;';
fromPlayer.style.cssText = 'margin: 40px 0px;';
fromPlayerInput.forEach(function(inputFeild){
    inputFeild.style.cssText = 'width: 16%;height: 40px;padding-left: 10px;border: 1px solid #e5c9c5;';});
fromPlayerButton.style.cssText = 'background-color: #e5c9c5;width: 16%;height: 44px;margin: 0;border: none;color: white;';
playersScore.style.cssText = 'width: 100%;justify-content: center;display: flex;flex-direction: column;align-items: center;';
score.style.cssText = 'justify-content: space-between;align-items: center;flex-direction: row;width: 85%;margin: 10px 0px;background-color: #e5c9c5;display: flex;';
nameDateDate.style.cssText = ' color: gray;font-size:12px;margin:8px';
nameDateP.style.cssText = 'font-size: 16px;margin:8px;';
nameDate.style.cssText = 'text-align: start;margin:8px 16px;';
country.style.cssText = ' font-size: 16px;';
scoreNumber.style.cssText = ' font-size: 16px;';
buttons.style.cssText = 'width: 25%;height: 100%;display: flex;align-items: center;justify-content: space-evenly; ';
btn.forEach((btnD)=>{
    btnD.style.cssText = 'border-radius: 100px;height: 50px;width: 50px;background-color: aliceblue;display: flex; align-items: center;justify-content: center;';
});
//end style the element






