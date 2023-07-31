// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//           js: '20%',
//           php: '10%'
//       },
//       exp: '1 month'
//   }
// };

// function showExperience(obj) {
//   return obj.skills.exp;
// }

// const experience = showExperience(personalPlanPeter);
// console.log(experience);


// function showProgrammingLangs(plan) {
//   const programmingLangs = plan.skills.programmingLangs;
//   let result = '';

//   for (let lang in programmingLangs) {
//     result += `Язык ${lang} изучен на ${programmingLangs[lang]}\n`;
//   }

//   return result;
// }

// console.log(showProgrammingLangs(personalPlanPeter));



const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs: function() {
      return `Мне ${personalPlanPeter.age} и я владею языками: ${UpperCase()}`
  }
};

function UpperCase() {
  let newArr = [];
  const langs = personalPlanPeter.skills.languages;
  for (let lang of langs) {
    newArr.push(lang.toUpperCase());
  }
  return newArr.join(', ');
}

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    return `Семья состоит из: ${arr.join(' ')}`;
}

console.log(showFamily(family)); 

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  const standardizedArray = [];
    for (let el of arr) {
        standardizedArray.push(el.toLowerCase());
    }
    return standardizedArray;
};

const standardizedCities = standardizeStrings(favoriteCities);

for (let city of standardizedCities) {
  console.log(city);
}


const someString = 'This is some strange string';

function reverse(str) {
    const newArr = [];
    const reversedSentence = str.split(' ').reverse();
    
    for (let el of reversedSentence) {
      newArr.push(el.split('').reverse().join(''));
    }

    return newArr.join(' ');
}

console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

 

console.log(availableCurr(baseCurrencies, 'USD'));