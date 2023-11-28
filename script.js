const counter = document.getElementById("counter")
const donut = document.getElementById("donut")
const autoclicker = document.getElementById("autoclicker")
const multiplier = document.getElementById("multiplier")

let donuts = 0

function addDonut(){
donuts++;
counter.innerHTML = `Donuts: ${donuts}`

    if (donuts > 5){
        autoclicker.innerHTML = '<img src="./images/clicker.png" alt="">WHERE YOU BUY AUTOCLICKER'
    }
}

donut.addEventListener('click', addDonut);



