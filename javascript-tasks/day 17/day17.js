// Task 1
let cities = ['caloOCAn', 'quezon city', 'city of imus' ];
console.log(cities[2]);

cities[1] = 'Los Santos';
console.log(cities);

// Task 2
let fruits = ['apple','peach','banana'];
console.log(fruits);

fruits.push('pomelo');
console.log(fruits);

fruits.pop();
console.log(fruits);

for (let i=0;i<fruits.length;i++){
console.log(fruits[i]);
}

// Task 3 
let numbers = [2, 4, 6, 8, 10];
console.log(numbers);

const mappedNum = numbers.map(number => number * 2);
console.log(mappedNum); // times 2

const filteredNum = numbers.filter(number => number > 5);
console.log(filteredNum); //greater than 5

// Task 4 
let colors = ['black','brown', 'white', 'yellow '];
console.log(colors);

colors.unshift('red');
console.log(colors);

colors.shift();
console.log(colors);

const slicedColors = colors.slice(1,3);//divides 1st and 3rd element, leaving the second and third
console.log(slicedColors);

// Task 5
let characters = ['h', 'a', 't', 'd', 'o','g'];
console.log(characters);

characters.splice(2, 0, 'X', 'D');
console.log(characters); //add characters X D starting from index 2 and remove 0 elements.

const removedCharacters = characters.splice(4,3);//remove 3 elements starting from index 4
console.log(characters);