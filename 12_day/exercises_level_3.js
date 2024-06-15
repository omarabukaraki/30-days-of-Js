// // 1-
// const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
// function cleanText(sent){
//   return sent.replace(/[@%$&#;.,!?]/g,'');
// }
// console.log(cleanText(sentence));



// let cleanedText = cleanText(sentence);

// function mostFrequentWords(txt){
//     let text = txt.toLowerCase().match(/\b\w+\b/g);
//    let obj = {};
//     text.forEach(function(word){
//         if(obj[word]){
//             obj[word]++;
//         }else{
//             obj[word]= 1 ;
//         }
//     });
//     let list = Object.assign([],obj);
//     let listData= [];
//     let n = Object.entries(list).forEach(function(t){
//         let o = Object.assign({word:t[0],count:t[1]});
//         listData.push(o);
//     });
//     return listData.sort((a,b)=>b.count - a.count).filter(function(d,index){
//         return index < 3;
//     });    
// }

// console.log(mostFrequentWords(cleanedText));