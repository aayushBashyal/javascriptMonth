function counter(count) {
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}

let counter1 = counter(4);
let counter2 = counter(10);

counter1();
counter1();
counter2();
