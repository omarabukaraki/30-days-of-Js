// 1-
const pargraf = document.querySelector('p');

// 2-
const pById = document.querySelector('#id');

// 3-
const allPargraf = document.querySelectorAll('p');

// 4-
allPargraf.forEach((ele)=>{
    console.log(ele.textContent);
});

// 5-
allPargraf[3].textContent = 'Fourth Paragraph';

// 6-
allPargraf.forEach((ele,index)=>{
 ele.id = `p${index}`;
 ele.setAttribute('class','pargraf');
});