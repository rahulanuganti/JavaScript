/*
document.querySelector('#football').addEventListener
('click', function(e){
    console.log('football is clicked');
    console.log(e);
    const target = e.target;
    console.log(target);
    if(target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
})

document.querySelector('#basketball').addEventListener(
    'click',function(e){
        console.log("basketball is clicked");
        const target = e.target;
        if(target.matches('li')){
            target.style.backgroundColor = 'lightgrey';
        }
    }
)

No need to do for every list item
*/

document.querySelector('#sports').addEventListener('click',
    function(e){
        console.log(e.target.getAttribute('id')+" is clicked!");

        const tgt = e.target;
        if(tgt.matches('li')){
            tgt.style.backgroundColor = 'lightgrey';
        }
    }
)

//Adding elements 

const ul = document.querySelector('#sports');
const newli = document.createElement('li');

newli.innerText = 'Cricket';
newli.setAttribute('id','cricket'); //Setting the id='cricket' for list item Cricket;

ul.appendChild(newli); //Adding the list item to ul.


//Practice

const unorderdlist = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'Rugby';
newSport.setAttribute('id','rugby');

unorderdlist.appendChild(newSport);