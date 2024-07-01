
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
const country = document.querySelector('.country');
const scoreNumber = document.querySelector('.scoreNumber');
const buttons = document.querySelector('.buttons');
let addBtn = document.querySelectorAll('.addBtn');
let removeBtn = document.querySelectorAll('.removeBtn');
let deleteBtn = document.querySelectorAll('.deleteBtn');
const fieldsMessage = document.querySelector('.fieldsMessage');


// //start style the element
document.body.style.cssText = 'display: flex;justify-content: center;';
content.style.cssText = 'width: 80%;text-align: center;';
title.style.cssText = 'font-weight: 500;font-size: 26px;margin-top: 50px;';
fromPlayer.style.cssText = 'margin: 40px 0px;';
fromPlayerInput.forEach(function (inputFeild) {
    inputFeild.style.cssText = 'width: 16%;height: 40px;padding-left: 10px;border: 1px solid #e5c9c5;';
});
fromPlayerButton.style.cssText = 'background-color: #e5c9c5;width: 16%;height: 44px;margin: 0;border: none;color: white;';

playersScore.style.cssText = 'width: 100%;justify-content: center;display: flex;flex-direction: column;align-items: center;';
score.style.cssText = 'justify-content: space-between;align-items: center;flex-direction: row;width: 85%;margin: 10px 0px;background-color: #e5c9c5;display: flex;';
nameDateDate.style.cssText = ' color: gray;font-size:12px;margin:8px';
nameDateP.style.cssText = 'font-size: 16px;margin:8px;';
nameDate.style.cssText = 'text-align: start;margin:8px 16px;';
country.style.cssText = ' font-size: 16px;';
scoreNumber.style.cssText = ' font-size: 16px;';
buttons.style.cssText = 'width: 25%;height: 100%;display: flex;align-items: center;justify-content: space-evenly; ';

const btnStyle = 'border-radius: 100px;height: 50px;width: 50px;background-color: aliceblue;display: flex; align-items: center;justify-content: center;';
deleteBtn.forEach((deleBtn) => {
    deleBtn.style.cssText = `${btnStyle}color:red`;
});
addBtn.forEach((addB) => {
    addB.style.cssText = btnStyle;
});
removeBtn.forEach((remBtn) => {
    remBtn.style.cssText = btnStyle;
});
fieldsMessage.style.cssText = 'color: red;display: none;';
// //end style the element





let users = JSON.parse(localStorage.getItem('users')) || [];
let dateNow = new Date();
let dateWithFormat = `${dateNow.getDate()}/${dateNow.getMonth() + 1}/${dateNow.getFullYear()}`;



fromPlayerButton.onclick = function (event) {
    event.preventDefault();

    let inputL = 0;
    fromPlayerInput.forEach((userInput) => {
        if (userInput.value !== '') {
            inputL++;
        } else {
            userInput.style.border = '1px solid red';
        }
    });

    let isNumber = isNaN(fromPlayerInput[3].value) !== true;
    if (fromPlayerInput.length === inputL && isNumber) {
        let userData = {
            firstName: fromPlayerInput[0].value,
            lastName: fromPlayerInput[1].value,
            country: fromPlayerInput[2].value,
            playersScore: fromPlayerInput[3].value,
            date: dateWithFormat,
            userIndex: users.length,
        };

        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        fromPlayerInput.forEach(input => input.value = '');
        getAndCreate();
        location.reload();
    }
    else {
        fieldsMessage.style.display = 'block';
    }
    if (isNumber === false) {
        fromPlayerInput[3].style.border = '1px solid red';
    }


};



function checkForm(){
    let isNumber = isNaN(fromPlayerInput[3].value) !== true;
    let validInput =0;
    fromPlayerInput.forEach((input)=>{
        if(input.value !== ''){
            validInput++;
        }
    });
    if(fromPlayerInput.length === validInput && isNumber){
        fromPlayerButton.style.cssText = 'background-color: rgb(241 162 150);width: 16%;height: 44px;margin: 0;border: none;color: white;';
    }else{
        fromPlayerButton.style.cssText = 'background-color: #e5c9c5;width: 16%;height: 44px;margin: 0;border: none;color: white;';
    }
}


fromPlayerInput.forEach((input)=>{
    input.addEventListener('input',()=>{
        checkForm()
    })
});

function getAndCreate() {
    playersScore.innerHTML = '';

    let usersDataFromLocal = JSON.parse(localStorage.getItem('users')) || [];
    usersDataFromLocal.sort((a, b) => b.playersScore - a.playersScore).forEach(function (user, index) {
        let copyScore = score.cloneNode(true);
        playersScore.appendChild(copyScore);

        let scoreAll = document.querySelectorAll('.score');
        scoreAll[index].children[0].children[0].innerHTML = user.firstName + " " + user.lastName;
        scoreAll[index].children[0].children[1].innerHTML = user.date;
        scoreAll[index].children[1].textContent = user.country;
        scoreAll[index].children[2].textContent = user.playersScore;
    });
    deleteBtn = document.querySelectorAll('.deleteBtn');
    addBtn = document.querySelectorAll('.addBtn');
    removeBtn = document.querySelectorAll('.removeBtn');
}

getAndCreate();



deleteBtn.forEach((b, index) => {
    b.onclick = function () {
        users = JSON.parse(localStorage.getItem('users')) || [];
        users.sort((a, b) => b.playersScore - a.playersScore);
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        location.reload();
    }
    b.addEventListener('mouseover', () => {
        b.style.cssText = 'cursor: pointer;color:red;border-radius: 100px;height: 50px;width: 50px;background-color: #def4b3;display: flex; align-items: center;justify-content: center;';

    });
    b.addEventListener('mouseout', () => {
        b.style.cssText = `${btnStyle}color:red`;
    });
});

addBtn.forEach((b, index) => {
    b.onclick = function () {
        users = JSON.parse(localStorage.getItem('users')) || [];
        users.sort((a, b) => b.playersScore - a.playersScore);
        users[index].playersScore = (+users[index].playersScore) + 5;
        localStorage.setItem('users', JSON.stringify(users));
        location.reload();
    }
    b.addEventListener('mouseover', () => {
        b.style.cssText = 'cursor: pointer;border-radius: 100px;height: 50px;width: 50px;background-color: #def4b3;display: flex; align-items: center;justify-content: center;';

    });
    b.addEventListener('mouseout', () => {
        b.style.cssText = btnStyle;
    });
});

removeBtn.forEach((b, index) => {
    b.addEventListener('click', () => {
        users = JSON.parse(localStorage.getItem('users')) || [];
        users.sort((a, b) => b.playersScore - a.playersScore);
        if (users[index].playersScore >= 5) {
            users[index].playersScore = (+users[index].playersScore) - 5;
            localStorage.setItem('users', JSON.stringify(users));
            location.reload();
        }
    });
    b.addEventListener('mouseover', () => {
        b.style.cssText = 'cursor: pointer;border-radius: 100px;height: 50px;width: 50px;background-color: #def4b3;display: flex; align-items: center;justify-content: center;';

    });
    b.addEventListener('mouseout', () => {
        b.style.cssText = btnStyle;
    });

});



