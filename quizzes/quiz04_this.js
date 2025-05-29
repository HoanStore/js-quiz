const user = {
    name: "Alex",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

const greetFn = user.greet;
greetFn(); // ?

const boundGreet = user.greet.bind(user);
boundGreet(); // ?