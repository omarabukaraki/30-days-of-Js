// 1-

// const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

// function tenMostFrequentWords(p,counter){
//    let words = p.toLowerCase().match(/\b\w+\b/g);
//    let wordCount = {};
//    words.forEach(function(word){
//     if(wordCount[word]){
//         wordCount[word]++;
//     }else{
//         wordCount[word] =1;
//     }
//    });
//    let wordList  = Object.assign([],wordCount);  
//    let w = Object.entries(wordList);
//    let resultList = [];
//    w.forEach(function(e,index){
//    let wordObj =  Object.assign({word:e[0],count:e[1]});
//    if(counter !== undefined){
//       if(counter > index){
//          resultList.push(wordObj);
//       }
//    }else{
//     resultList.push(wordObj);
//    }
//    });
//    return resultList.sort((a,b)=> b.count - a.count);
// }

// console.log(tenMostFrequentWords(paragraph));
// console.log(tenMostFrequentWords(paragraph,10));

