function findMax(nums) {
    var ans = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > ans) {
            ans = nums[i];
        }
    }
    return ans;
}
function isElgible(users) {
    return users.filter(function (x) { return x.age >= 18; });
}
console.log(findMax([3, 1, 5, 7, 6]));
console.log(isElgible([{
        name: "deepak",
        age: 21
    }, {
        name: "pranav",
        age: 17
    }]));
