interface Person {
	name:string
	age: number;
}


function findMax(nums: number[]){
    let ans:number = nums[0]
    for(let i=1;i<nums.length;i++){
        if(nums[i]>ans){
            ans = nums[i]
        }
    }
    return ans
} 

function isElgible(users:Person[]){
    return users.filter(x => x.age >= 18);
}


console.log(findMax([3,1,5,7,6]))
console.log(isElgible([{
    name:"deepak",
    age:21
},{
    name:"pranav",
    age:17
}]))