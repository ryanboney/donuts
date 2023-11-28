const counter = document.getElementById("counter")
const donut = document.getElementById("donut")

const autoclicker = document.getElementById("autoclicker")
const multiplier = document.getElementById("multiplier")

let donuts = 0
let autoclickEnabled = false
let multiplierEnabled = false

autoclicker.style.display="none"
multiplier.style.display="none"

function addDonut(){

    donuts++;
    counter.innerHTML = `Donuts: ${donuts}`

    if ((donuts > 3)&&(autoclickEnabled===false)){
        autoclicker.innerHTML = '<img src="./images/clicker.png" alt="">UNLOCK AUTOCLICKER<br>(100 Donuts)<div id="reverse"><img src="./images/clicker.png" alt=""></div>'
        autoclickEnabled = true
        autoclicker.style.display="";
    }

    if ((donuts > 3)&&(multiplierEnabled===false)){
        multiplier.innerHTML = '<img src="./images/coin.png" alt="">UNLOCK MULTIPLIER<br>(100 Donuts)<div id="reverse"><img src="./images/coin.png" alt=""></div>'
        multiplierEnabled = true
        multiplier.style.display="";
    }

}

function donutAnim(){

    

}


donut.addEventListener('click', addDonut);
donut.addEventListener('click', donutAnim);



