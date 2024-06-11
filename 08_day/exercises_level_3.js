// 1-
// const personAccount = {
//     firstName: 'Jon',
//     lastName:'Rab',
//     incomes: [1000,800,700,500],
//     expenses:[800,500,600,500],
//     totalIncome: function(){
//         let total = 0;
//         for (let index = 0; index < this.incomes.length; index++) {
//             total += this.incomes[index];
//             }
//             return total;
//     } ,
//     totalExpense:function(){
//         let total = 0;
//         for (let index = 0; index < this.expenses.length; index++) {
//             total += this.expenses[index];
//             }
//             return total;
//     },
//     accountInfo: ()=> `Name: ${this.firstName} ${this.lastName} Total Incomes: ${this.totalIncome()} Total Expenses: ${this.totalExpense()}`,
//     addIncome:function(income){
//         this.incomes.push(income);
//     },
//     addExpense:function(expense){
//         this.expenses.push(expense);
//     },
//     accountBalance:function(){
//         return this.totalIncome() - this.totalExpense();
//     },
// };


// const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt:'08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt:'08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt:'08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt:'08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt:'08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
//     ];

// 2-
// 2.a-

// let userToSignUp = {
//     _id: 'q2ds2w',
//     username: 'omar',
//     email: 'abukarakiomar@gmail.com',
//     password: 'omar12',
//     createdAt:'08/01/2024 10:00 AM',
//     isLoggedIn: false
// };
// function signUp(userData){    
//     let counter = 0;
//     for (let index = 0; index < users.length; index++) {
//      if(userData.email !== users[index].email){
//         counter++;
//       }        
//     }
//     if(counter === users.length){
//          users.push(userData);
//          return 'Account created successfully.';
//     }else{
//         return 'The user that he has already an account';

//     }
// }
// console.log(signUp(user));


// 2.b-
// let userToSginIn =  {
//     _id: 'ghderc',
//     username: 'Thomas',
//     email: 'thomas@thomas.com',
//     password: '123333',
//     createdAt:'08/01/2020 10:00 AM',
//     isLoggedIn: false
// };

// function signIn(userData){
//     let counter = 0;
//     let i = 0;
//         for (let index = 0; index < users.length; index++) {
//          if(userData.email === users[index].email){
//             counter++;
//             i= index;
//           }   
//         }  
//         if(counter !==0){
//             users[i].isLoggedIn = true;
//             return 'login success';
//         }else{
//             return 'you need to create an account first';
//         }
// }
// console.log(signIn(userToSginIn));



// const products = [
//     {
//       _id: 'eedfcf',
//       name: 'mobile phone',
//       description: 'Huawei Honor',
//       price: 200,
//       ratings: [
//         { userId: 'fg12cy', rate: 5 },
//         { userId: 'zwf8md', rate: 4.5 }
//       ],
//       likes: []
//     },
//     {
//       _id: 'aegfal',
//       name: 'Laptop',
//       description: 'MacPro: System Darwin',
//       price: 2500,
//       ratings: [],
//       likes: ['fg12cy']
//     },
//     {
//       _id: 'hedfcg',
//       name: 'TV',
//       description: 'Smart TV:Procaster',
//       price: 400,
//       ratings: [{ userId: 'fg12cy', rate: 5 }],
//       likes: ['fg12cy']
//     }
//   ];


// 3-
// 3.a-
// function rateProduct(userIdR, rateR,productIndex){
//       products[productIndex].ratings.push({userId:userIdR,rate:rateR}); 
// }
// rateProduct('aegfal',4,1);

// 3.b-
// function rateProduct(productIndex){
//     let sum = 0;
//     for (let index = 0; index < products[productIndex].ratings.length; index++) {
//          sum +=products[productIndex].ratings[index].rate;
//     }
//     return sum;
// }
// console.log(rateProduct(0));



// 4-
// function likeProducts(productIndex, userData) {
//     const productId = userData._id;
//     const productLikes = products[productIndex].likes;
//     let indexToRemove = -1;
//     for (let i = 0; i < productLikes.length; i++) {
//         if (productLikes[i] === productId) {
//             indexToRemove = i;
//             break;
//         }
//     }
//     if (indexToRemove !== -1) {
//         productLikes.splice(indexToRemove, 1);
//     } else {
//         productLikes.push(productId);
//     }
// }

// let userOne = {
//     _id: 'fg12cy',
//     username: 'Asab',
//     email: 'asab@asab.com',
//     password: '123456',
//     createdAt:'08/01/2020 9:30 AM',
//     isLoggedIn: true
// };
// let userTwo = {
//     _id: 'sdw3dw',
//     username: 'omars',
//     email: 'asab@asab.com',
//     password: '123456',
//     createdAt:'08/01/2020 9:30 AM',
//     isLoggedIn: true
// };

// likeProducts(1, userOne);
// likeProducts(1, userOne);
// likeProducts(1, userTwo);




