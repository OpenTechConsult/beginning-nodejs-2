function add(a, b) {
    return a + b;
}

function sum() {
    let numbers = Array.from(arguments);
    let sum = 0;

    numbers.forEach(num => sum += num);
    return sum;
}

module.exports = {
    add,
    sum,
}