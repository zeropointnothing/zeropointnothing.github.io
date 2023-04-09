// Toggle the hamburger menu so it can be open.
$(document).ready(function () {
  $(".frogText").toggleClass("hidden");
  $(".menu-container").find(".hamburger").click(function () {
    $(".menu-container").toggleClass("open");
  });
});


var factor = 0.9;
var interval;
var lsize = 200
var ssize = 150
var squeaks = 0

var frogImg = document.getElementById("frogImg");

function handleStart(event) {
  if (event.type === "mousedown" || event.targetTouches.length == 1) {
    if (ssqueak.paused) {
      ssqueak.play();
      
      squeaks += 1
    } else {
      ssqueak.currentTime = 0;
      squeaks += 1
    }

    if (squeaks == 10) {
      $(".frogText").toggleClass("hidden");
    }
    if (squeaks > 10) {
      document.getElementById("frogText").innerHTML = `You've squeaked ${squeaks} times.`
    }

    clearInterval(interval);
    var img = document.getElementById("frogImg");
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    interval = setInterval(function () {
      if (img.width * factor < ssize || img.height * factor < ssize) {
        clearInterval(interval);
      } else {
        img.width *= factor;
        img.height *= factor;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }
    }, 10);
    if (event.type === "touchstart") {
      event.preventDefault();
    }
  }
}

function handleEnd(event) {
  if (event.type === "mouseup" || event.changedTouches.length == 1) {
    if (esqueak.paused) {
      esqueak.play();
    } else {
      esqueak.currentTime = 0;
    }

    clearInterval(interval);
    var img = document.getElementById("frogImg");
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    interval = setInterval(function () {
      if (img.width / factor > lsize || img.height / factor > lsize) {
        clearInterval(interval);
      } else {
        img.width /= factor;
        img.height /= factor;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }
    }, 10);
    if (event.type === "touchend") {
      event.preventDefault();
    }
  }
}

document.getElementById("frogImg").addEventListener("touchstart", handleStart, false);
document.getElementById("frogImg").addEventListener("touchend", handleEnd, false);
document.getElementById("frogImg").addEventListener("mousedown", handleStart, false);
document.getElementById("frogImg").addEventListener("mouseup", handleEnd, false);
