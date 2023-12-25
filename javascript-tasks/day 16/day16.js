// 1-2
function greet(){
  console.log('Hello there!');
}
greet();

// 3
function greetWithName(name){
  console.log(`Hello there, ${name}!`);
}
greetWithName('Kim Chae-won');

// 4-5
function addNumbers(a,b){
  return a + b;
}
let num1;
let num2;
let result = addNumbers(num1, num2);
num1 = 11; 
num2 = 21;
result = addNumbers(num1, num2);
console.log(`sum is: ${result}`);

num1 = 86; 
num2 = 95;
result = addNumbers(num1, num2);
console.log(`sum is: ${result}`);

// 6-7
function calculateAverage(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}

const numbers = [21, 43, 65, 87, 9];
const average = calculateAverage(numbers);

console.log(`The average is ${average}`);
