
const names = ['Tony','Scruffy','Pete','Larry','Miles']

for (let i =0; i < names.length; i++){

    if (names[i] === 'Scruffy'){

        console.log(names[i] + " is the best.")

    } else {

        console.log(names[i])
    }

}

// const items = ["Book", "Table", "Chair", "Kite"]
// const users = [{name: "Tony", name: "Scruffy", name: "Pete", name: "Larry", name: "Miles", name:"Suzy"}]

// for (const user of users){

//     console.log(user.name)

// }

// const map = new Map()
// map.set('name', 'Tony')

// for (const[key,value] of map) {

//     console.log(key, value)

// }

const soc = ['Twitty', "Linky", "Facey", "Insty"]

soc.forEach(function (item){

    console.log(item)

})

soc.forEach((item) => console.log(item))

soc.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr))

