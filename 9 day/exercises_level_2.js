// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: '' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ];

// 1-
// let result = products.filter((product)=> product.price !== '').map((product)=>product.price).reduce((pV,cV)=> pV + cV);
// console.log(result);

// 2-
// let result = products.reduce(function(pV,cV){
//     return pV + (cV.price !=='' ? cV.price : 0)  ;
// },0);
// console.log(result);


// 3-
// const countries = [
//   'Afghanistan',
//   'Albania',
//   'Algeria',
//   'Andorra',
//   'Angola',
//   'Antigua and Barbuda',
//   'Argentina',
//   'Armenia',
//   'Australia',
//   'Austria',
//   'Azerbaijan',
//   'Bahamas',
//   'Bahrain',
//   'Bangladesh',
//   'Barbados',
//   'Belarus',
//   'Belgium',
//   'Belize',
//   'Benin',
//   'Bhutan',
//   'Bolivia',
//   'Bosnia and Herzegovina',
//   'Botswana',
//   'Brazil',
//   'Brunei',
//   'Bulgaria',
//   'Burkina Faso',
//   'Burundi',
//   'Cambodia',
//   'Cameroon',
//   'Canada',
//   'Cape Verde',
//   'Central African Republic',
//   'Chad',
//   'Chile',
//   'China',
//   'Colombi',
//   'Comoros',
//   'Congo (Brazzaville)',
//   'Congo',
//   'Costa Rica',
//   "Cote d'Ivoire",
//   'Croatia',
//   'Cuba',
//   'Cyprus',
//   'Czech Republic',
//   'Denmark',
//   'Djibouti',
//   'Dominica',
//   'Dominican Republic',
//   'East Timor (Timor Timur)',
//   'Ecuador',
//   'Egypt',
//   'El Salvador',
//   'Equatorial Guinea',
//   'Eritrea',
//   'Estonia',
//   'Ethiopia',
//   'Fiji',
//   'Finland',
//   'France',
//   'Gabon',
//   'Gambia, The',
//   'Georgia',
//   'Germany',
//   'Ghana',
//   'Greece',
//   'Grenada',
//   'Guatemala',
//   'Guinea',
//   'Guinea-Bissau',
//   'Guyana',
//   'Haiti',
//   'Honduras',
//   'Hungary',
//   'Iceland',
//   'India',
//   'Indonesia',
//   'Iran',
//   'Iraq',
//   'Ireland',
//   'Israel',
//   'Italy',
//   'Jamaica',
//   'Japan',
//   'Jordan',
//   'Kazakhstan',
//   'Kenya',
//   'Kiribati',
//   'Korea, North',
//   'Korea, South',
//   'Kuwait',
//   'Kyrgyzstan',
//   'Laos',
//   'Latvia',
//   'Lebanon',
//   'Lesotho',
//   'Liberia',
//   'Libya',
//   'Liechtenstein',
//   'Lithuania',
//   'Luxembourg',
//   'Macedonia',
//   'Madagascar',
//   'Malawi',
//   'Malaysia',
//   'Maldives',
//   'Mali',
//   'Malta',
//   'Marshall Islands',
//   'Mauritania',
//   'Mauritius',
//   'Mexico',
//   'Micronesia',
//   'Moldova',
//   'Monaco',
//   'Mongolia',
//   'Morocco',
//   'Mozambique',
//   'Myanmar',
//   'Namibia',
//   'Nauru',
//   'Nepal',
//   'Netherlands',
//   'New Zealand',
//   'Nicaragua',
//   'Niger',
//   'Nigeria',
//   'Norway',
//   'Oman',
//   'Pakistan',
//   'Palau',
//   'Panama',
//   'Papua New Guinea',
//   'Paraguay',
//   'Peru',
//   'Philippines',
//   'Poland',
//   'Portugal',
//   'Qatar',
//   'Romania',
//   'Russia',
//   'Rwanda',
//   'Saint Kitts and Nevis',
//   'Saint Lucia',
//   'Saint Vincent',
//   'Samoa',
//   'San Marino',
//   'Sao Tome and Principe',
//   'Saudi Arabia',
//   'Senegal',
//   'Serbia and Montenegro',
//   'Seychelles',
//   'Sierra Leone',
//   'Singapore',
//   'Slovakia',
//   'Slovenia',
//   'Solomon Islands',
//   'Somalia',
//   'South Africa',
//   'Spain',
//   'Sri Lanka',
//   'Sudan',
//   'Suriname',
//   'Swaziland',
//   'Sweden',
//   'Switzerland',
//   'Syria',
//   'Taiwan',
//   'Tajikistan',
//   'Tanzania',
//   'Thailand',
//   'Togo',
//   'Tonga',
//   'Trinidad and Tobago',
//   'Tunisia',
//   'Turkey',
//   'Turkmenistan',
//   'Tuvalu',
//   'Uganda',
//   'Ukraine',
//   'United Arab Emirates',
//   'United Kingdom',
//   'United States',
//   'Uruguay',
//   'Uzbekistan',
//   'Vanuatu',
//   'Vatican City',
//   'Venezuela',
//   'Vietnam',
//   'Yemen',
//   'Zambia',
//   'Zimbabwe'
// ];
// function categorizeCountries(categoryName){
//  return countries.filter(function(country){
//     return country.toLowerCase().includes(`${categoryName}`);
//   })
// }
// console.log(categorizeCountries('land'));
// console.log(categorizeCountries('ia'));
// console.log(categorizeCountries('island'));
// console.log(categorizeCountries('stan'));

// 4-
// function getFirstLetterAndTime(countriesData){
//   countriesData.forEach(function(country){
//     console.log({char: country.charAt(0) ,count: country.length});
//   });
// }
// getFirstLetterAndTime(countries);

// 5-
// function getFirstTenCountries(countriesData){
//  return countriesData.filter(function(country,index){
//     return index < 10 ;
//   })
// }
// console.log(getFirstTenCountries(countries));

// 6-
// function getLastTenCountries(countriesData){
//   return countriesData.reverse().filter(function(country,index){
//         return index < 10 ;
//       }).reverse();
// }
// console.log(getLastTenCountries(countries));


// 7-
// function findMostLetterUse(countriesData) {
//   let letterCount = {};

//   countriesData.forEach(function (country) {
//     let firstLetter = country.charAt(0);
//     if (letterCount[firstLetter]) {
//       letterCount[firstLetter]++;
//     } else {
//       letterCount[firstLetter] = 1;
//     }
//   });

//   let mostLetterUse = 0;
//   Object.keys(letterCount).forEach(function (letter) {
//     if (mostLetterUse <= letterCount[letter]) {
//       mostLetterUse = letterCount[letter];
//     }
//   });
//   return mostLetterUse;
// }
// console.log(findMostLetterUse(countries));
