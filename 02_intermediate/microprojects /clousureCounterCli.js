function counter(initial, initialstore = initial) {
    return {

        increment: function () {
            initial++;
            console.log(initial);
        },

        decrement: function () {
            initial--;
            console.log(initial);
        },

        reset: function () {
            initial = initialstore;
            console.log(initial);
        }
    }
}

counter1 = counter(8);

counter1.decrement();//7
counter1.decrement();//6
counter1.decrement();//5
counter1.decrement();//4

counter1.reset(); //8

counter1.increment(); //9
counter1.increment(); //10
counter1.increment(); //11
counter1.increment(); //12


