// Task 1
const dynamicContainer = document.getElementById('dynamicContainer');

// Create a new img element
const newImage = document.createElement('img');

// Set attributes
newImage.src = 'https://cdn.vox-cdn.com/thumbor/wfbQ3XccV6SxGMt1l6zBPL3Xg7o=/0x0:1192x795/1400x1050/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg';
newImage.alt = 'Dynamically created image';

newImage.style.width = '500px'; // Set the desired width

// Append the new element to the container
dynamicContainer.appendChild(newImage);

// Task 2
const myList = document.getElementById('myList');

// a. Select and remove a specific list item
const itemToRemove = myList.children[1]; // Selecting the second item
myList.removeChild(itemToRemove);

// b. Remove the last list item
const lastItem = myList.lastElementChild;
lastItem.remove();

// c. Clear all list items using innerHTML
myList.innerHTML = '';
