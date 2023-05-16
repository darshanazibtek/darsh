const { performance } = require("perf_hooks");

function add(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
let t1 = performance.now();
console.log(add("h"));
let t2 = performance.now();
console.log(t2 - t1) / 1000;
