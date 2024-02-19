function colorClock(){
    let currentDate = new Date();
    let hr = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();
    if (hr < 10){
        hr = "0" + hr;
    }
    if (min < 10){
        min = "0" + min;
    }
    if (sec < 10){
        sec = "0" + sec;
    }
    let clock = "" + sec + min + hr;
    document.getElementById("colorClock").innerHTML = hr + ":" + min + ":" + sec;
    let hexColor = "#" + hr.toString(16) + min.toString(16) + sec.toString(16);
    document.body.style.background = hexColor;
    setTimeout (colorClock, 1000);
}
colorClock();