//Dom manipulations

//getElementById()
// const title = document.getElementById('main-heading');
// console.log(title);

//getElementByClassName()
// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);

//getElementByTagName()
// const tagElements = document.getElementsByTagName('li');
// console.log(tagElements);

//querySelector()
// const container = document.querySelector('div');
// console.log('container') //it selects the first selector.
//querySelectorAll()


/*1.
const title = document.querySelector('#main-heading');
title.style.color = 'red' ;
console.log(title); */

/*2.
const listItems = document.querySelectorAll('.list-items'); //Need to use respective operator before class or id.
for(i = 0 ; i<listItems.length; i++){
    listItems[i].style.color = 'green';
}
console.log(listItems); */


/*3.
//creating elements from the js
const ul = document.querySelector('ul');
const li = document.createElement('li');
li.innerText = "50 Shades of Grey";//Modifiying the innerText
li.setAttribute('id','main-heading'); // Modifying the attribute and classes
li.removeAttribute('id'); //Removing attributes

const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'));
//use append method is used for appending elements to the html
ul.append(li);

li.classList.add('list-items');//Added the class to the li
// li.classList.remove('list-items');//Removing the value of class of the item
console.log(li.classList.contains('list-items')); //contains method finds whether it is present or not
li.remove(); //Removing the element
*/


/*
//Different types of modifying the text
const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText); //gives only text
console.log(firstListItem.textContent); 
console.log(firstListItem.innerHTML); //gives total html contents
*/

//-----------------------------------------------------------------------------
//DOM TREE//
let ul = document.querySelector('ul');

/*1.
console.log(ul.parentNode);
console.log(ul.parentElement); //If there is no parent it returns null unless until you test for null you don't use parentElement
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

console.log(ul.childNodes);//childNodes contains text and elements
console.log(ul.firstChild);
// ul.firstChild.style.color = 'yellow'; //gives an error because first child is text not an element so

ul.childNodes[1].style.color ='yellow';
console.log(ul.lastChild); 
*/

/*2. Childern (Used for accessing the element)

console.log(ul.children); //It gives the Only elements
console.log(ul.firstElementChild); //It gives the first element child
console.log(ul.lastElementChild);
*/

//3. Sibling

console.log(ul.previousSibling);
console.log(ul.nextSibling);