//Use map to double each element in an array.
const arr = [1,2,3,4,5]
const ans1 = arr.map(x => x*2)
console.log(ans1)

//Convert an array of temperatures from Celsius to Fahrenheit using the formula (Celsius * 9/5) + 32.

const celciusArray = [98.2,100,97.5,96,92]
const FahrenheitArray = celciusArray.map(x => (x*(9/5)+32))
console.log(FahrenheitArray)

// Given an array of strings, use map to create a new array with the lengths of each string.
const strings = ["Javascript","Node"]
const lengths = strings.map(x => x.length)
console.log(lengths)

//Given an array of words, filter out the words that have less than three characters.
const words = ["Hi","Fine","Greate","No"]
const res = words.filter(x => x.length < 3)
console.log(res)

//Given an array of numbers, filter out the numbers that are greater than 100.
const numbers = [101,105,98,99,123]
const res1 = numbers.filter(x => x > 100)
console.log(res1)