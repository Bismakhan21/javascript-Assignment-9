document.addEventListener("DOMContentLoaded", function() {
    var display = document.getElementById("display");
    var hoursInput = document.getElementById("hours")
    var minutesInput = document.getElementById("minutes");
    var secondsInput = document.getElementById("seconds");
    var startButton = document.getElementById("startButton");
    var resetButton = document.getElementById("resetButton");

    var timer;
    var totalSeconds = 0;

    function updateDisplay() {
        var hours = Math.floor(totalSeconds / 3600);
        var minutes = Math.floor((totalSeconds % 3600) / 60);
        var seconds =math.floor(totalSeconds % 60);
        var displayText = '';

        if (hours < 10) {
          displayText += '0' + hours;
        } else {
          displayText += hours;
        }
        
        displayText += ':';
        
        if (minutes < 10) {
          displayText += '0' + minutes;
        } else {
          displayText += minutes;
        }
        
        displayText += ':';
        
        if (seconds < 10) {
          displayText += '0' + seconds;
        } else {
          displayText += seconds;
        }
        
        display.textContent = displayText;
        
    }

    startButton.addEventListener("click", function() {
        if (!timer) {
            var hours = parseInt (hoursInput.value) || 0;
            var minutes = parseInt(minutesInput.value) || 0;
            var seconds = parseInt(secondsInput.value) || 0;
            totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;
            if (totalSeconds > 0) {
                timer = setInterval(function() {
                    if (totalSeconds > 0) {
                        totalSeconds--;
                        updateDisplay();
                    } else {
                        clearInterval(timer);
                    }
                }, 1000);
            }
        }
    });

    resetButton.addEventListener("click", function() {
        clearInterval(timer);
        timer = null;
        totalSeconds = 0;
        minutesInput.value = "";
        secondsInput.value = "";
        updateDisplay();
    });
 });