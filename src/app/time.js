var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
var spinnerImg = document.getElementById('spinner');

var watch = new Stopwatch(timer);

function start() {
    toggleBtn.textContent = 'Stop';
    watch.start();
    spinnerImg.className = "spinner";
}

function stop() {
    toggleBtn.textContent = 'Start';
    spinnerImg.className = "";
    watch.stop();
    
}

toggleBtn.addEventListener('click', function() {
    // if (watch.isOn) {
    //     watch.stop();
    // } else {
    //     watch.start();
    // }
    watch.isOn ? stop() : start();
});

resetBtn.addEventListener('click', function() {
    watch.reset();
});



// Get date

let d = new Date();
let y = d.toLocaleDateString('en-US');
var today = document.getElementById('tDate').innerText = y;


//Get time
myTimer();
var timeVar = setInterval(myTimer, 1000);

function myTimer() {
let d = new Date();
//let t = d.toLocaleTimeString();
let t = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
var tTime = document.getElementById('tTime').innerText = t;
}