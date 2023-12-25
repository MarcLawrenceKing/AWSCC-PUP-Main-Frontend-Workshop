// Task 1
let paragraphs = document.getElementsByTagName('p');
console.log('All paragraphs:', paragraphs);

let infoElements = document.getElementsByClassName('info');
console.log('Elements with class name "info":', infoElements);

let headerElement = document.getElementById('header');
console.log('Element with ID "header":', headerElement);

let firstHighlightOnly = document.querySelector('.highlight');
console.log('First element with class "highlight":', firstHighlightOnly);

// Task 2
paragraphs[1].textContent = 'This paragraph is now updated!'

headerElement.style.backgroundColor = 'aqua';

// Task 4

let newH3Element = document.createElement('h3');
newH3Element.textContent = 'New Section';

document.body.appendChild(newH3Element);//append child adds the new element to the last part

// Task 5
headerElement.addEventListener('click', function() {
  alert('Header clicked!');
  console.log('Header clicked!');
});


// Task 6

var colorsArray = ['red', 'orange', 'yellow', 'green', 'blue'];

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = colorsArray[i % colorsArray.length];
}