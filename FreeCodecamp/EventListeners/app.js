//Dom Manipulation

//Event Listeners


//element.addEventListner('click', function(){})

const btn2 = document.querySelector('.btn-2');

function alertBtn(){
    alert('I also love JavaScript');
}

btn2.addEventListener("click",alertBtn);

//Making it to the shortest format....
//first select an element using querySelector
//write a addEventLinstener function to it having a event, write a function for that event.
document.querySelector('.btn-2').addEventListener('click', function(){
    alert("I Love learing JavaScript");
});

//Mouseover

const newBgcolor = document.querySelector('.btn-3')

newBgcolor.addEventListener('mouseover', function(){
    newBgcolor.style.backgroundColor = 'yellow';
})