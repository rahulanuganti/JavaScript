const accordin = document.getElementsByClassName('accordin-content')
const question = document.querySelectorAll('question')
const answer = document.getElementsByClassName('answer')

for( i=0; i<accordin.length; i++){
    accordin[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}
