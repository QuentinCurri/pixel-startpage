function checkTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let am = "AM";

    if(h > 12) {
        h -= 12;
        am = "PM";
    } else if(h >= 12){
        am = "PM";
    }

    if(m < 10){
        m = "0" + m
    }

    const timeElement = document.getElementById('time');
    timeElement.innerHTML = h + ":" + m + "&nbsp;" + am;

}

checkTime();

setInterval(checkTime, 500);