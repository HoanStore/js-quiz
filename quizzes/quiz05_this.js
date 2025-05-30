const user = {
    name: "Alex",
    greet() {
        console.log(`Hello, ${this.name}`);
    },
    delayedGreet() {
        setTimeout(function() {
            this.greet();
        }.bind(this), 100);
    }
};

user.delayedGreet();
