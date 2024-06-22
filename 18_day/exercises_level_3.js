


function personAccount(){
    let firstName = 'omar';
    let lastName = 'abu karaki';
    let incomes = [333,444,555,666];
    let expenses = [444,555,222,222];

    function totalIncome(){
        let sum = 0;
        incomes.forEach(function(inc){
            sum+=inc;
        });
        return sum;
    }

    function totalExpense(){
        let sum = 0;
        expenses.forEach(function(exp){
            sum+=exp;
        });
        return sum;
    }

    function accountInfo(){
        return `{name: ${firstName} ${lastName}, Total Incomes: ${totalIncome()}}`;
    }

    function addIncome(inc){
        incomes.push(inc);
    }

    function addExpense(exp){
       expenses.push(exp);
    }

    function accountBalance(){
        return totalIncome() - totalExpense();
    }

    return {
        totalIncome:totalIncome,
        accountBalance:accountBalance,
        totalExpense:totalExpense,
        addExpense:addExpense,
        addIncome:addIncome,
        accountInfo:accountInfo

    }
}
 
const pAccount = personAccount();

console.log(pAccount.totalIncome());
console.log(pAccount.accountBalance());
console.log(pAccount.totalExpense());
pAccount.addExpense(300);
pAccount.addIncome(100);
console.log(pAccount.accountInfo());


