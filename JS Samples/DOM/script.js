
console.log(window.document)
// same as
console.log(document)

console.log(document.body)

document.write("aw jeez aw man")

//document.getElementById("main").innerHTML = '<h1> Yikes! Big Yikes! </h1>'

document.querySelector('#main h2').innerText = "henlo"

const title = document.querySelector('#mark')

title.textContent = "ohhhhh hi mark"

document.body.style.backgroundColor = "green"

title.style.color = "blue"
title.style.backgroundColor = "red"
title.style.padding = "20px"
title.style.borderRadius = "50px"
title.style.boxSizing = "border-box"
title.style.fontSize = "32px"
title.style.margin = "30px auto"
title.style.maxWidth = "400px"
title.style.textAlign = "center"
title.style.fontFamily = "Verdana"
title.style.cursor = "crosshair"

document.designMode = "on"

let elementCount = 0

function appendElement(){

    const newElement = document.createElement("h4")
    newElement.textContent = `Element ${elementCount + 1}`
    
}
