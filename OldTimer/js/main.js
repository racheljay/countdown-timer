const sec = 1000,
      min = sec * 60,
      hr = min * 60,
      day = hr * 24;

function countDown() {
    //access the div from the html
    const timer = document.querySelector(".timer");
    //set up variables for current time
    const time = new Date();
    //const hour = time.getHours();
    //const minute = time.getMinutes();
    //const seconds = time.getSeconds();

    

    //set up variables for the future time (subject to change)
    const futureTime = new Date('Sep 25, 2020 20:00:00');
    //const laterHour = futureTime.getHours();
    //const laterMinute = futureTime.getMinutes();
    //const laterSeconds = futureTime.getSeconds();

    //what time is it right now?
    //const now = double(hour) + ":" + double(minute) + ":" + double(seconds);
    //what is the time later on?
    //const later = double(laterHour) + ":" + double(laterMinute) + ":" + double(laterSeconds);

    //subtract now from the future date

    const timeMil = time.getTime();
    const futureTimeMil = futureTime.getTime();
    const diffMil = futureTimeMil - timeMil;

    const difference =  padZero(Math.floor((diffMil % (day)) / (hr))) + ':' +
                        padZero(Math.floor((diffMil % (hr)) / (min))) + ':' +
                        padZero(Math.floor((diffMil % (min)) / (sec)));


    timer.innerHTML = difference;
    

    function padZero(num) {return (num < 10) ? ("0" + num) : (num);}
    if (diffMil < 0) {
        timer.innerHTML = "They're here";
    }
}

countDown();
setInterval(countDown, sec)
