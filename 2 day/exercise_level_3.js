// 1-
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(loveSentence.match(/Love/gi).length);

// 2-
let sentenceEx3 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentenceEx3.match(/because/gi).length);

// 3-
const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentences.replace(/[^a-z 0-9]/gi,''));
// 4-
let personIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let salaryPerMonth = (personIncome.split(",")[0].split(" ")[2]) * 12;
let annualBonus = personIncome.split(", ")[1].split(" ")[0];
let onlineCourses = (personIncome.split(", ")[2].split(" ")[0]) * 12;
console.log(`The total annual income is ${+salaryPerMonth+ +annualBonus+ +onlineCourses} euro`);


