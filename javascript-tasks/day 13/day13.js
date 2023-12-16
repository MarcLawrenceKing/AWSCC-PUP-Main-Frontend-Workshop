// Task 1
let currentLesson = 'JavaScript Fundamentals';
console.log(currentLesson);

// Task 2
let favoriteNumber = 3;
let favoriteWord = "hotdog";
let isJavaScriptFun = true;
let nothing = null;
let undefinedVar;

console.log(typeof(favoriteNumber));
console.log(typeof(favoriteWord));
console.log(typeof(isJavaScriptFun));
console.log(typeof(nothing));
console.log(typeof(undefinedVar));

// Task 3
let isMorning = true; 
let isRaining = true;

if (isMorning && isRaining){
  console.log('it is morning AND raining');
}
isMorning = true; 
isRaining = false;
if (isMorning || isRaining){
  console.log('it is morning OR raining');
}
if (isMorning){
  console.log(!isMorning);
}
