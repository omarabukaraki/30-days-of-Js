// 1-
function editArray(){
    let item = [];

    function addItem(){
        item.push('item');
        return item;
    }

    function removeItem(){
        item.pop();
        return item;

    }
    function deleteItems(){
        item = [];
        return item;
    }
    return {add:addItem,remove:removeItem,delete:deleteItems};
} 

const eArr = editArray();

console.log(eArr.add());
console.log(eArr.add());
console.log(eArr.remove());
console.log(eArr.delete());
console.log(eArr.add());



