const counter = document.getElementById("counter");
const donut = document.getElementById("donut");

const multiplier = document.getElementById("multiplier");
const autoclicker = document.getElementById("autoclicker");

let donuts = 0;
let multiplierEnabled = false;
let autoclickEnabled = false;

multiplier.style.display="none";
autoclicker.style.display="none";

function addDonut(){

    donuts++;
    counter.innerHTML = `Donuts: ${donuts}`;

    if ((donuts > 9)&&(multiplierEnabled===false)){
        multiplier.innerHTML = '<img src="./images/coin.png" alt="">UNLOCK MULTIPLIER<br>(10 Donuts)<div id="reverse"><img src="./images/coin.png" alt=""></div>';
        multiplierEnabled = true;
        multiplier.style.display="";
    }

    if ((donuts > 100)&&(autoclickEnabled===false)){
        autoclicker.innerHTML = '<img src="./images/clicker.png" alt="">UNLOCK AUTOCLICKER<br>(100 Donuts)<div id="reverse"><img src="./images/clicker.png" alt=""></div>';
        autoclickEnabled = true;
        autoclicker.style.display="";
    }
}

function dropDonut(){

    document.body.style.overflow = 'hidden'; // Prevents scrolling
    const dropDonut = document.createElement('img'); // Creates donut clone
    dropDonut.src = './images/donut2.png';
    dropDonut.style.position = 'absolute'; // Sets the position to absolute
    dropDonut.style.width = '100px'; // Sets the width of the image
    dropDonut.style.height = '100px'; // Sets the height of the image
    dropDonut.style.left = Math.random() * window.innerWidth + 'px'; // Sets a random horizontal position
    dropDonut.style.top = '0px'; // Sets the initial vertical position to the top of the page
    document.body.appendChild(dropDonut); //Adds new donut
    dropDonut.style.zIndex = '-1';
    dropDonut.style.animation = 'jiggle' // Sets the z-index to -1 to make the image appear behind all other elements
    let speed = 4; // Speed of the image
    let position = -200; // Starting position of the image

    const animate = setInterval(() => {

        position += speed;
        dropDonut.style.top = position + 'px';

        if (position > window.innerHeight - dropDonut.offsetHeight) {
            clearInterval(animate);
            document.body.removeChild(dropDonut);
        }

    }, 1);
    
}



donut.addEventListener('click', addDonut);
donut.addEventListener('click', dropDonut);





