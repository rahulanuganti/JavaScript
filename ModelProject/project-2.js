const openBtn = document.getElementById('open-btn');
const modelContainer = document.getElementById('model-container');
const closeBtn = document.getElementById('close-btn');

//Event Listeners

openBtn.addEventListener('click', function(){
    modelContainer.style.display = 'block';

});

closeBtn.addEventListener('click', function(){
    modelContainer.style.display = 'none';
})

window.addEventListener('click', function(e){
    if(e.target === modelContainer){
        modelContainer.style.display = 'none';
    }
})