const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//this works as well

// function capitalize(array, callback){
//   const newArray=[];

//   for(const element of array){
//     newArray.push(callback(element))
//   }
//   return newArray;
// }



// const titleCased = capitalize(tutorials, function(tutorial){
//   return tutorial.toLowerCase().split(" ").map(s=> s.charAt(0).toUpperCase()+ s.substring(1)).join(" ");
// })

// console.log(titleCased);



//for the code to pass
const titleCased = () => {
 return tutorials.map(element => (element.split(" ").map(element => element.charAt(0).toUpperCase() +element.slice(1))).join(" "))
 }

 console.log(titleCased(tutorials));











// function loopThroughTutorials(collection){
//   let newCollection = [];

//   for(const tutorial of collection){
//       function capitalize(tutorial){
//         let words = tutorial.split(' ');
//         let capitalisedWords = [];
//         words.forEach(element => {
//           capitalisedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
//         });
//         return capitalisedWords.join(' ')
//         console.log(capitalize(tutorial))
//       }
     
//       newCollection.push(tutorial)
//   }
//   return newCollection
// }

// console.log(loopThroughTutorials(tutorials))

// function loopAndCapitalise(collection, callback){
//   const newCollection =[];

//   for (const element of collection){
//     newCollection.push(callback(element))
//   }
//   return newCollection
// }

// const tryCapitalise = loopAndCapitalise(tutorials, function(tutorial){
//   let words = tutorial.split(" ");
//   let capitalisedWords = [];
//   words.forEach(element => {
//     capitalisedWords.push(element[0].toUpperCase() + element.slice(1, element.lenght));
//   });
//   return capitalisedWords.join(" ");
// })

// console.log(tryCapitalise)