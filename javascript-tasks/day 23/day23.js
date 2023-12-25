// Task 1
const button = document.getElementById('myButton');

  button.addEventListener('click', function(event) {
  alert('Button clicked!');
});

// Task 2
const doubleClickButton = document.getElementById('doubleClickButton');

  doubleClickButton.addEventListener('dblclick', function(event) {
  alert('Button double-clicked!');
});

// Task 3
const mouseenterButton = document.getElementById('mouseenterButton');

  mouseenterButton.addEventListener('mouseenter', function(event) {
  mouseenterButton.style.backgroundColor = 'lightblue';
  });

  mouseenterButton.addEventListener('mouseleave', function(event) {
  mouseenterButton.style.backgroundColor = ''; 
  });

  // Task 4
  const inputElement = document.getElementById('myInput');

  inputElement.addEventListener('keypress', function(event) {
    console.log('Keypress event:', event.key);
  });