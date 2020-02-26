var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

function start() {
    toggleBtn.textContent = 'Stop';
    watch.start();
}

function stop() {
    toggleBtn.textContent = 'Start';
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