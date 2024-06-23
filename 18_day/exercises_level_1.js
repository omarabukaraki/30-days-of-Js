const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';


let conData = async function(){
    try{
        let response = await fetch(countriesAPI);
        let countries = await response.json();
        countries.forEach(function(contry){
            console.log(contry['name'],contry['capital'],contry['languages'],contry['population'],contry['area']);
        })
    }catch(e)
    {
        console.log(e);
    }
}

conData();
