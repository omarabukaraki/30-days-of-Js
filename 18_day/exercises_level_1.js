// 1-
function addOne(){
    let listNumbers =[];
  function pushToList(){
        listNumbers.push(1);
        return listNumbers;
    }
    return pushToList;
}

const add = addOne();

console.log(add())
console.log(add())
console.log(add())
console.log(add())


