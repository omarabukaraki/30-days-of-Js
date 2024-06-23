// 1-
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI).then(response=> response.json()).then((data)=>data.forEach((d)=> console.log(d['name'])));