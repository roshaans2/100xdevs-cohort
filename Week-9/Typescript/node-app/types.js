"use strict";
function greet(firstname) {
    console.log(firstname);
}
function sum(a, b) {
    return a + b;
}
function isLegal(age) {
    if (age >= 18)
        return true;
    else
        return false;
}
function delayedCall(fn) {
    setTimeout(fn, 5000);
}
greet("Shankar");
console.log(sum(2, 3));
console.log(isLegal(21));
delayedCall(function () {
    console.log("delayed function call");
});
