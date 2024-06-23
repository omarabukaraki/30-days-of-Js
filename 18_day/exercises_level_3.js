// const countriesAPI = 'https://restcountries.com/v2/all';
// const catsAPI = 'https://api.thecatapi.com/v1/breeds';


// // 1-
// let cats = async function(){
//    try{
//     let response = await fetch(catsAPI);
//     let data = await response.json();
    
//     function avgCat(catsData){
//         let result = 0;
//         catsData.forEach(function(cat){
//          let numbers = cat['weight']['metric'].match(/[0-9]/g);
//          result = (Number(numbers[0])+ Number(numbers[1]))/2;
//          console.log(result)
//         });
//     }
//     avgCat(data);
//    }catch(e){
//     console.log(e)
//    };
// }
// cats();


// // 2-
// let countriesData = async function(){
//     try{
//      let response = await fetch(countriesAPI);
//      let data = await response.json();
//      let contry = [];
//      data.forEach(function(country,index){
//         contry.push(country['area'])
//      })   
//      console.log(contry.sort((a,b)=>b-a).filter(function(val,index){
//         return index < 10;
//      }))
//     }catch(e){
//      console.log(e)
//     };
//  }
//  countriesData();



// // 3-
// let getCountriesData = async function(){
//    let response = await fetch(countriesAPI);
//    let data = response.json();
//    return data;
// }

// let dataCountries = new Promise((resolve,reject)=>{
//    resolve(getCountriesData());
//    reject('error');
// });

// dataCountries.then(countries =>{
//    countries.forEach(country=>{
//       console.log(country['name'] ,'Total number of language: '+ country['languages'].length);
//    })
// });

