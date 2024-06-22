// // 1-
// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// class Statistics{
//     constructor(age){
//         this.ages = age;
//     }
//     count(){
//         return this.ages.length;
//     }
//     sum(){
//         let sumAge = 0;
//        this.ages.forEach(function(age){
//         sumAge+= age;
//        });
//        return sumAge;
//     }
//     min(){
//         let min = this.ages[0];
//         ages.forEach(function(age){
//            if(age <= min){
//             min = age;
//            }
//         });
//        return min;
//     }

//     max(){
//         let max = this.ages[0];
//         ages.forEach(function(age){
//            if(age >= max){
//             max = age;
//            }
//         });
//        return max;
//     }
    
//     range(){
//         return this.max() - this.min();
//     }

//     mean(){
//         return Math.ceil(this.sum() / ages.length);
//     }

//     median(){
//         return Math.floor(this.sum() / ages.length);
//     }

//     mode(){
//         let m ={};
//         this.ages.forEach(function(age){
//           if(m[age]){
//             m[age]++;
//           }
//           else{
//             m[age] = 1;
//           }
//         });

//         let arr = Object.assign([],m);
//         let result = Object.entries(arr).sort((a,b)=>b[1]-a[1])[0];
//         return {'mode': result[0], 'count': result[1]}
//     }
//     var(){
//         let sum = 0;
//         let mean = this.mean();
//         this.ages.map(function(age){
//          sum+= Math.pow(age - mean,2);
//         });
//         return sum / this.ages.length;
//     }

//     std(){
//         return Math.sqrt(this.var()).toFixed(1);
//     }


//     freqDist() {
//         let f = {};
//         this.ages.forEach(num => {
//             if (f[num]) {
//                 f[num]++;
//             } else {
//                 f[num] = 1;
//             }
//         });
//         let dist = [];
//         Object.keys(f).forEach(function(age){
//             dist.push([f[age]*4, parseInt(age)]);
//         });
    
//         dist.sort((a, b) => b[0] - a[0]);
    
//         return dist;
//     }
    
// }

// const statistics = new Statistics(ages);
// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]