function reverse(str) {
    if(typeof(str) !== "string"){
        throw new Error("input no string");
    }
    return str.split("").reverse().join("");
}

function capitalize(str) {
    if(typeof(str) !== "string"){
        throw new Error("input no string");
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncate(str, length) {
    if(typeof(str) !== "string"){
        throw new Error("input no string");
    }
    if (typeof length !== "number" || length < 0) {
        throw new Error("input length no positive number");
      }

    if(str.length <= length){
        return str;
    }
    return str.slice(0, length) + "...";

}

module.exports = {
    reverse,
    capitalize,
    truncate
};