// Toggle the hamburger menu so it can be open.
$(document).ready(function() {
  $(".menu-container").find(".hamburger").click(function() {
    $(".menu-container").toggleClass("open");
  });
});


var factor = 0.9;
var interval;
var lsize = 200
var ssize = 150


document.getElementById("frogImg").onmousedown = function () {
  if (ssqueak.paused) {
    ssqueak.play();
  } else {
    ssqueak.currentTime = 0;
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
}

document.getElementById("frogImg").onmouseup = function () {
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
}
