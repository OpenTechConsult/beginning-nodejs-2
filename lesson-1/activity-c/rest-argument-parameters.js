function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName);

    // the rest goes into titles array
    // i.e titles = ["consul", "Imperator"]
    console.log(titles[0]); // Consul
    console.log(titles[1]); // Imperator
    console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

console.log();
function showName2() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);

    // it's iterable
    for (let arg of arguments) console.log(arg)

}

showName2("Julius", "Caesar");

console.log();
function f() {
    let showArg = () => console.log(arguments[0]);
    showArg();
}

f(1);

console.log();
console.log('Spread operator');
console.log(Math.max(3, 5, 1));

let arr = [3, 5, 1];
console.log(Math.max(...arr));

// pass multiple iterables this
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(1, ...arr1, 2, ...arr2, 25));

// spread can be used to merge arrays
console.log();
console.log('Spread operator to merge arrays');
let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr3, 2, ...arr4];

console.log(merged);

// turn a string into an array of characters
console.log();
console.log('Spread operator with strings');
let str = "Hello";
console.log([...str]);
console.log(Array.from(str));