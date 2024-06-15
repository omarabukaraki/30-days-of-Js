// 1-
// class Animal {
//     constructor() {
//         this.name = '';
//         this.age = 0;
//         this.color = '';
//         this.legs = 0;
//     }
//     setName(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
//     setAge(age){
//         this.age = age;
//     }
//     getAge(){
//         return this.age;
//     }
//     setColor(color){
//         this.color = color;
//     }
//     getColor(){
//         return this.color;
//     }
//     setLegs(legs){
//        if(legs<3){
//          console.log('this is imposible')
//        }else{
//         this.legs = legs;
//        }
//     }
//     getData(){
//         return this.name + ' ' + this.age + ' '+ this.legs+' ' + this.color;
//     }
// }

// class Cat extends Animal{
//     getData(){
//         return 'CAT DATA';
//     }
// }

// const c1 = new Cat();
// console.log(c1.getData())