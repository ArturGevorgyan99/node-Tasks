function add(a, b) {
if(typeof(a) !== "number" || typeof(b) !== "number") {
    throw new Error("not numbers");
}
return a + b;
}

function sub(a, b) {
    if(typeof(a) !== "number" || typeof(b) !== "number") {
        throw new Error("not numbers");
    }
    return a - b;
}

function mul(a, b) {
    if(typeof(a) !== "number" || typeof(b) !== "number") {
        throw new Error("not numbers");
    }
    return a * b;
}

function div(a, b) {
    if(typeof(a) !== "number" || typeof(b) !== "number") {
        throw new Error("not numbers");
    }
    if(b === 0){
        throw new Error("Div by zero is not allowed");
        
    }
    return a / b;
}
module.exports = {
    add,
    sub,
    mul,
    div
};