
const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin">'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  };

  function generateColor(){
    let char ='abcdef0123456789';
    let color = [];
   for(let i= 0;i<3;i++){
      let c = Math.floor(Math.random() * char.length);
      for (let index = 0; index < 2; index++) {
        color.push(char[c]); 
      }
   }
   return `#${color.join('')}`;
}
  
// 1-
const body = document.getElementsByClassName('wrapper');
body[0].style.cssText = 'display: flex;flex-direction: column;align-items: center;';


function generateColor(){
    let char ='abcdef123456789';
    let color = [];
   for(let i= 0;i<3;i++){
      let c = Math.floor(Math.random() * char.length);
      for (let index = 0; index < 2; index++) {
        color.push(char[c]); 
      }
   }
   return `#${color.join('')}`;
}

const span = document.querySelector('span');
span.style.fontSize = '80px';
setInterval(function(){
span.style.color = generateColor();

},1000);

const h2 = document.querySelector('h2');
h2.style.cssText='font-weight: 100;text-decoration: underline;';

const time = document.querySelector('.time');
setInterval(()=>{
let date = new Date();
time.textContent = date.toString().slice(0,25);
time.style.background = generateColor();
},1000);
time.style.padding = '6px'


const ul = document.querySelector('ul');
ul.style.listStyle= 'none';
ul.style.width= '60%';

let newLi;
let details;
let challengeStatus;

asabenehChallenges2020.challenges.forEach((challenge)=>{
    newLi = document.createElement('li');
    newLi.textContent = challenge['name'];
    details = document.createElement('details');
    challengeStatus = document.createElement('p');
    challengeStatus.textContent = challenge.status;
    challenge.topics.forEach(topic=>{
        let p = document.createElement('p');
        p.textContent = topic;
        details.append(p);
    });
    
    newLi.append(details);
    newLi.append(challengeStatus);
     ul.append(newLi);
});


const li = document.querySelectorAll('li');
li.forEach((ele,index)=>{
    if(ele.textContent.includes('Done')){
       ele.style.background='lightgreen';        
    }else if(ele.textContent.includes('Ongoing')){
        ele.style.background='#FDD835';
    }else{
       ele.style.background='salmon';
    }
    ele.style.padding = '24px';
    ele.style.margin = '4px';
    ele.style.display = 'flex';
    ele.style.justifyContent ='space-evenly';
    ele.style.alignItems= 'center';
});

let name = document.createElement('h1');
name.textContent = asabenehChallenges2020.author.firstName +' '+asabenehChallenges2020.author.lastName;
name.style.margin = '0px';
let description = document.createElement('p');
description.textContent = asabenehChallenges2020.author.bio;
description.style.cssText = 'width:50%';
ul.after(name);
name.after(description);

let userInfoDiv = document.createElement('div');
userInfoDiv.setAttribute('class','userInformation');
description.after(userInfoDiv);

let titleDiv = document.createElement('div');
asabenehChallenges2020.author.titles.forEach((title)=>{
  let titleH3 = document.createElement('h3');
  titleH3.style.fontWeight = '100';
  titleH3.textContent = title;
  titleDiv.append(titleH3);
});
let qtitle = document.createElement('h3');
qtitle.textContent = Object.keys(asabenehChallenges2020.author)[2].toUpperCase();
titleDiv.prepend(qtitle);

let skillDiv = document.createElement('div');
asabenehChallenges2020.author.skills.forEach((skill)=>{
  let skillH3 = document.createElement('h3');
  skillH3.style.fontWeight = '100';
  skillH3.textContent = skill;
  skillDiv.append(skillH3);
});
let qSkill = document.createElement('h3');
qSkill.textContent = Object.keys(asabenehChallenges2020.author)[5].toUpperCase();;
skillDiv.prepend(qSkill);

let qDiv = document.createElement('div');
asabenehChallenges2020.author.qualifications.forEach((qualification)=>{
  let qualificationH3 = document.createElement('h3');
  qualificationH3.style.fontWeight = '100';
  qualificationH3.textContent = qualification;
  qDiv.append(qualificationH3);
});

let qhead = document.createElement('h3');
qhead.textContent = Object.keys(asabenehChallenges2020.author)[3].toUpperCase();;
qDiv.prepend(qhead);


userInfoDiv.append(titleDiv);
userInfoDiv.append(skillDiv);
userInfoDiv.append(qDiv);


let userInformationDiv = document.querySelector('.userInformation');
userInfoDiv.style.cssText = 'width: 100%;justify-content: center;display: flex;font-size:10px;gap:20px;';


const KeyWordsContanier = document.createElement('div');
KeyWordsContanier.classList.add('skills');
KeyWordsContanier.style.cssText = 'display: grid;width: 60%;grid-template-columns: repeat(6, 6.3rem);';
KeyWordsContanier.style.justifyContent = 'center';
document.querySelector('.wrapper').append(KeyWordsContanier);

let keyPrgraf;
asabenehChallenges2020.keywords.forEach((key)=>{
  keyPrgraf = document.createElement('p');
   keyPrgraf.style.cssText = `background:${generateColor()};padding:5px;margin:5px;border-raduis:20px`;
   keyPrgraf.style.borderRadius = '10px'
   keyPrgraf.textContent = key;
  KeyWordsContanier.append(keyPrgraf);
});






    
    
    







