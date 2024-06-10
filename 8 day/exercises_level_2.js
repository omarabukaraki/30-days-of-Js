// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// };

// 1-  
//   function getUsersHaveManySkills(usersData){
//       let usersKey = Object.keys(usersData);
//       let newPerson = [];
//       for (let index = 0; index < usersKey.length; index++) {
//          if(usersData[usersKey[index]].skills.length > 1){
//             newPerson.push(usersKey[index]);
//          }
//       }
//       return newPerson;
//   }
//   console.log(getUsersHaveManySkills(users));


// 2-
// 2.1-
// function countLoggedInUser(usersData) {
//     let usersKey = Object.keys(usersData);
//     let counter = 0;
//     for (let index = 0; index < usersKey.length; index++) {
//         if (usersData[usersKey[index]].isLoggedIn === true) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countLoggedInUser(users));

// 2.2-
// function countUserPoints(usersData) {
//     let usersKey = Object.keys(usersData);
//     let counter = 0;
//     for (let index = 0; index < usersKey.length; index++) {
//         if (usersData[usersKey[index]].points >= 50) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countUserPoints(users));


// 3-


// 4-
// const usersCopy = Object.assign({},users);
// usersCopy.omar = {};
// console.log(usersCopy);


// 5-
// const usersKeys = Object.keys(users);
// console.log(usersKeys);

// 6-
// const usersValues = Object.values(users);
// console.log(usersValues);

// 7-

