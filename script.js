const counter = document.getElementById("counter")
const donut = document.getElementById("donut")
let donuts = 0

function addDonut(){
donuts++;
counter.innerHTML = `Donuts: ${donuts}`
}

donut.addEventListener('click', addDonut); 

