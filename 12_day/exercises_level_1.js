
// 1-
// let txt = '‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’';
// let reg  = new RegExp(/[0-9]+/g);
// let sum = 0;
//  txt.match(reg).map(function(inc){
//     sum += Number(inc);
// });
// console.log(sum);

// 2-
// let txt = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';
// let reg = new RegExp(/-[0-9]+|[0-9]+/g);
// let numbers = txt.match(reg);
// console.log(numbers[numbers.length-1] - numbers[0]);

// 3-
// function is_valid_variable(variable){
//     let reg = /^[a-zA-Z$][a-zA-Z0-9$]*$/;
//     return reg.test(variable);
// }

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True


