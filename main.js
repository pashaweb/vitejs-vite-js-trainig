import './style.css';

//1. how to change body background color in HTML page?
const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = 'grey';

//2. how to find number element in div element with class="container"?
const containerElement = document.querySelector('.container');
const children = containerElement.children;
console.log(children.length);

//3. set background color for all div elements with class="item"?
const itemElements = document.querySelectorAll('.item');
itemElements.forEach((item) => {
  item.style.backgroundColor = 'red';
});

//add event listener to all button elements with class="btn" and alert button id?
// const btnElements = document.querySelectorAll('.btn');
// btnElements.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         alert(e.target.id);
//     });
// });

//4. by click on button with id="btn1" change background color of div with class="item-5"?
const btn1Element = document.querySelector('#btn1');
btn1Element.addEventListener('click', (e) => {
  const item5Element = document.querySelector('.item-5');
  item5Element.style.backgroundColor = 'green';
});

//5 by click on button with id="btn2" log how many div elements is in DOM?
const btn2Element = document.querySelector('#btn2');
btn2Element.addEventListener('click', (e) => {
  console.log(document.querySelectorAll('div').length);
});

//6. by click on button with id="btn3" write text `Hello World` in element with id="output?
const btn3Element = document.querySelector('#btn3');
btn3Element.addEventListener('click', (e) => {
  const outputElement = document.querySelector('#output');
  outputElement.innerText = 'Hello World';
});

//7. alert page title on page load?
window.addEventListener('load', (e) => {
  alert(document.title);
});

//8. log array of all text in div elements in console (use map method)?
const divElements = document.querySelectorAll('div');
const textArray = Array.from(divElements).map((div) => div.innerText);
console.log(textArray);

//9.add to each div element with class="item" text `new text and my id `?
const tItemElements = document.querySelectorAll('.item');
tItemElements.forEach((item) => {
  item.innerText += ` new text and my id: ${item.id}`;
});

//10. by click on button with id="btn4" change background color of div with class="item-5" to random color? BONUS: use color from array of colors?
const colors = [
  'red',
  'green',
  'blue',
  'yellow',
  'pink',
  'orange',
  'purple',
  'brown',
  'grey',
  'black',
  'white',
];
const btn4Element = document.querySelector('#btn4');
btn4Element.addEventListener('click', (e) => {
  const item5Element = document.querySelector('.item-5');
  item5Element.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});
