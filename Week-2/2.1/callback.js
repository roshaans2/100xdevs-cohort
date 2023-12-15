const add = (a,b) => {
    return a+b;
}

const subtract = (a,b) => {
    return a-b;
}

const multiply = (a,b) => {
    return a*b;
}

const divide = (a,b) => {
    return a/b;
}

const calculator = (a,b,operation) => {
    const result = operation(a,b);
    console.log("Result: ",result);
}

calculator(2,3,add);
calculator(2,3,subtract);
calculator(2,3,multiply);
calculator(2,3,divide);