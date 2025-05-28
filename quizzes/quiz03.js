function createCounters() {
    let counters = [];

    for (var i = 0; i < 3; i++) {
        counters.push(function() {
            console.log(i);
        });
    }

    return counters;
}

const counters = createCounters();

counters[0]();
counters[1]();
counters[2]();
