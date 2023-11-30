const counter = document.getElementById("counter");
const totalCounter = document.getElementById("totalCounter");
const donut = document.getElementById("donut");
const donutTotal = document.getElementById("totalDonuts");
const multiplier = document.getElementById("multiplier");
const autoclicker = document.getElementById("autoclicker");
const resetValues = document.getElementById("reset");

const click = new Audio("./sounds/click.wav");
const autoBuy = new Audio("./sounds/autoclick.wav");
const multiBuy = new Audio("./sounds/multiplier.wav");

let donuts = 0;
let totalDonuts = 0;
let clickers = 0;
let clickerCost = 100;
let multi = 1;
let multiplierCost = 10;
let multiplierEnabled = false;
let autoclickEnabled = false;
let autoclickEngaged = false;

multiplier.style.display = "none";
autoclicker.style.display = "none";

function addDonut() {
  donuts += 1 * multi;
  totalDonuts += 1 * multi;
  counter.innerHTML = `Donuts: ${donuts.toFixed(
    0
  )} <br> AutoClickers: ${clickers} <br> Multiplier: ${multi.toFixed(1)}X`;

  if (donuts > 9 && multiplierEnabled === false) {
    multiplier.innerHTML = `<img src="./images/coin.png">UNLOCK MULTIPLIER<br>(${multiplierCost.toFixed(
      0
    )} Donuts)<div id="reverse"><img src="./images/coin.png" alt=""></div>`;
    multiplierEnabled = true;
    multiplier.style.display = "";
  }

  if (donuts > 99 && autoclickEnabled === false) {
    autoclicker.innerHTML = `<img src="./images/clicker.png">UNLOCK AUTOCLICKER<br>(${clickerCost.toFixed(
      0
    )} Donuts)<div id="reverse"><img src="./images/clicker.png" alt=""></div>`;
    autoclickEnabled = true;
    autoclicker.style.display = "";
  }
  updateTotalDonuts();
}

function updateTotalDonuts() {
  totalCounter.innerHTML = `Total Donuts: ${totalDonuts.toFixed(0)}`;
}

function dropDonut() {
  document.body.style.overflow = "hidden"; // Prevents scrolling
  const dropDonut = document.createElement("img"); // Creates donut clone
  dropDonut.src = "./images/donut2.png";
  dropDonut.style.position = "absolute"; // Sets the position to absolute
  dropDonut.style.width = "100px"; // Sets the width of the image
  dropDonut.style.height = "100px"; // Sets the height of the image
  dropDonut.style.left = Math.random() * window.innerWidth + "px"; // Sets a random horizontal position
  dropDonut.style.top = "0px"; // Sets the initial vertical position to the top of the page
  document.body.appendChild(dropDonut); //Adds new donut
  dropDonut.style.zIndex = "-1"; // Sends to back!

  let speed = 3; // Speed of the image
  let position = -150; // Bumps position of the image offscreen

  const animate = setInterval(() => {
    // Updates location every 1ms

    position += speed;
    dropDonut.style.top = position + "px"; // Sets location per update

    if (position > window.innerHeight - dropDonut.offsetHeight) {
      clearInterval(animate);
      document.body.removeChild(dropDonut);
    } // ^ Removes once at bottom
  }, 1);
}

function dropBonusDonut() {
  toDrop = Math.floor(Math.random() * 6);
  if (toDrop === 3) {
    document.body.style.overflow = "hidden"; // Prevents scrolling
    const dropBonusDonut = document.createElement("img"); // Creates donut clone
    dropBonusDonut.src = "./images/BonusDonut.png";
    dropBonusDonut.style.position = "absolute"; // Sets the position to absolute
    dropBonusDonut.style.width = "100px"; // Sets the width of the image
    dropBonusDonut.style.height = "100px"; // Sets the height of the image
    dropBonusDonut.style.left = Math.random() * window.innerWidth + "px"; // Sets a random horizontal position
    dropBonusDonut.style.top = "0px"; // Sets the initial vertical position to the top of the page
    document.body.appendChild(dropBonusDonut); //Adds new donut
    dropBonusDonut.style.zIndex = "6"; // Sends to back!

    let speed = 1; // Speed of the image
    let position = -150; // Bumps position of the image offscreen

    dropBonusDonut.addEventListener("click", () => {
      document.body.removeChild(dropBonusDonut);
      donuts += 10;
      totalDonuts += 10;
      counter.innerHTML = `Donuts: ${donuts.toFixed(
        0
      )} <br> AutoClickers: ${clickers} <br> Multiplier: ${multi.toFixed(1)}X`;
      updateTotalDonuts();
    });
    const animate = setInterval(() => {
      // Updates location every 1ms

      position += speed;
      dropBonusDonut.style.top = position + "px"; // Sets location per update

      if (position > window.innerHeight - dropBonusDonut.offsetHeight) {
        clearInterval(animate);
        document.body.removeChild(dropBonusDonut);
      } // ^ Removes once at bottom
    }, 1);
  }
}

function addClicker() {
  if (donuts >= clickerCost) {
    autoBuy.play();
    donuts -= clickerCost;
    clickerCost *= 1.1;
    clickers++;
    autoclicker.innerHTML = `<img src="./images/clicker.png">UNLOCK AUTOCLICKER<br>(${clickerCost.toFixed(
      0
    )} Donuts)<div id="reverse"><img src="./images/clicker.png" alt=""></div>`;
    counter.innerHTML = `Donuts: ${donuts.toFixed(
      0
    )} <br> AutoClickers: ${clickers} <br> Multiplier: ${multi.toFixed(1)}X`;
    if (autoclickEngaged === false) autoClick();
    autoclickEngaged = true;
    dropDonut();
  }
}

function autoClick() {
  if (clickers >= 1) {
    donuts += clickers * multi;
    totalDonuts += clickers * multi;
    counter.innerHTML = `Donuts: ${donuts.toFixed(
      0
    )} <br> AutoClickers: ${clickers} <br> Multiplier: ${multi.toFixed(1)}X`;
    setTimeout(autoClick, 1000);
  }
  updateTotalDonuts();
  dropDonut();
}

function addMultiplier() {
  if (donuts >= multiplierCost) {
    multiBuy.play();
    donuts -= multiplierCost;
    multiplierCost *= 1.1;
    multi *= 1.2;
    multiplier.innerHTML = `<img src="./images/coin.png">UNLOCK MULTIPLIER<br>(${multiplierCost.toFixed(
      0
    )} Donuts)<div id="reverse"><img src="./images/coin.png" alt=""></div>`;
    counter.innerHTML = `Donuts: ${donuts.toFixed(
      0
    )} <br> AutoClickers: ${clickers} <br> Multiplier: ${multi.toFixed(1)}X`;
    if (multiplierEnabled === false) multiply();
    multiplierEnabled === true;
  }
}

function multiply() {
  if (multi >= 1) {
    donuts += multi * multi;
    counter.innerHTML = `Donuts: ${donuts.toFixed(
      0
    )} <br> AutoClickers: ${clickers} <br> Multiplier: ${multi.toFixed(1)}X`;
  }
}

function resetGame() {
  donuts = 0;
  totalDonuts = 0;
  clickers = 0;
  clickerCost = 100;
  multi = 1;
  multiplierCost = 10;
  multiplierEnabled = false;
  autoclickEnabled = false;
  autoclickEngaged = false;

  if (autoclickEnabled === false && multiplierEnabled === false) {
    counter.innerHTML = `Click that DONUT!`;
    autoclicker.innerHTML = "";
    multiplier.innerHTML = "";

    autoclicker.style.display = "none";
    multiplier.style.display = "none";
  }

  totalCounter.innerHTML = `Total Donuts: ${totalDonuts.toFixed(0)}`;
}

autoclicker.addEventListener("click", addClicker);

donut.addEventListener("click", addDonut);
donut.addEventListener("click", dropBonusDonut);
donut.addEventListener("click", dropDonut);
donut.addEventListener("click", function () {
  click.play();
});

multiplier.addEventListener("click", addMultiplier);

resetValues.addEventListener("click", resetGame);
