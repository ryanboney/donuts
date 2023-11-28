let donuts = 0

function add(){
donuts++;
document.getElementById("counter").innerHTML = "Donuts " + donuts
}

document.getElementById("donut").addEventListener("click", add()); 