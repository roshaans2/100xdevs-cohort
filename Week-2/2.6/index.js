const input = [1,2,3,4,5]


//Input for map is a function that transforms an array
//Input for the function is each element of the array
//In this example, it multiples 2 with each element of the array
const ans = input.map(x => x*2 )
console.log(ans)

//Input for filter is a function that filters the array based on specific condition
//Input for the function is each element of the array
//In this example it checks whether element is divisible by 2 and if it is true it filters that element
const res = input.filter(x => x%2 == 0)
console.log(res)

const names = ["Ram","Robert","Peter"]
const name_start_r = names.filter(x => x.startsWith('R'))
console.log(name_start_r)