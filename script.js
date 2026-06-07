// CLOCK
function showTime() {
  let now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  document.getElementById("clock").innerText =
    h + ":" + m + ":" + s;
}

setInterval(showTime, 1000);

// TIMER
function startTimer() {
  let time = parseInt(document.getElementById("seconds").value);

  if (isNaN(time) || time <= 0) {
    alert("Enter valid number");
    return;
  }

  let interval = setInterval(function () {
    document.getElementById("timer").innerText = time;

    if (time <= 0) {
      clearInterval(interval);
      alert("Time up!");
    }

    time--;
  }, 1000);
}