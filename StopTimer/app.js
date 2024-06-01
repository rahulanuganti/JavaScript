const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

//Variables for holding the time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for leading values
let leadingSec = 0;
let leadingMin = 0;
let leadingHours = 0;

//variables for set interval & timerStatus
let timerInterval = null;
let timerStatus = "stopped";

//Stop watch function
function stopWatch(){
    seconds++;
    if(seconds/60 === 1){
        seconds = 0;
        minutes ++;
        if (minutes/60 === 1){
            minutes=0;
            hours++;
        }
    }
    if(seconds<10){
        leadingSec = "0"+seconds.toString();
    }
    else{
        leadingSec = seconds.toString();
    }
    if(minutes<10){
        leadingMin = "0"+minutes.toString();
    }
    else{
        leadingMin = minutes.toString();
    }
    if(hours<10){
        leadingHours = "0"+hours.toString();
    }
    else{
        leadingHours = hours.toString();
    }

    let display = document.getElementById('timer').innerText =
    leadingHours + ":" + leadingMin + ":" + leadingSec;
     
}
// window.setInterval(stopWatch, 1000);
//It is used for calling a function for every 1000 milliseconds(1sec)

startStopBtn.addEventListener('click', function(){
    if(timerStatus==="stopped"){
        //We need to store it in a variable because need to stop that in else condition
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `
        <i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus="started";
    }
    else{
        window.clearInterval(timerInterval);
        document.getElementById("startStopBtn").innerHTML = `
        <i class="fa-solid fa-play" id="play"></i>`;
        timerStatus="stopped";
    }
})

resetBtn.addEventListener('click', function(){
        hours = 0;
        minutes = 0;
        seconds = 0;
        if(seconds<10){
            leadingSec = "0"+seconds.toString();
        }
        else{
            leadingSec = seconds.toString();
        }
        if(minutes<10){
            leadingMin = "0"+minutes.toString();
        }
        else{
            leadingMin = minutes.toString();
        }
        if(hours<10){
            leadingHours = "0"+hours.toString();
        }
        else{
            leadingHours = hours.toString();
        }
    
        let display = document.getElementById('timer').innerText =
        leadingHours + ":" + leadingMin + ":" + leadingSec;
})