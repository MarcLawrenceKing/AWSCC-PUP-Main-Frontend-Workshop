// Task 1 

let product = {
  name: 'kangkong chips',
  price: '150',
  quantity: 1
}

const productJSON = JSON.stringify(product);

console.log(`Stringified: ${productJSON}`);

// Task 2
let bookJSON = '{"title": "The Iliad","author": "Homer", "publishedYear": "7th Century BC"}';

const book = JSON.parse(bookJSON);

console.log(`Author is ${book.author}`);

// Task 3
let people = [
  { name: 'Carl', age: 19, city: 'Imus' },
  { name: 'Shania', age: 19, city: 'SJDM' },
  { name: 'Frenchie', age: 19, city: 'SJDM' }
];

let peopleJSON = JSON.stringify(people);
console.log(peopleJSON);

let parsedPeople = JSON.parse(peopleJSON);
console.log(parsedPeople);

parsedPeople.forEach(person => {
  console.log(`Name: ${person.name}, City: ${person.city}`);
});
