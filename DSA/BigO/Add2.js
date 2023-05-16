const { performance } = require("perf_hooks");

function add(n) {
    sum = (n * (n + 1)) / 2;
    return sum;
}

let t1 = performance.now();
console.log(add(500000000000));
let t2 = performance.now();
console.log(t2 - t1) / 1000;
