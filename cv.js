// character - convert //


onload = cvMain;

function cvMain() {
    console.log("cv.js() - <loaded> ");
    // characterMain();
    startTime();

}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var stShowTime = document.getElementById('showTime')


    m = checkTime(m);
    s = checkTime(s);

    stShowTime.innerHTML = h + " : " + m + " : " + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}