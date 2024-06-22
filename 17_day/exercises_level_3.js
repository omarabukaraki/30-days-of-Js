// 1-
const personAccount = {
    firstName:'omar',
    lastName:'abu karaki',
    incomes:[400,300,500,400],
    expenses:[200,500,400,200],
    totalIncome:function(){
        let sum = 0;
        this.incomes.forEach(function(inc){
            sum+=inc;
        });
        return sum;
    },
    totalExpense:function(){
        let sum = 0;
        this.expenses.forEach(function(exp){
            sum+=exp;
        });
        return sum;
    },
    accountInfo:function(){
        return `{name: ${this.firstName} ${this.lastName}, Total Incomes: ${this.totalIncome()}}`;
    },
    addIncome:function(inc){
        this.incomes.push(inc);
    },
    addExpense:function(exp){
        this.expenses.push(exp);
    },
    accountBalance:function(){
        return this.totalIncome() - this.totalExpense();
    },
};

sessionStorage.setItem('Person Account',JSON.stringify(personAccount));