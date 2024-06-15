// // 1-
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
// const a1 = new Animal();
// a1.setAge(10);
// a1.setColor('red');
// a1.setName('omar');
// a1.setLegs(4);
// console.log(a1.getData())

// // 2-
// class Dog extends Animal{
// }
// class Cat extends Animal{
//     getData(){
//         return 'CAT';
//     }
// }

// const d1 = new Dog();
// d1.setAge(10);
// d1.setColor('red');
// d1.setName('omar');
// d1.setLegs(4);
