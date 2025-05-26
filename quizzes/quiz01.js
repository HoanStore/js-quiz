// 클로저 관련된 질문
function createCounter() {
    let count = 0;
    return {
        increment: () => console.log(++count),
        decrement: () => console.log(--count)
    };
}

function run() {
    const a = createCounter();
    const b = createCounter();

    a.increment(); // 1
    a.increment(); // 2
    b.decrement(); // -1
}

export default run;
