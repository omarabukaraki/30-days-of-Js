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

const content = document.querySelector('.content');

const h1 = document.querySelector('.content h1');
h1.textContent = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;

const titles = document.querySelector('.titles');
const titlesP = document.querySelector('.titles p');

const description = document.querySelector('.description');

const challenges = document.querySelector('.challenges');

const techTec = document.querySelector('.techTec');
const techTecSpan = document.querySelector('.techTec span');

const titleText = document.querySelector('.titleText');


//start style of element 
document.body.style.cssText = 'display: flex;flex-direction: column;align-items: center;';
content.style.cssText = 'width: 80%; ';
h1.style.cssText = 'font-size: 40px;font-weight: 500;letter-spacing: 8px;';
titles.style.cssText = 'color: gray;padding-left: 16px;align-items: center;display: flex;width: 100%;height: 50px;background-color: #eddfde;';
challenges.style.cssText = 'display: flex;justify-content: space-evenly;';
techTecSpan.style.cssText = `color:${generateColor()};font-weight: bold;font-size: 35px;animation-name: changeOpacity;animation-iteration-count: infinite;animation-duration: 3s;`;
titleText.style.cssText = 'color: rgb(96, 95, 95);animation-name: changeColor;animation-iteration-count: infinite;animation-duration: 3s;font-size:16px';
//end style of element 




// start change title evey 3 secound
titlesP.textContent = asabenehChallenges2020.author.titles[0][0];
titleText.textContent = asabenehChallenges2020.author.titles[0][1];

let index = 1;
setInterval(() => {
  titlesP.textContent = changeTitle()[0];
  titleText.textContent = changeTitle()[1];
}, 3000);

function changeTitle() {
  let result = asabenehChallenges2020.author.titles[index];
  index++;
  if (index > 4) {
    index = 0;
  }
  return result;
};
// end change title evey 3 secound

description.textContent = asabenehChallenges2020.author.bio;

//start create an challenge component
asabenehChallenges2020.challenges.forEach((challenge, index) => {
  if (index < 3) {
    let p = document.createElement('p');
    p.setAttribute('class', 'challengeComponent');
    p.textContent = challenge.name;
    p.style.cssText = 'display: flex;justify-content: center;align-items: center;width: 25%;height: 10rem;background-color: #fafafa;border:1px solid rgb(233 233 233)';
    p.addEventListener('mouseover',()=>{
    p.style.cssText = 'display: flex;justify-content: center;align-items: center;width: 25%;height: 10rem;background-color:  #eddfde;border:1px solid rgb(233 233 233)';
    });
    p.addEventListener('mouseout',()=>{
      p.style.cssText = 'display: flex;justify-content: center;align-items: center;width: 25%;height: 10rem;background-color: #fafafa;border:1px solid rgb(233 233 233)';
    });
    challenges.append(p);
  }
});
//end create an challenge component

//start display teach tec
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

let topics = [];
asabenehChallenges2020.challenges.forEach((ch) => {
  ch.topics.forEach((topic) => {
    topics.push(topic);
  })
});

techTecSpan.textContent = `${topics[0]}.`;
let txt = document.createTextNode('The technologies teach ');
techTec.prepend(txt);

let topicsIndex = 1;
setInterval(() => {
  techTecSpan.style.color = generateColor();
  techTecSpan.textContent =  changeTopics(topicsIndex);
}, 3000);

function changeTopics(tI){
let result = topics[tI];
topicsIndex++;
if(topicsIndex === topics.length ){
  topicsIndex=0;
}
return result;
};
//end display teach tec








