let x

const numbers = [12,45,24,85]

const mixed = [12, 'hello', true, null]

console.log(numbers)
console.log(mixed)

const fruits = new Array("apple","orange","banana")
console.log(fruits)

x = fruits[0]

console.log(x)

x = `The best fruit is ${fruits[0]}.`

console.log(x)

x = `The best sum is ${2+2}.`

console.log(x)

x = fruits.at(-3)

console.log(x)

const arr = [29,22,65,109]

arr.push(100)

console.log(arr)

arr.pop()

console.log(arr)

arr.unshift(99)

console.log(arr)

arr.shift()

console.log(arr)

arr.reverse()

console.log(arr)

x = arr.includes(22)

console.log(x)

x = arr.slice(1,4)

console.log(x)

x = arr.splice(0,3)

console.log(x)


