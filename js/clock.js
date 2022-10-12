const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  clock.textContent = currentTime;
  //console.log(currentTime);
  //const hours = String(date.getHours()).padStart(2, "0");
  //const minutes = String(date.getMinutes()).padStart(2, "0");
  //const second = String(date.getSeconds()).padStart(2, "0");
  // clock.innerText = (`${hours}:${minutes}:${second}`);
}

getClock();
setInterval(getClock, 1000);
//setInterval(sayHello, 5000);