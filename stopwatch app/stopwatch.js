var hours = 0;
var mint = 0;
var sec = 0;
var msec = 0;
var intervalId;

var hoursSpan = document.getElementById("hours");
var mintSpan = document.getElementById("mint");
var secSpan = document.getElementById("sec");
var msecSpan = document.getElementById("msec");

function startTime(){
    msec++;
    msecSpan.innerHTML = msec;
    if(msec >= 100){
      sec++;
      secSpan.innerHTML = sec;
      msec =  0;
    }
    else if(sec >= 60) {
      mint++;
      mintSpan.innerHTML = mint;
      sec = 0;
    }
    else if(mint >= 60){
      hours++;
      hoursSpan.innerHTML = hours;
      mint = 0;
      
    }
    
}

var startBtn = document.getElementById("startButton");

function start() {
    intervalId = setInterval(startTime, 100);
    startBtn.disabled = true ;
    startBtn.style.backgroundColor = "blue";
   

}

function stop() {
    clearInterval(intervalId);
    startBtn.disabled = false ;
    startBtn.style.backgroundColor = " rgb(58, 189, 93)";
  
}

function reset() {
    hours = 0;
    mint = 0;
    sec = 0;
    msec = 0;
    hoursSpan.innerHTML = hours;
    mintSpan.innerHTML = mint;
    secSpan.innerHTML = sec;
    msecSpan.innerHTML = msec;
    startBtn.disabled = false ;
    startBtn.style.backgroundColor = " rgb(58, 189, 93)";
}