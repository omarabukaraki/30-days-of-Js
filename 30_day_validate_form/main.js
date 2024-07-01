


const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('Password');
const telephone = document.getElementById('telephone');
const bio = document.getElementById('bio');

const firstNameH3 = document.querySelector('.firstName h3');
const lastNameH3 = document.querySelector('.lastName h3');
const emailH3 = document.querySelector('.email h3');
const passwordH3 = document.querySelector('.password h3');
const telephoneH3 = document.querySelector('.telephone h3');
const bioH3 = document.querySelector('.bio h3');

const btn = document.querySelector('button');
const h3 = document.querySelectorAll('h3');
h3.forEach((h)=>{
    h.style.display = 'none';
});

let usesData;

  btn.onclick = (e)=>{
    e.preventDefault();
    if(validateFormData() === true){
        usesData = {
            fN:firstName.value,
            lN:lastName.value,
            email:email.value,
            password:password.value,
            telephone:telephone.value,
            bio:bio.value,
        };
        localStorage.setItem('userData',JSON.stringify(usesData));
        document.querySelectorAll('input').forEach((inputF)=>{
            inputF.value = '';
        });
    }
};


function validateFormData(){
    let index = 0;
    function checkFirstName(){
        if(firstName.value.match('^[a-zA-Z0-9]{3,16}$') === null){
            firstNameH3.style.display = 'block';
        }else{
            firstNameH3.style.display = 'none';
            index++;
        }
    }
    checkFirstName();
    
    function checkLastName(){
        if(lastName.value.match('^[a-zA-Z0-9]{3,16}$') === null){
            lastNameH3.style.display = 'block';
        }else{
            lastNameH3.style.display = 'none';
            index++;
        }
    }
    checkLastName();

    function checkEmail(){
        if(email.value.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$') === null){
            emailH3.style.display = 'block';
        }else{
            emailH3.style.display = 'none';
            index++;
        }
    }
    checkEmail();

    function checkPassword(){
        if(password.value.match('^[a-zA-Z0-9@_\-]{6,20}$') === null){
            passwordH3.style.display = 'block';
        }else{
            passwordH3.style.display = 'none';
            index++;
        }
    }
    checkPassword();
    
    function checkTelephone(){
        // telephone.value.match('^\d{3}-\d{3}-\d{4}$') === null
        if(false){
            telephoneH3.style.display = 'block';
        }else{
            telephoneH3.style.display = 'none';
            index++;
        }
    }
    checkTelephone();
    
    function checkBio(){
        if(bio.value.match('^[a-z_-]{8,50}$') === null){
            bioH3.style.display = 'block';
        }else{
            bioH3.style.display = 'none';
            index++;
        }
    }
    checkBio();
    return index === 6;
}

