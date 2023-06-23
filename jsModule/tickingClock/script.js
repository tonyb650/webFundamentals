console.log("page loaded.")

let hourHand = document.getElementById("hour");
let minuteHand = document.getElementById("minutes");
let secondHand = document.getElementById("seconds");

// return total elapsed seconds since start of the day 
function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    // console.log(time);
    if (time > 12*3600) { // if > 12 hours (12*3600) then subtract 12 hours
        time -= 12*3600;
    }

    //hours hand position
    let hours = time/3600;
    if ( hours < 6) {
        hours += 12;
    }
    let hourHandPosition = Math.round((hours-6)*30);
    hourHand.style.transform = "rotate("+ hourHandPosition + "deg)";

    // minutes hand position
    let minutes = (time%3600)/60;
    if ( minutes < 30) {
        minutes += 60;
    }
    let minutesHandPosition = Math.round((minutes-30)*6);
    minuteHand.style.transform = "rotate("+ minutesHandPosition + "deg)";

    // seconds hand position
    let seconds = (time%3600)%60;
    if (seconds < 30) {
        seconds += 60;
    }
    let secondHandPosition = (seconds-30)*6;
    secondHand.style.transform = "rotate("+ secondHandPosition + "deg)";
}, 1000);

// map minutes (and seconds) to degrees
// 0 minutes = 180 degrees (30*6)
// 15 minutes = 270 degrees (45*6)
// 30 minutes = 0 degrees (0*6)
// 45 minutes = 90 degrees (15*6)
// if minutes < 30 THEN add 60 minutes
// subtract 30 minutes
// multiply by 6

// map hours to degrees
// 12 oclock = 180 degrees 6 * 30 
// 3 oclock = 270 degrees 9 * 30
// 6 oclock = 0 degrees 0 * 30
// 9 oclock = 90 degrees 3 * 30
// if hours < 6 then add 12
// subtract 6
// multiply by 30

