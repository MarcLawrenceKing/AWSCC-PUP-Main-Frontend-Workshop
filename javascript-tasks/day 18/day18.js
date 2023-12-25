// Task 1
let book = {
  title: 'Book Name',
  author: 'hindi ko kilala',
  year: '2004'
};

console.log('Author is: '+ book.author);

// Task 2
let student = {
  name: 'Marc',
  age: '19',
  grade: '1.00'
};
console.log('Current Age: '+ student.age);
student.age = '20';
student.subjects = ['Programming 3', 'Operating Systems', 'Data Structures and Algorithm'];

console.log('New Age: '+ student.age);
console.log('Subjects are: '+ student.subjects);

// Task 3
let rectangle = {
  width: 50,
  height: 10,
  calculateArea: function () {
    return rectangle.width * rectangle.height;
  }
};

let area = rectangle.calculateArea();
console.log('Area of Rectangle is: ' + area);

// Task 4
let person = {
  name: 'Marc',
  age: '19',
  address: 'Caloocan City'
};
delete person.address;
console.log('Person address is deleted, therefore: '+ person.address)

let employee = {
  name: 'Janah',
  position: 'Accountant'
};
let employeeDetails = {
  ...person, // Spread properties of `person`
  ...employee // Spread properties of `employee`
};

console.log(employeeDetails);