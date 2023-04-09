// Cookies: START //
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
// Function to retrieve a Cookie's value. Call with 'getCookie([cookie name])'.
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
// Cookies: END //

document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
updateClock()
load()
function load() {
    // Add Event Listeners to update all check cookies when they are changed.
    var ss = document.getElementById("hasSeconds");
    var sd = document.getElementById("hasDate");
    var samp = document.getElementById("hasAMP");
    ss.addEventListener("change", function () {
        updateChecks(ss, sd, samp)
    });
    sd.addEventListener("change", function () {
        updateChecks(ss, sd, samp)
    });
    samp.addEventListener("change", function () {
        updateChecks(ss, sd, samp)
    });

    if (getCookie("hasSeconds") == null) {
        let element = document.getElementById("hasSeconds");
        element.checked = false
    } else {
        chk = getCookie("hasSeconds")
        let element = document.getElementById("hasSeconds")
        element.checked = chk
    }

    if (getCookie("hasDate") == null) {
        let element = document.getElementById("hasSeconds");
        element.checked = false
    } else {
        chk = getCookie("hasDate")
        let element = document.getElementById("hasDate")
        element.checked = chk
    }

    if (getCookie("hasAMP") == null) {
        let element = document.getElementById("hasAMP");
        element.checked = false
    } else {
        chk = getCookie("hasAMP")
        let element = document.getElementById("hasAMP")
        element.checked = chk
    }


    if (getCookie('color') == null) {
        let element = document.getElementById('date_time');
        element.style.color = "#231f1f";
    } else {
        color = getCookie('color')
        let element = document.getElementById('date_time');
        element.style.color = color;
    }

    if (getCookie('bg') == null) {
        document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp2873520.jpg";
    } else {
        bg = getCookie('bg')
        document.getElementById("bginp").value = bg
        document.body.style.backgroundImage = "url(" + bg + ")";
    }

    // Create an Event Listener to detect when the font is changed.
    var font_chs_element = document.getElementById("font_chs");
    font_chs_element.addEventListener("change", function () {
        font = font_chs_element.value;
        document.getElementById("date_time").style.fontFamily = font;
        setCookie('font', font, 200)
    });

    if (getCookie('font') == null) {
        font = "Times New Roman"
        document.getElementById("date_time").style.fontFamily = font
    } else {
        font = getCookie('font')
        document.getElementById("date_time").style.fontFamily = font;
        document.getElementById("font_chs").value = font;
    }
}

function UpdateBg() {
    var bg = document.getElementById("bginp").value;
    document.body.style.backgroundImage = "url(" + bg + ")";

    setCookie('bg', bg, 200)
}

function updateColor() {
    var color = document.getElementById("clinp").value;
    let element = document.getElementById('date_time');
    element.style.color = color;
    setCookie('color', color, 200)
}

function updateChecks(ss, sd, samp) {
    setCookie("hasSeconds", ss.checked, 200)
    setCookie("hasDate", sd.checked, 200)
    setCookie("hasAMP", samp.checked, 200)
}

function updateClock() {
    var hasSeconds = document.getElementById("hasSeconds").checked
    var hasDate = document.getElementById("hasDate").checked
    var hasAMP = document.getElementById("hasAMP").checked

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    // Add leading zero's to hours, seconds, and minutes if they are single digit.
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    // Convert time to 12-hour format
    var apm = "AM";
    if (hours == 0 || hours == 24) {
        hours = 12;
    } else if (hours >= 12) {
        hours = hours - 12;
        if (hours == 0) {
            hours = 12;
        }
        apm = "PM";
    }

    var month = date.getMonth();
    //js shows months from 0-11. Add one to fix this.
    month += 1
    var day = date.getDate();
    var year = date.getFullYear();

    var title = hours + ":" + minutes
    var dt = hours + ":" + minutes

    if (hasSeconds) {
        title = title + ":" + seconds
        dt = dt + ":" + seconds
    }
    if (hasAMP) {
        dt = dt + ' ' + apm
    }
    if (hasDate) {
        dt = dt + '<br>' + month + "/" + day + "/" + year;
    }

    document.title = title
    date_time.innerHTML = dt
}

setInterval(updateClock, 1000); // update the clock every second