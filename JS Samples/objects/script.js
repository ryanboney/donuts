
let x

const person = {

    name: 'John',
    age: 30,
    address: {

        street: "123 street",
        city: "cleveland"

    },

    hobbies: ['music','sportball']

}

console.log(person.hobbies[1])

console.log(person['age'])

console.log(person)

person.name = 'Jane'

delete person.age

console.log(person.name)

function addNumbas(){

    person.name = 'Mark'

}

addNumbas()

console.log(person.name)

person.greet =  function(){

    console.log("Hi!")

}

person.greet()



for (var i = 0; i < 5; i++){
    setTimeout(function () {
        console.log('Var = Index: ' + i )
    }, 1000)
}

for (let i = 0; i < 5; i++){
    setTimeout(() => {
        console.log('Let = Index: ' + i)
    }, 1000)
}




