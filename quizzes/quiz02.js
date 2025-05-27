function createCounter(start) {
    let count = start;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
}

const counters = [];

for (var i = 0; i < 3; i++) {
    counters.push(createCounter(i));
}
// 1 0 2
// 1
// 1
console.log(counters[0].increment()); // ?
console.log(counters[1].decrement()); // ?
console.log(counters[2].getValue());  // ?

counters[1].increment();
console.log(counters[1].getValue());  // ?
console.log(counters[0].getValue());  // ?
