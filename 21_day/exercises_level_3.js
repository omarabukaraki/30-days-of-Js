// 1-

const body = document.getElementsByClassName('wrapper');
body[0].style.cssText = 'display: flex;flex-direction: column;align-items: center;';


function generateColor(){
    let char ='abcdef0123456789';
    let color = [];
   for(let i= 0;i<3;i++){
      let c = Math.floor(Math.random() * char.length);
      for (let index = 0; index < 2; index++) {
        color.push(char[c]); 
      }
   }
   return `#${color.join('')}`;
}

const span = document.querySelector('span');
span.style.fontSize = '80px';
setInterval(function(){
span.style.color = generateColor();

},1000);

const h2 = document.querySelector('h2');
h2.style.cssText='font-weight: 100;text-decoration: underline;';

const time = document.querySelector('.time');
setInterval(()=>{
let date = new Date();
time.textContent = date.toString().slice(0,25);
time.style.background = generateColor();
},1000);
time.style.padding = '6px'


const ul = document.querySelector('ul');
ul.style.listStyle= 'none';
ul.style.width= '60%';

const li = document.querySelectorAll('li');
li.forEach((ele,index)=>{
    if(ele.textContent.includes('Done')){
       ele.style.background='lightgreen';        
    }else if(ele.textContent.includes('Ongoing')){
        ele.style.background='#FDD835';
    }else{
       ele.style.background='salmon';
    }
    ele.style.padding = '24px';
    ele.style.margin = '4px';
});

