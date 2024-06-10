const headerElement = document.getElementById('header');

const paragraphs = document.getElementsByClassName('paragraphs');

const images = document.getElementsByTagName('img');


//1.Modifying the inner content of html element
headerElement.innerHTML = 'New Header Text';

//2.Adding click event to the button
const myButton = document.getElementById('myButton');

myButton.addEventListener('click',function(){
    alert('Button is Clicked');
})

//3.Changing styles Dynamically.
const myParagraph = document.getElementById('myParagraphs');
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', function(){
    //Changing the colour style of the paragraph.
    myParagraph.style.color = 'blue';
})

//4.Adding the new paragraph using appendchild method.
const newPragraph = document.createElement('p');

newPragraph.textContent = "This is New paragraph added from js file.";
document.body.appendChild(newPragraph);

//4.Accessing an image and changing them
const myImage = document.getElementById('myImage');
myImage.src = 'new-img.jpg'; //Changing the source of the image.


//5.Accessing the text input element
const myInput = document.getElementById('myInput');
myInput.addEventListener('input', function(){
    document.getElementById('inputValue').textContent = myInput.value;
})