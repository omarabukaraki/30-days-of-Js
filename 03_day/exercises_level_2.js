// -1
// let b = prompt('Enter base:');
// let h = prompt('Enter height:');

// let result =  0.5 * b * h;
// alert(`The area of the triangle is ${result}`);

// 2-
// let sideA = prompt('Enter side a:');
// let sideB = prompt('Enter side b:');
// let sideC = prompt('Enter side c:');

// let perimeter = +sideA + +sideB + +sideC;
// alert(`The perimeter of the triangle is ${perimeter}`);

// 3-
// let length = prompt('length');
// let width = prompt('width');
// let area = +length * +width;
// let perimeter = 2 * (+length + +width);
// alert(`The area of rectangle is ${area} and The perimeter of rectangle is ${perimeter}`);

// 4-
// let radius = prompt('radius');
// let area =( Math.PI * Math.pow(+radius,2)).toFixed(2);
// let c =  (2 * Math.PI * radius).toFixed(2);
// alert(`The area of a circle is ${area} and circumference of a circle is ${c}`);

// 5-
// let x =2;
// let y = 2*x -2;
// console.log(`slope = ${y}`);

// 6- 
// let pointOne = {x1:2, y1:2};
// let pointTwo = {x2:6,y2:10};
// let m = (pointTwo.y2 - pointOne.y1)/(pointTwo.x2 - pointOne.x1);
// console.log(`slope = ${m}`);

// 7- 
// console.log(y===m);

// 8-
// let x = -3;// y = 0
// let x = 3;// y = 36
// let x = 5;// y = 64
// let x = -9;// y = 36

// let y = (Math.pow(x,2)+6*x+9);
// console.log(y);

// 9-
// let hours = prompt('Enter hours: ');
// let ratePerHour =prompt('Enter rate per hour: ');
// let result = hours*ratePerHour;
// alert(`Your weekly earning is ${result}`);

// 10-
// let userName = prompt('enter your name: ');
// alert(userName.length <=7 ? 'your name is short' : 'your name is long')

// 11-
// let firstName = 'Asabeneh';
// let lastName = 'Yetayeh';
// console.log(firstName.length > lastName.length ?  `Your first name, ${firstName} is longer than your family name, ${lastName}` : `Your family name, ${lastName} is longer than your first name, ${firstName}`);

// 12-
// let myAge = 250;
// let yourAge = 25;
// console.log( myAge > yourAge ? `I am ${myAge-yourAge} years older than you.` :`you are ${yourAge-myAge} years older than me.`  )

// 13-
// let userYearBorn =prompt('Enter birth year: ');
// let dateNow = new Date();
// let ageCalculated = dateNow.getFullYear() - +userYearBorn ;
// let userResult = ( ageCalculated) >= 18 ? `You are ${ageCalculated}. You are old enough to drive.` :`You are ${ageCalculated}. You will be allowed to drive after ${18-ageCalculated} years.`;
// alert(userResult);

// 14-
// let numberOfYears = prompt('Enter number of years you live: ');
// let currentDate = new Date();
// let nowDate = new Date();
// datetest.setFullYear(nowDate.getFullYear() - numberOfYears);
// alert(`You lived ${(nowDate - currentDate)/1000} seconds.`);

// 15-
// let date = new Date();
// let formatOne = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,0)}-${String(date.getDay()+2).padStart(2,0)} ${String(date.getHours()).padStart(2,0)}:${String(date.getMinutes()).padStart(2,0)}`;
// let formatTwo = `${String(date.getDay()+2).padStart(2,0)}-${String(date.getMonth()+1).padStart(2,0)}-${date.getFullYear()} ${String(date.getHours()).padStart(2,0)}:${String(date.getMinutes()).padStart(2,0)}`;
// let formatThree = `${String(date.getDay()+2).padStart(2,0)}/${String(date.getMonth()+1).padStart(2,0)}/${date.getFullYear()} ${String(date.getHours()).padStart(2,0)}:${String(date.getMinutes()).padStart(2,0)}`;

// console.log(formatOne);
// console.log(formatTwo);
// console.log(formatThree);




