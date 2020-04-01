function Stopwatch(elem) {
    var time = 0;
    var interval;
    var offset;

    function update() {
        if (this.isOn) {
            time += delta();
        }     
    
        elem.textContent = timeFormatter(time);
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormatter(time) {
        time = new Date(time);

        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();
        //var hours = time.getHours().toString();

        var hours = ((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toFixed(1);

        // New string without third millisecond digit
        var ms = milliseconds.substring(0, 2);

        // if (minutes.length < 2) {
        //     minutes = '0' + minutes;
        // }

        // if (seconds.length < 2) {
        //     seconds = '0' + seconds;
        // }
        
        while (ms.length < 2) {
            ms = '0' + ms;
        }

        return hours + ' h ' + ' ' + minutes + ' m ' + ' ' + seconds + ' s ' + ' ' + ms;
    }

  

    this.start = function() {
        interval = setInterval(update.bind(this), 20);
        offset = Date.now();
        this.isOn = true;     
    };

    this.stop = function() {
        clearInterval(interval);
        interval = null;
        this.isOn = false;   
    };

    this.reset = function() {
        time = 0;
        update();
    };

    this.isOn = false;
}



// function getShowTime(){
//     updatedTime = new Date().getTime();
//     if (savedTime){
//       difference = (updatedTime - startTime) + savedTime;
//     } else {
//       difference =  updatedTime - startTime;
//     }
//     // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));